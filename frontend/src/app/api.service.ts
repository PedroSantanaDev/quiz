/**
 * @author Pedro Santana
 * Api service
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService{

    constructor( private http: HttpClient){

    }
    /**
     * Post a questions
     * @param question 
     */
    postQuestion(question){
        this.http.post('http://localhost:55654/api/questions', question).subscribe(res => {
            console.log(res);
        });
    }
}