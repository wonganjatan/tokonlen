using Microsoft.EntityFrameworkCore;

public class ProductServiceContext : DbContext
{
    public ProductServiceContext(DbContextOptions<ProductServiceContext> options) : base(options)
    {
        
    }

    public DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        // Configure composite primary key for StoreProduct.
        //builder.Entity<StoreProduct>().HasKey(x => new { x.StoreID, x.ProductID });
    }
}