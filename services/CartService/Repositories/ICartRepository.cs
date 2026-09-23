using CartService.Dtos;
using CartService.Models;

namespace CartService.Repositories;

public interface ICartRepository
{
    Task<CartItem> Create(CreateCartItemDto dto);
}