using CartService.Dtos;
using CartService.Models;
using CartService.Repositories;

namespace CartService.Services;

public class CartService : ICartService
{
    private readonly ILogger<CartService> _logger;
    private readonly ICartRepository _cartRepository;

    public CartService(ILogger<CartService> logger, ICartRepository cartRepository)
    {
        _logger = logger;
        _cartRepository = cartRepository;
    }

    public async Task<CartItem> CreateAsync(CreateCartItemDto dto)
    {
        return await _cartRepository.CreateAsync(dto);
    }
}