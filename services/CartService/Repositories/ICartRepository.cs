using CartService.Dtos;
using CartService.Models;

namespace CartService.Repositories;

public interface ICartRepository
{
    Task<List<CartItem>> FindAllAsync();
    Task<CartItem> CreateAsync(CreateCartItemDto dto);
}