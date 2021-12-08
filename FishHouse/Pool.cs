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
        private const int UpdateDelay = 10;
        public readonly ConcurrentDictionary<Guid, Fish> Fishes = new();
        public int Width => 1024;

        public void AddFish(FishType type, string name)
        {
            var random = new Random();
            var fish = new Fish(type, random.Next(0, 600), random.Next(40, 600), name);
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
                Task.Run(() => FishMovingTask(fish));
            }
            else
            {
                Thread thread = new Thread(() => FishMovingThread(fish));
                thread.Start();
            }
        }

        private void FishMovingThread(Fish fish)
        {
            while (Fishes.ContainsKey(fish.Id))
            {
                MoveFish(fish);
                Thread.Sleep(UpdateDelay);
            }
        }

        private async Task FishMovingTask(Fish fish)
        {
            while (Fishes.ContainsKey(fish.Id))
            {
                MoveFish(fish);
                await Task.Delay(UpdateDelay);
            }
        }

        private void MoveFish(Fish fish)
        {
            fish.Move();
            if (fish.X >= Width - 90) 
                fish.Direction = FishDirection.Left;
            else if (fish.X <= 0)
                fish.Direction = FishDirection.Right;
        }
    }
}
