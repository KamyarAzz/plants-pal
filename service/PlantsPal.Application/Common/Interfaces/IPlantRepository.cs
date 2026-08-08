using PlantsPal.Domain.Entities;

namespace PlantsPal.Application.Common.Interfaces;


public interface IPlantRepository
{
    Task<Plant?> GetByIdAsync(
        Guid id,
        CancellationToken cancellationToken = default);

    Task<Plant?> GetByIdWithDetailsAsync(
        Guid id,
        CancellationToken cancellationToken = default);

    Task<IEnumerable<Plant>> GetByUserIdAsync(
        Guid userId,
        CancellationToken cancellationToken = default);

    Task AddAsync(
        Plant plant,
        CancellationToken cancellationToken = default);

    Task UpdateAsync(
        Plant plant,
        CancellationToken cancellationToken = default);

    Task DeleteAsync(
        Plant plant,
        CancellationToken cancellationToken = default);
}