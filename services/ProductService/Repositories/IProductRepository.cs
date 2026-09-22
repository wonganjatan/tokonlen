using ProductService.Models;

namespace ProductService.Repositories;
public interface IProductRepository
{
    Task<List<Product>> FindAllAsync();
    Task<Product?> FindByIdAsync(int id);
}