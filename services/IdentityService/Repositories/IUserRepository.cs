using IdentityService.Dtos;
using IdentityService.Models;

namespace IdentityService.Repositories;

public interface IUserRepository
{
    Task<User?> FindByEmailAsync(string email);
    Task CreateAsync(User user);
}