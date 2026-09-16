using ProductService.Models;

namespace ProductService.Services;

public interface IProductService
{
    Task<List<Product>> GetAllAsync();
}