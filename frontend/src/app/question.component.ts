/**
 * @author Pedro Santana
 * @class  QuestionComponent
 */
import { Component} from '@angular/core'
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent{

    question  = {}
    quizId

    constructor(private api: ApiService, private route: ActivatedRoute){

    }

    ngOnInit(){
        this.quizId = this.route.snapshot.paramMap.get('quizId');
       
        this.api.questionSelected.subscribe(question => this.question = question);
    }
    /**
     * Post a question
     * @param question the question to post
     */
    post(question){
        question.quizId = this.quizId;
        this.api.postQuestion(question);
    }
}