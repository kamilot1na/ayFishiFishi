using Microsoft.AspNetCore.Mvc;

namespace FishHouse.Controllers
{
    [Route("fish")]
    public class FishController
    {
        [HttpPost("thread")]
        public void AddThreadFish()
        {

        }

        [HttpPost("task")]
        public void AddTaskFish()
        {

        }

        [HttpDelete]
        public void KillFish()
        {

        }
    }
}
