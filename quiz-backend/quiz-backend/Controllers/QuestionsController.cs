using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {

        readonly QuizContext context;
        
        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Models.Question> Get()
        {
            return context.Questions;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Models.Question question)
        {
            //Adds a questions to the object
            context.Questions.Add(question);
            //Saves a questions
            context.SaveChanges();
        }
    }
}