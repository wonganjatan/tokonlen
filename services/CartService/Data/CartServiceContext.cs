using CartService.Models;
using Microsoft.EntityFrameworkCore;

namespace CartService.Data;

public class CartServiceContext : DbContext
{
    public CartServiceContext(DbContextOptions<CartServiceContext> options) : base(options)
    {
        
    }

    DbSet<CartItem> CartItems { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        // Configure composite primary key for StoreProduct.
        //builder.Entity<StoreProduct>().HasKey(x => new { x.StoreID, x.ProductID });
    }
}