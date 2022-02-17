using FishHouse.Models;

namespace FishHouse.DTOs
{
    public class FishCreateDto
    {
        public FishType Type { get; set; }
        public int UpdateDelay { get; set; }
    }
}