using Microsoft.AspNetCore.Mvc;
using ProductService.Models;
using ProductService.Services;

namespace ProductService.Controllers;

[ApiController]
[Route("/api/[controller]s")]
public class ProductController : ControllerBase
{
    private readonly ILogger<ProductController> _logger;
    private readonly IProductService _productService;

    public ProductController(ILogger<ProductController> logger,IProductService productService)
    {
        _logger = logger;
        _productService = productService;
    }

    [HttpGet]
    public async Task<ActionResult<List<Product>>> FindAllAsync()
    {
        var products = await _productService.FindAllAsync();

        return products;
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Product>> FindByIdAsync(int id)
    {
        var product = await _productService.FindByIdAsync(id);

        if (product == null)
        {
            _logger.LogWarning("Product not found");
            return NotFound();
        }

        return Ok(product);
    }
}