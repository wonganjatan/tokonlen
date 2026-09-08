using IdentityService.Data;
using IdentityService.Dtos;
using IdentityService.Models;
using Microsoft.EntityFrameworkCore;

namespace IdentityService.Repositories;

public class UserRepository : IUserRepository
{
    private readonly ILogger<UserRepository> _logger;
    private readonly IdentityServiceContext _context;

    public UserRepository(
        ILogger<UserRepository> logger,
        IdentityServiceContext context
    )
    {
        _logger = logger;
        _context = context;
    }

    public async Task<User?> FindByEmailAsync(string email)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);

        return user;
    }

    public async Task CreateAsync(User user)
    {
        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();
    }
}