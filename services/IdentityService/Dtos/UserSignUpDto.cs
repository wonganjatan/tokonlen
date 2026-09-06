using System.ComponentModel.DataAnnotations;

namespace IdentityService.Dtos;
public class UserSignUpDto
{
    [Required]
    [StringLength(20)]
    [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Letters only")]
    public string FirstName { get; set; }

    [Required]
    [StringLength(20)]
    [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Letters only")]
    public string LastName { get; set; }

    [Required]
    [StringLength(20)]
    [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Letters only")]
    public string Username { get; set; }

    [Required]
    [StringLength(255)]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [StringLength(100, MinimumLength = 8)]
    [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?"":{}|<>]).+$",
        ErrorMessage = "Password must contain uppercase, lowercase, a digit, and a special character")]
    public string Password { get; set; }

    [Required]
    [Compare(nameof(Password), ErrorMessage = "Password do not match")]
    public string ConfirmPassword { get; set; }
}