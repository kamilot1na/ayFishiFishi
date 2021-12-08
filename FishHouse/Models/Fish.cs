using System;

namespace FishHouse.Models
{
    public class Fish
    {
        public Guid Id { get; } = Guid.NewGuid();
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
        public void Move()
        {
            if (Direction == FishDirection.Left) X--;
            else X++;
        }
    }
}
