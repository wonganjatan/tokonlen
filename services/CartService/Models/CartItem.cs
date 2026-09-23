using System.ComponentModel.DataAnnotations;

namespace CartService.Models;

public class CartItem
{
    public int CartItemId { get; set; }

    [Required]
    public int UserId { get; set; }

    [Required]
    public int ProductId { get; set; }

    [Required]
    [Range(1, 1000)]
    public int Quantity { get; set; }
    public DateTime CreatedAt { get; set; }
}