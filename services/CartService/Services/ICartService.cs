using CartService.Dtos;
using CartService.Models;

namespace CartService.Services;

public interface ICartService
{
    Task<CartItem> CreateAsync(CreateCartItemDto dto);
}