using ProductService.Models;

namespace ProductService.Repositories;
public interface IProductRepository
{
    Task<List<Product>> FindAllAsync();
}