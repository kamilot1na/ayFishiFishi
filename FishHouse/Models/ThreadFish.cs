using System.Threading;
using FishHouse.DTOs;

namespace FishHouse.Models
{
    public class ThreadFish : Fish
    {
        public ThreadFish(Pool pool, FishCreateDto createDto) : base(pool, createDto)
        {
        }

        public override FishType Type => FishType.Thread;

        protected override void Start()
        {
            var thread = new Thread(() =>
            {
                while (Pool.IsFishAlive(Id))
                {
                    ActualizeThread();
                    Move();
                    Thread.Sleep(10);
                }
            });

            thread.Start();
        }
    }
}
