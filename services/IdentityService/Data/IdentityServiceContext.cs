using IdentityService.Models;
using Microsoft.EntityFrameworkCore;

namespace IdentityService.Data;

public class IdentityServiceContext : DbContext
{
    public IdentityServiceContext(DbContextOptions<IdentityServiceContext> options) : base(options)
    {
        
    }

    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        // Configure composite primary key for StoreProduct.
        //builder.Entity<StoreProduct>().HasKey(x => new { x.StoreID, x.ProductID });
    }
}