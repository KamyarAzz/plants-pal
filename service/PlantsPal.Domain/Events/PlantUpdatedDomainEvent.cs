using PlantsPal.Domain.Common;

namespace PlantsPal.Domain.Events;


public record PlantUpdatedDomainEvent(
    Guid PlantId,
    string PlantName) : IDomainEvent
{
    public DateTime OccurredOn { get; } = DateTime.UtcNow;
}