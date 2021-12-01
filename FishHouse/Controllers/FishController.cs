using FishHouse.Models;
using Microsoft.AspNetCore.Mvc;

namespace FishHouse.Controllers
{
    [Route("fish")]
    public class FishController
    {
        private readonly Pool _pool;

        public FishController(Pool pool)
        {
            _pool = pool;
        }

        [HttpPost("thread")]
        public void AddThreadFish() =>
            _pool.AddFish(FishType.Thread);


        [HttpPost("task")]
        public void AddTaskFish() => _pool.AddFish(FishType.Task);

        [HttpDelete]
        public void KillFish() =>
            _pool.Kill();

        [HttpDelete("all")]
        public void KillAllFish() =>
            _pool.KillAll();
    }
}
