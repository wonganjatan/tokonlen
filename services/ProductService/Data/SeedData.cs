using ProductService.Models;

namespace ProductService.Data;

public static class SeedData
{
    public static void Init(IServiceProvider serviceProvider)
    {
        var context = serviceProvider.GetRequiredService<ProductServiceContext>();

        if (context.Products.Any()) {
            return; // DB has already been seeded.
        }

        var products = new List<Product>
        {
            new Product
            {
                Name = "Wireless Mouse",
                Description = "Ergonomic wireless mouse with adjustable DPI and USB receiver.",
                Price = 19.99m,
                Category = "Electronics",
                CreatedAt = DateTime.UtcNow
            },
            new Product
            {
                Name = "Mechanical Keyboard",
                Description = "RGB backlit mechanical keyboard with blue switches.",
                Price = 59.99m,
                Category = "Electronics",
                CreatedAt = DateTime.UtcNow
            },
            new Product
            {
                Name = "Running Shoes",
                Description = "Lightweight running shoes with breathable mesh upper.",
                Price = 74.50m,
                Category = "Footwear",
                CreatedAt = DateTime.UtcNow
            },
            new Product
            {
                Name = "Ceramic Coffee Mug",
                Description = "350ml ceramic mug, microwave and dishwasher safe.",
                Price = 8.99m,
                Category = "Home & Kitchen",
                CreatedAt = DateTime.UtcNow
            },
            new Product
            {
                Name = "Yoga Mat",
                Description = "Non-slip yoga mat, 6mm thick, includes carrying strap.",
                Price = 24.99m,
                Category = "Sports & Outdoors",
                CreatedAt = DateTime.UtcNow
            },
            new Product
            {
                Name = "Bluetooth Speaker",
                Description = "Portable waterproof speaker with 10-hour battery life.",
                Price = 39.99m,
                Category = "Electronics",
                CreatedAt = DateTime.UtcNow
            },
            new Product
            {
                Name = "Backpack",
                Description = "Water-resistant laptop backpack with multiple compartments.",
                Price = 45.00m,
                Category = "Accessories",
                CreatedAt = DateTime.UtcNow
            },
            new Product
            {
                Name = "Desk Lamp",
                Description = "LED desk lamp with adjustable brightness and color temperature.",
                Price = 27.50m,
                Category = "Home & Kitchen",
                CreatedAt = DateTime.UtcNow
            }
        };


        context.AddRange(products);
        context.SaveChanges();
    }
}