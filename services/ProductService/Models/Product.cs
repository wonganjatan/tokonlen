using System.ComponentModel.DataAnnotations;

public class Product

{
    public int ProductId { get; set; }

    [Required(ErrorMessage = "Name is required")]
    [StringLength(200, MinimumLength = 2)]
    public string Name { get; set; }

    [Required]
    [StringLength(2000)]
    public string Description { get; set; }

    [Required]
    [Range(0.01, 1000000, ErrorMessage = "Price must be greater than 0")]
    public decimal Price { get; set; }

    [Required]
    [StringLength(100)]
    public string Category { get; set; }
    public DateTime CreatedAt { get; set; }
}