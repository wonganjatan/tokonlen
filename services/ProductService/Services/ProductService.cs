using ProductService.Models;
using ProductService.Repositories;

namespace ProductService.Services;

public class ProductService : IProductService
{
    private readonly ILogger<ProductService> _logger;
    private readonly IProductRepository _productRepository;

    public ProductService(ILogger<ProductService> logger, IProductRepository productRepository)
    {
        _logger = logger;
        _productRepository = productRepository;
    }
    public async Task<List<Product>> FindAllAsync()
    {
        return await _productRepository.FindAllAsync();
    }

    public async Task<Product?> FindByIdAsync(int id)
    {
        return await _productRepository.FindByIdAsync(id);
    }
}