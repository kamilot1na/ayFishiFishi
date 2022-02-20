using System.Threading;
using System.Threading.Tasks;
using FishHouse.DTOs;

namespace FishHouse.Models
{
    public class TaskFish : Fish
    {
        public TaskFish(Pool pool, FishCreateDto createDto) : base(pool, createDto)
        {
        }

        public override FishType Type => FishType.Task;

        protected override void Start()
        {
            Task.Run(async () =>
            {
                while (Pool.IsFishAlive(Id))
                {
                    ActualizeThread();
                    Move();
                    await Task.Delay(10);
                }
            });
        }
    }
}
