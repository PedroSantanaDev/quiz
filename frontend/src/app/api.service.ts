/**
 *@author Pedro Santana
 *@class ApiService
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable()
export class ApiService{


    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();

    
    private selectedQuiz = new Subject<any>();

    quizSelected = this.selectedQuiz.asObservable();

    constructor( private http: HttpClient){

    }
    /**
     * Get quiz questions list
     */
    getQuestions(quizId){
       return this.http.get(`http://localhost:55654/api/questions/${quizId}`);
    }

    getQuizzes(){
        return this.http.get('http://localhost:55654/api/quizzes');
    }

    //Get all available quizzes
    getAllQuizzes(){
        return this.http.get('http://localhost:55654/api/quizzes/all');
    }

    /**
     * Post a questions
     * @param question a question
     */
    postQuestion(question){
        this.http.post('http://localhost:55654/api/questions', question).subscribe(res => {
            console.log(res);
        });
    }

    /**
     * Update a question
     * @param question a question
     */
    putQuestion(question){
        this.http.put(`http://localhost:55654/api/questions/${question.id}`, question).subscribe(res => {
            console.log(res);
        });
    }

    /**
     * Post a quiz
     * @param quiz a quiz
     */
    postQuiz(quiz){
        this.http.post('http://localhost:55654/api/quizzes', quiz).subscribe(res => {
            console.log(res);
        });
    }

    /**
     * Updates a quiz
     * @param quiz a quiz
     */
    putQuiz(quiz){
        this.http.put(`http://localhost:55654/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
            console.log(res);
        });
    }

    /**
     * Select a question
     * @param question Question selected
     */
    selectQuestion(question){
        this.selectedQuestion.next(question);
    }

    /**
     * Select a quiz
     * @param quiz Quiz selected
     */
    selectQuiz(quiz){
        this.selectedQuiz.next(quiz);
    }

    
}