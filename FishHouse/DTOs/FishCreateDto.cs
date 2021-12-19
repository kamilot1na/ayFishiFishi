using System.ComponentModel.DataAnnotations;

namespace FishHouse.DTOs
{
    public class FishCreateDto
    {
        public string Name { get; set; }

        [Range(1, 10)]
        public int Speed { get; set; } = 5;
    }
}
