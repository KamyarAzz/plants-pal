using PlantsPal.Domain.Common;

namespace PlantsPal.Domain.Events;


public record PlantWateredDomainEvent(
    Guid PlantId,
    Guid WateringRecordId,
    DateTime WateredDate) : IDomainEvent
{
    public DateTime OccurredOn { get; } = DateTime.UtcNow;
}