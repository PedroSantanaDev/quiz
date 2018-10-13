/**
 * @author Pedro Santana
 * @class AuthInterceptor
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';


const api_url = `http://localhost:55654/api/questions/`;

@Injectable()
export class AuthInterceptor implements HttpInterceptor{


    constructor( ){}
    
   intercept(req, next){

        var token = localStorage.getItem('token');

        var authRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        
        return next.handle(authRequest);
   }
    
}