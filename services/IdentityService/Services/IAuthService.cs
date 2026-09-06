using IdentityService.Dtos;
using IdentityService.Models;

namespace IdentityService.Services;

public interface IAuthService
{
    Task<User?> SignInAsync(UserSignInDto dto);
}