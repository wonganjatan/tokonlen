using CartService.Data;
using CartService.Dtos;
using CartService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CartService.Repositories;

public class CartRepository : ICartRepository
{
    private readonly ILogger<CartRepository> _logger;
    private readonly CartServiceContext _context;

    public CartRepository(ILogger<CartRepository> logger, CartServiceContext context)
    {
        _logger = logger;
        _context = context;
    }

    public async Task<List<CartItem>> FindByUserIdAsync(int userId)
    {
        var items = await _context.CartItems.Where(ci => ci.UserId == userId).ToListAsync();
        _logger.LogInformation("Cart of UserId {userId} is fetched", userId);

        return items;
    }

    public async Task<CartItem> CreateAsync(CreateCartItemDto dto)
    {
        var item = new CartItem
        {
            UserId = dto.UserId,
            ProductId = dto.ProductId,
            Quantity = dto.Quantity,
            CreatedAt = DateTime.UtcNow
        };

        await _context.AddAsync(item);
        await _context.SaveChangesAsync();

        return item;
    }
}