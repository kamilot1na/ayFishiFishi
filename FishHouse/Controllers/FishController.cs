using FishHouse.DTOs;
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
        public void AddThreadFish([FromBody] FishCreateDto dto) =>
            _pool.AddFish(FishType.Thread, dto.Name);


        [HttpPost("task")]
        public void AddTaskFish([FromBody] FishCreateDto dto) => 
            _pool.AddFish(FishType.Task, dto.Name);

        [HttpDelete]
        public void KillFish() =>
            _pool.Kill();

        [HttpDelete("all")]
        public void KillAllFish() =>
            _pool.KillAll();
    }
}
