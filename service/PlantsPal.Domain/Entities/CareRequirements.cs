using PlantsPal.Domain.Common;
using PlantsPal.Domain.Enums;
using PlantsPal.Domain.Exceptions;

namespace PlantsPal.Domain.Entities;


public class CareRequirements : BaseEntity
{
    public Guid PlantId { get; private set; }
    public int WateringFrequencyDays { get; private set; }
    public SunlightLevel Sunlight { get; private set; }
    public string? SoilType { get; private set; }
    public string? CustomCareNotes { get; private set; }
    public bool IsActive { get; private set; }
    public DateTime CreatedAt { get; private set; }
    public DateTime? UpdatedAt { get; private set; }

    private CareRequirements() { }

    private CareRequirements(
        Guid plantId,
        int wateringFrequencyDays,
        SunlightLevel sunlight,
        string? soilType,
        string? customCareNotes)
    {
        PlantId = plantId;
        WateringFrequencyDays = wateringFrequencyDays;
        Sunlight = sunlight;
        SoilType = soilType;
        CustomCareNotes = customCareNotes;
        IsActive = true;
        CreatedAt = DateTime.UtcNow;
    }

    public static CareRequirements Create(
        Guid plantId,
        int wateringFrequencyDays,
        SunlightLevel sunlight,
        string? soilType = null,
        string? customCareNotes = null)
    {
        if (wateringFrequencyDays <= 0)
            throw new DomainException("Watering frequency must be greater than 0");

        if (wateringFrequencyDays > 365)
            throw new DomainException("Watering frequency cannot exceed 365 days");

        return new CareRequirements(
            plantId,
            wateringFrequencyDays,
            sunlight,
            soilType?.Trim(), 
            customCareNotes?.Trim());
    }

    public void Update(int wateringFrequencyDays, SunlightLevel sunlight, string? soilType, string? customCareNotes)
    {
        if (wateringFrequencyDays <= 0)
            throw new DomainException("Watering frequency must be greater than 0");

        if (wateringFrequencyDays > 365)
            throw new DomainException("Watering frequency cannot exceed 365 days");

        WateringFrequencyDays = wateringFrequencyDays;
        Sunlight = sunlight;
        SoilType = soilType?.Trim();
        CustomCareNotes = customCareNotes?.Trim();
        UpdatedAt = DateTime.UtcNow;
    }

    public void Deactivate()
    {
        IsActive = false;
        UpdatedAt = DateTime.UtcNow;
    }

    public void Activate()
    {
        IsActive = true;
        UpdatedAt = DateTime.UtcNow;
    }
}