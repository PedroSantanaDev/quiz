﻿/**
*@Author: Pedro Santana 
*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {

        readonly QuizContext context;
        
        public QuestionsController(QuizContext context)
        {
            //Sets the context
            this.context = context;
        }

        // GET question
        [HttpGet]
        public IEnumerable<Models.Question> Get()
        {
            //Questions set
            return context.Questions;
        }

        // GET questions assigned to a quiz
        [HttpGet("{quizId}")]
        public IEnumerable<Models.Question> Get([FromRoute] int quizId)
        {
            //Question
            return context.Questions.Where(q => q.QuizId == quizId);
        }


        // POST question
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Models.Question question)
        {
            var quiz = context.Quiz.SingleOrDefault(q => q.ID == question.QuizId);

            if (quiz == null)
                return NotFound();

            //Adds a questions to the object
            context.Questions.Add(question);
            //Saves a questions
            await context.SaveChangesAsync();

            //Response
            return Ok(question);
        }

        // PUT question
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Models.Question question)
        {
            if (id != question.ID)
                return BadRequest();
            //Modifies a question
            context.Entry(question).State = EntityState.Modified;

            //Saves changes to the question
            await context.SaveChangesAsync();

            //Response 
            return Ok(question);
        }
    }
}