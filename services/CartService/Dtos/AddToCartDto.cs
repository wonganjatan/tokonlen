using System.ComponentModel.DataAnnotations;

namespace CartService.Dtos;

public class AddToCartDto
{
    [Required]
    public int ProductId { get; set; }

    [Required]
    [Range(1, 1000)]
    public int Quantity { get; set; }
}