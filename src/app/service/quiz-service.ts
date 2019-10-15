import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})

export class QuizService {

  constructor(private httpClient:HttpClient){

  }

//for getting questiong using get rest call
public getQuizQuestion(){
      return this.httpClient.get(environment.baseURL+'questions');
  }
}
