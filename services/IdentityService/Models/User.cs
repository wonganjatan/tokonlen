
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace IdentityService.Models;

public enum Role {
    User,
    Admin
}

[Index(nameof(Username), IsUnique = true)]
[Index(nameof(Email), IsUnique = true)]
public class User
{
    public int UserId { get; set; }

    [Required]
    [MaxLength(20)]
    public string FirstName { get; set; }

    [Required]
    [MaxLength(20)]
    public string LastName { get; set; }

    [Required]
    [MaxLength(20)]
    public string Username { get; set; }

    [Required]
    [MaxLength(255)]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    public string PasswordHash { get; set; }

    [Required]
    public Role Role { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}