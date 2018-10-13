/**
 *@author: Pedro Santana
 */


namespace quiz_backend.Models
{
    /// <summary>
    /// Quiz property
    /// </summary>
    public class Quiz
    {
        public int ID { get; set; }
        public string Title { get; set; }

        public string  OwnerId { get; set; }
    }
}
