using IdentityService.Dtos;
using IdentityService.Models;
using IdentityService.Repositories;

namespace IdentityService.Services;

public class AuthService : IAuthService
{   
    private readonly ILogger<AuthService> _logger;
    private readonly IUserRepository _userRepository;

    public AuthService(
        ILogger<AuthService> logger,
        IUserRepository userRepository
    )
    {
        _logger = logger;
        _userRepository = userRepository;
    }

    public async Task<User?> SignInAsync(UserSignInDto dto)
    {
        var user = await _userRepository.FindByEmailAsync(dto.Email);

        if (user == null)
        {
            _logger.LogWarning("Sign in failed");
            return null;
        }

        if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.PasswordHash))
        {
            _logger.LogWarning("Sign in failed");
            return null;
        }

        _logger.LogInformation("Sign in successful");
        return user;
    }

    public async Task SignUpAsync(UserSignUpDto dto)
    {
        var hashedPassword = BCrypt.Net.BCrypt.HashPassword(dto.Password);
        
        var user = new User {
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            Username = dto.Username,
            Email = dto.Email,
            PasswordHash = hashedPassword,
            Role = Role.User
        };

        await _userRepository.CreateAsync(user);
    }
}