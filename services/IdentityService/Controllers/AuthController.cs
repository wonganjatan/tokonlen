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

    public AuthController(
        ILogger<AuthController> logger,
        IAuthService authService
    )
    {
        _logger = logger;
        _authService = authService;
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

        return Ok(new { message = "Signed in successfully"});
    }
}