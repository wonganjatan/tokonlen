using IdentityService.Models;

namespace IdentityService.Dtos;

public class AuthResponseDto
{
    public int UserId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
    public Role Role { get; set; }
    public DateTime CreatedAt { get; set; }
    public string Token { get; set; }
}