using PlantsPal.Domain.Common;

namespace PlantsPal.Domain.Entities;


public class WateringRecord : BaseEntity
{
    public Guid PlantId { get; private set; }
    public DateTime WateredDate { get; private set; }
    public string? Notes { get; private set; }
    public DateTime CreatedAt { get; private set; }

    private WateringRecord() { }

    private WateringRecord(
        Guid plantId,
        DateTime wateredDate,
        string? notes)
    {
        PlantId = plantId;
        WateredDate = wateredDate;
        Notes = notes;
        CreatedAt = DateTime.UtcNow;
    }

    public static WateringRecord Create(
        Guid plantId,
        string? notes = null)
    {
        return new WateringRecord(plantId, DateTime.UtcNow, notes?.Trim());
    }
}