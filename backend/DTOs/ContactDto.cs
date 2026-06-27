using System.ComponentModel.DataAnnotations;

namespace DTOs;

public class ContactDto
{
    [Required]
    [MinLength(3, ErrorMessage = "Name must be at least 3 characters long.")]
    public string Name { get; init; } = string.Empty;

    [Required]
    [EmailAddress]
    public string Email { get; init; } = string.Empty;

    [Required]
    [MaxLength(500, ErrorMessage = "Message is too long (maximum 500 characters).")]
    public string Message { get; init; } = string.Empty;
}