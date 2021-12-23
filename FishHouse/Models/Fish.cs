using System;
using System.Threading;

namespace FishHouse.Models
{
    public class Fish
    {
        public Guid Id { get; } = Guid.NewGuid();
        public int X { get; protected set; }
        public int Y { get; protected set; }
        
        public int ThreadId { get; private set; }

        public FishType Type { get; private set; }

        public FishDirection Direction { get; set; }

        public int UpdateDelay { get; private set; }

        public Fish(FishType type, int x, int y, int updateDelay)
        {
            var rnd = new Random();
            Type = type;
            Direction = (FishDirection) rnd.Next(0, 2);
            X = x;
            Y = y;
            UpdateDelay = updateDelay;
        }
        
        public void Update()
        {
            if (Direction == FishDirection.Left) X--;
            else X++;

            ThreadId = Thread.CurrentThread.ManagedThreadId;
        }
    }
}
