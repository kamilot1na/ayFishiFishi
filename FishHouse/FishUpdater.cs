using System.Threading;
using FishHouse.Hubs;
using Microsoft.AspNetCore.SignalR;

namespace FishHouse
{
    public class FishUpdater
    {
        private IHubContext<FishHub> _hubContext;
        private Pool _pool;
        
        public FishUpdater(IHubContext<FishHub> hubContext, Pool pool)
        {
            _hubContext = hubContext;
            _pool = pool;
        }
        
        public void Start()
        {
            Thread thread = new Thread(FishUpdateThread);
            thread.Start();
        }

        private void FishUpdateThread()
        {
            while (true)
            {
                _hubContext.Clients.All.SendAsync("ReceiveMessage", _pool.GetFishes());

                Thread.Sleep(100);
            }
        }
    }
}