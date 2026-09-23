using CartService.Dtos;
using CartService.Models;

namespace CartService.Repositories;

public interface ICartRepository
{
    Task<List<CartItem>> FindByUserIdAsync(int userId);
    Task<CartItem> CreateAsync(CreateCartItemDto dto);
}