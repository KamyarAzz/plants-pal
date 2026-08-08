using PlantsPal.Domain.Common;
using PlantsPal.Domain.Enums;
using PlantsPal.Domain.Events;
using PlantsPal.Domain.Exceptions;
using PlantsPal.Domain.ValueObjects;

namespace PlantsPal.Domain.Entities;


public class Plant : BaseEntity, IAggregateRoot
{
    private readonly List<CareRequirements> _careRequirements = new();
    private readonly List<WateringRecord> _wateringHistory = new();

    public string Name { get; private set; }
    public string Species { get; private set; }
    public string? ImageUrl { get; private set; }
    public string? Notes { get; private set; }
    public UserId UserId { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public DateTime? UpdatedAt { get; private set; }

    public IReadOnlyCollection<CareRequirements> CareRequirements => 
        _careRequirements.AsReadOnly();
    public IReadOnlyCollection<WateringRecord> WateringHistory => 
        _wateringHistory.AsReadOnly();

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

        return new Plant(
            name.Trim(),
            species.Trim(),
            UserId.Create(userId),
            imageUrl?.Trim(),
            notes?.Trim());
    }

    public void Update(
        string name,
        string species,
        string? imageUrl,
        string? notes)
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

    public void AddCareRequirements(
        int wateringFrequencyDays,
        SunlightLevel sunlight,
        string? soilType = null,
        string? customCareNotes = null)
    {
        var activeRequirements = _careRequirements.Where(r => r.IsActive).ToList();
        foreach (var requirement in activeRequirements)
        {
            requirement.Deactivate();
        }

        var newRequirements = Entities.CareRequirements.Create(
            Id,
            wateringFrequencyDays,
            sunlight,
            soilType,
            customCareNotes);

        _careRequirements.Add(newRequirements);
    }

    public WateringRecord RecordWatering(string? notes = null)
    {
        var wateringRecord = WateringRecord.Create(Id, notes);
        _wateringHistory.Add(wateringRecord);

        AddDomainEvent(
            new PlantWateredDomainEvent(
                Id,
                wateringRecord.Id,
                wateringRecord.WateredDate));

        return wateringRecord;
    }

    public DateTime? CalculateNextWateringDate()
    {
        var activeRequirements = _careRequirements.LastOrDefault(r => r.IsActive);
        if (activeRequirements == null) return null;

        var lastWatering = _wateringHistory.LastOrDefault();
        if (lastWatering == null) return DateTime.UtcNow;

        return lastWatering.WateredDate.AddDays(activeRequirements.WateringFrequencyDays);
    }

    public bool IsWateringOverdue()
    {
        var nextWatering = CalculateNextWateringDate();
        return nextWatering.HasValue && DateTime.UtcNow > nextWatering.Value;
    }

    public CareRequirements? GetActiveCareRequirements()
    {
        return _careRequirements.LastOrDefault(r => r.IsActive);
    }
}