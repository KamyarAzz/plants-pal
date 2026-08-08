using PlantsPal.Domain.Common;
using PlantsPal.Domain.Events;
using PlantsPal.Domain.Exceptions;
using PlantsPal.Domain.ValueObjects;

namespace PlantsPal.Domain.Entities;


public class Plant : BaseEntity, IAggregateRoot
{
    public string Name { get; private set; }
    public string Species { get; private set; }
    public string? ImageUrl { get; private set; }
    public string? Notes { get; private set; }
    public UserId UserId { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public DateTime? UpdatedAt { get; private set; }

    private Plant() { }

    private Plant(
        string name,
        string species,
        UserId userId,
        string? imageUrl,
        string? notes)
    {
        Name = name;
        Species = species;
        UserId = userId;
        ImageUrl = imageUrl;
        Notes = notes;
        CreatedAt = DateTime.UtcNow;

        AddDomainEvent(new PlantCreatedDomainEvent(Id, userId, name));
    }

    public static Plant Create(
        string name,
        string species,
        Guid userId,
        string? imageUrl = null,
        string? notes = null)
    {
        if (string.IsNullOrWhiteSpace(name))
            throw new DomainException("Plant name is required");

        if (string.IsNullOrWhiteSpace(species))
            throw new DomainException("Plant species is required");

        if (name.Length > 100)
            throw new DomainException("Plant name must not exceed 100 characters");

        if (species.Length > 100)
            throw new DomainException("Plant species must not exceed 100 characters");

        return new Plant(name.Trim(), species.Trim(), UserId.Create(userId), imageUrl?.Trim(), notes?.Trim());
    }

    public void Update(string name, string species, string? imageUrl, string? notes)
    {
        if (string.IsNullOrWhiteSpace(name))
            throw new DomainException("Plant name is required");

        if (string.IsNullOrWhiteSpace(species))
            throw new DomainException("Plant species is required");

        Name = name.Trim();
        Species = species.Trim();
        ImageUrl = imageUrl?.Trim();
        Notes = notes?.Trim();
        UpdatedAt = DateTime.UtcNow;

        AddDomainEvent(new PlantUpdatedDomainEvent(Id, name));
    }
}