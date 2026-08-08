using Microsoft.EntityFrameworkCore;
using PlantsPal.Domain.Entities;

namespace PlantsPal.Application.Common.Interfaces;


public interface IApplicationDbContext
{
    DbSet<Plant> Plants { get; }
    DbSet<CareRequirements> CareRequirements { get; }
    DbSet<WateringRecord> WateringRecords { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}