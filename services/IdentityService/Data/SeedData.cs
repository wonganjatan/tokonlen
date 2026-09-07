using IdentityService.Models;

namespace IdentityService.Data;

public static class SeedData
{
    public static void Init(IServiceProvider serviceProvider)
    {
        var context = serviceProvider.GetRequiredService<IdentityServiceContext>();

        if (context.Users.Any()) {
            return; // DB has already been seeded.
        }

        var hashedPassword = BCrypt.Net.BCrypt.HashPassword("Admin12!");

        var admin = new User
        {
            FirstName = "Admin",
            LastName = "User",
            Username = "admin",
            Email = "admin@email.com",
            PasswordHash = hashedPassword,
            Role = Role.Admin,
        };

        context.Add(admin);
        context.SaveChanges();
    }
}