using IdentityService.Data;
using IdentityService.Dtos;
using IdentityService.Services;
using Microsoft.AspNetCore.Mvc;

namespace IdentityService.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly ILogger<AuthController> _logger;
    private readonly IAuthService _authService;
    private readonly IJwtService _jwtService;

    public AuthController(
        ILogger<AuthController> logger,
        IAuthService authService,
        IJwtService jwtService
    )
    {
        _logger = logger;
        _authService = authService;
        _jwtService = jwtService;
    }

    [HttpPost]
    [Route("login")]
    public async Task<IActionResult> SignIn(UserSignInDto dto)
    {
        var user = await _authService.SignInAsync(dto);

        if (user == null)
        {
            _logger.LogWarning("Sign in failed");
            return Unauthorized("Invalid email or password");
        }

        var token = _jwtService.GenerateToken(user);

        return Ok(new AuthResponseDto
        {
            UserId = user.UserId,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Username = user.Username,
            Email = user.Email,
            Role = user.Role,
            CreatedAt = user.CreatedAt,
            Token = token        
        });
    }

    [HttpPost]
    [Route("register")]
    public async Task SignUp(UserSignUpDto dto)
    {
        await _authService.SignUpAsync(dto);
    }
}