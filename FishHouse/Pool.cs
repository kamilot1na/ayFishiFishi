using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using FishHouse.Models;

namespace FishHouse
{
    public class Pool
    {
        private readonly ConcurrentDictionary<Guid, Fish> Fishes = new();

        public void RegisterFish(Fish fish)
        {
            Fishes.TryAdd(fish.Id, fish);
        }

        public bool IsFishAlive(Guid id) => Fishes.ContainsKey(id);


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
    }
}
