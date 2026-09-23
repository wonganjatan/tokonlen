using CartService.Dtos;
using CartService.Models;

namespace CartService.Services;

public interface ICartService
{
    Task<List<CartItem>> FindByUserIdAsync(int userId);
    Task<CartItem> CreateAsync(CreateCartItemDto dto);
}