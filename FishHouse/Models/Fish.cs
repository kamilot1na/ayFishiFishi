using System;
using System.Threading;
using FishHouse.DTOs;

namespace FishHouse.Models
{
    public abstract class Fish
    {
        public Guid Id = Guid.NewGuid();

        public Fish(Pool pool, FishCreateDto createDto)
        {
            var rnd = new Random();
            Direction = (FishDirection) rnd.Next(0, 2);
            X = rnd.Next(0, 600);
            Y = rnd.Next(0, 600);
            Name = createDto.Name;
            Pool = pool;
            Speed = createDto.Speed;
        }

        public int ThreadId { get; protected set; }
        public int X { get; protected set; }
        public int Y { get; protected set; }

        public string Name { get; protected set; }

        public abstract FishType Type { get; }

        public FishDirection Direction { get; protected set; }

        public Pool Pool { get; protected set; }

        public int Speed { get; protected set; }

        protected void Move()
        {
            if (Direction == FishDirection.Left) X -= Speed;
            else X += Speed;
            Direction = X switch
            {
                >= Constants.PoolWidth - 90 => FishDirection.Left,
                <= 0 => FishDirection.Right,
                _ => Direction
            };
        }

        protected void ActualizeThread()
        {
            ThreadId = Thread.CurrentThread.ManagedThreadId;
        }

        public static void StartFish(FishCreateDto createDto, Pool pool, FishType type)
        {
            Fish fish = type switch
            {
                FishType.Task => new TaskFish(pool, createDto),
                FishType.Thread => new ThreadFish(pool, createDto),
                _ => throw new ArgumentOutOfRangeException(nameof(type), type, null)
            };
            pool.RegisterFish(fish);
            fish.Start();
        }

        protected abstract void Start();
    }
}
