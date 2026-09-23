using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using CartService.Dtos;
using CartService.Models;
using CartService.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CartService.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class CartController : ControllerBase
{
    private readonly ILogger<CartController> _logger;
    private readonly ICartService _cartService;

    public CartController(ILogger<CartController> logger, ICartService cartService)
    {
        _logger = logger;
        _cartService = cartService;
    }

    private string GetUserId()
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value;

        if (userId == null)
        {
            _logger.LogWarning("User not found");
            throw new UnauthorizedAccessException();
        }

        return userId;
    }

    [HttpGet]
    public async Task<ActionResult<List<CartItem>>> FindByUserIdAsync()
    {
        var userId = GetUserId();
        var cart = await _cartService.FindByUserIdAsync(int.Parse(userId));

        return cart;
    }

    [HttpPost]
    public async Task<ActionResult<CartItem>> CreateAsync(AddToCartDto dto)
    {
        var userId = GetUserId();

        var newItem = new CreateCartItemDto
        {
            UserId = int.Parse(userId),
            ProductId = dto.ProductId,
            Quantity = dto.Quantity
        };

        var item = await _cartService.CreateAsync(newItem);
        _logger.LogInformation("Item is added to the cart");
        
        return Ok(item);
    }
}