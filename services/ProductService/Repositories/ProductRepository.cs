using Microsoft.EntityFrameworkCore;
using ProductService.Models;

namespace ProductService.Repositories;
public class ProductRepository : IProductRepository
{
    private readonly ILogger<ProductRepository> _logger;
    private readonly ProductServiceContext _context;

    public ProductRepository(ILogger<ProductRepository> logger, ProductServiceContext context)
    {
        _logger = logger;
        _context = context;
    }
    public async Task<List<Product>> FindAllAsync()
    {
        var products = await _context.Products.ToListAsync();

        return products;
    }
}