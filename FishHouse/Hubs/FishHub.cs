﻿using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace FishHouse.Hubs
{
    public class FishHub : Hub
    {
        private readonly Pool _pool;

        public FishHub(Pool pool)
        {
            _pool = pool;
        }
    }
}
