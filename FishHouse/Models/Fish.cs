using System;

namespace FishHouse.Models
{
    public class Fish
    {
        public readonly Guid Id = Guid.NewGuid();
        public int X { get; protected set; }
        public int Y { get; protected set; }

        public readonly FishType Type;

        public readonly FishDirection Direction;

        public Fish(FishType type, int x, int y)
        {
            var rnd = new Random();
            Type = type;
            Direction = (FishDirection) rnd.Next(0, 2);
            X = x;
            Y = y;
        }
        public void Move()
        {
            if (Direction == FishDirection.Left) X--;
            else X++;
        }
    }
}
