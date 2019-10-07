import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class UserData
{
  constructor(public id:number,public username:string,public password:string)
  {

  }
}
@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor(private http:HttpClient) { }
  executeUserAuthenticationService()
  {
    return this.http.get<UserData>(environment.baseURL+"UserLoginData");
  }
}
