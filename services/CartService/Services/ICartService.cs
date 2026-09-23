using CartService.Dtos;
using CartService.Models;

namespace CartService.Services;

public interface ICartService
{
    Task<List<CartItem>> FindAllAsync();
    Task<CartItem> CreateAsync(CreateCartItemDto dto);
}