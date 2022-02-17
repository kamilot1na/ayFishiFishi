using System;
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

        [HttpPost("create")]
        public void AddFish([FromBody] FishCreateDto data) =>
            _pool.AddFish(data.Type, data.UpdateDelay);

        [HttpPost("{guid}/edit")]
        public void EditFish(string guid, [FromBody] FishEditDto data)
        {
            _pool.EditFish(new Guid(guid), data.UpdateDelay);
        }

        [HttpDelete]
        public void KillFish() =>
            _pool.Kill();

        [HttpDelete("all")]
        public void KillAllFish() =>
            _pool.KillAll();
    }
}
