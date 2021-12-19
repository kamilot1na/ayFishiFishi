using System;
using System.Threading;
using System.Threading.Tasks;
using FishHouse.DTOs;

namespace FishHouse.Models
{
    public class Fish
    {
        public Guid Id { get; } = Guid.NewGuid();

        public int ThreadId { get; private set; }
        public int X { get; protected set; }
        public int Y { get; protected set; }

        public string Name { get; private set; }

        public readonly FishType Type;

        public FishDirection Direction { get; set; }

        public Fish(FishType type, int x, int y, string name)
        {
            var rnd = new Random();
            Type = type;
            Direction = (FishDirection) rnd.Next(0, 2);
            X = x;
            Y = y;
            Name = name;
        }

        private void Move(int range)
        {
            if (Direction == FishDirection.Left) X -= range;
            else X += range;
            if (X >= Constants.PoolWidth - 90)
                Direction = FishDirection.Left;
            else if (X <= 0)
                Direction = FishDirection.Right;
        }

        private void ActualizeThread()
        {
            ThreadId = Thread.CurrentThread.ManagedThreadId;
        }

        private async Task StartTaskAsync(Pool pool, int speed)
        {
            while (pool.IsFishAlive(Id))
            {
                Move(speed);
                await Task.Delay(10);
                ActualizeThread();
            }
        }

        private void StartThreadAsync(Pool pool, int speed)
        {
            var thread = new Thread(() =>
            {
                while (pool.IsFishAlive(Id))
                {
                    Move(speed);
                    Thread.Sleep(10);
                    ActualizeThread();
                }
            });

            thread.Start();
        }

        public static void StartFish(FishCreateDto createDto, Pool pool, FishType type)
        {
            var random = new Random();
            var fish = new Fish(type, random.Next(0, 600), random.Next(40, 600), createDto.Name);
            switch (type)
            {
                case FishType.Task:
                    Task.Run(() => fish.StartTaskAsync(pool, createDto.Speed));
                    break;
                case FishType.Thread:
                    fish.StartThreadAsync(pool, createDto.Speed);
                    break;
                default:
                    throw new ArgumentOutOfRangeException(nameof(type), type, null);
            }

            pool.RegisterFish(fish);
        }
    }
}
