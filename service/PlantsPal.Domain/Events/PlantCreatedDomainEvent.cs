using PlantsPal.Domain.Common;

namespace PlantsPal.Domain.Events;


public record PlantCreatedDomainEvent(
    Guid PlantId,
    Guid UserId,
    string PlantName) : IDomainEvent
{
    public DateTime OccurredOn { get; } = DateTime.UtcNow;
}