/**
 * @author Pedro Santana
 * Api service
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


const api_url = `http://localhost:55654/api/questions/`;

@Injectable()
export class ApiService{


    private selectedQuestion = new Subject<any>();

    questionSelected = this.selectedQuestion.asObservable();

    constructor( private http: HttpClient){

    }
    /**
     * Get questions list
     */
    getQuestions(){
       return this.http.get('http://localhost:55654/api/questions');
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

    selectQuestion(question){
        this.selectedQuestion.next(question);
    }

    
}