using System;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;
using FishHouse.Models;

namespace FishHouse
{
    public class Pool
    {
        public readonly ConcurrentDictionary<Guid, Fish> Fishes = new();

        public void AddFish(FishType type)
        {
            var random = new Random();
            var fish = new Fish(type, random.Next(0, 600), random.Next(0, 600));
            Fishes.TryAdd(fish.Id, fish);
            StartTask(fish);
        }

        private void StartTask(Fish fish)
        {
            if (fish.Type == FishType.Task)
            {
                Task.Run(() => FishMoving(fish));
            }
            else
            {
                Thread thread = new Thread(()=>FishMoving(fish));
                thread.Start();
            }
        }

        private void FishMoving(Fish fish)
        {
            while (Fishes.ContainsKey(fish.Id))
            {
                Fishes[fish.Id].Move();
            }
        }
    }
}
