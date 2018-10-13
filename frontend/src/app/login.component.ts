/**
 * @author Pedro Santana
 * @class LoginComponent
 */
import { Component} from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent{

    form
    
    /**
     * class constructor
     * @param auth auth service
     * @param fb form builder
     */
    constructor(private auth: AuthService, private fb: FormBuilder){
        this.form = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

}