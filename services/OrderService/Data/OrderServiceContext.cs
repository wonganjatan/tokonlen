using Microsoft.EntityFrameworkCore;
using OrderService.Models;

namespace OrderService.Data;

public class OrderServiceContext : DbContext
{
    public OrderServiceContext(DbContextOptions<OrderServiceContext> options) : base(options)
    {
        
    }

    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderItem> OrderItems { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        // Configure composite primary key for StoreProduct.
        //builder.Entity<StoreProduct>().HasKey(x => new { x.StoreID, x.ProductID });
    }
}