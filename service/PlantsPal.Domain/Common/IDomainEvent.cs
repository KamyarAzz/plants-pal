namespace PlantsPal.Domain.Common;


public interface IDomainEvent
{
    DateTime OccurredOn { get; }
}