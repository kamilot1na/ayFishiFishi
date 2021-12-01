using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
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

        public List<Fish> GetFishes() => Fishes.Select(x => x.Value).ToList();


        public void Kill()
        {
            var failures = 0;
            var rnd = new Random();
            var fishes = Fishes.ToArray();
            while (!Fishes.TryRemove(fishes[rnd.Next(0, fishes.Length)].Key, out _))
            {
                failures++;
                if (failures > 3)
                {
                    throw new Exception("I don't know what to do exception");
                }
            }
        }

        public void KillAll() =>
            Fishes.Clear();


        private void StartTask(Fish fish)
        {
            if (fish.Type == FishType.Task)
            {
                Task.Run(() => FishMoving(fish));
            }
            else
            {
                Thread thread = new Thread(() => FishMoving(fish));
                thread.Start();
            }
        }

        private void FishMoving(Fish fish)
        {
            while (Fishes.TryGetValue(fish.Id, out var f))
            {
                f.Move();
            }
        }
    }
}
