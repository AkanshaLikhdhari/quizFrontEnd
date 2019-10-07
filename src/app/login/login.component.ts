import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticationService } from '../service/user-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  invalidLogin=false;
  errorMessage="Invalid Credentials";
  constructor(private router:Router,private service:UserAuthenticationService) { }

  ngOnInit() {
  }
validateUser()
{
  console.log(this.service.executeUserAuthenticationService());
  this.service.executeUserAuthenticationService().subscribe(
    //response=> this.handleSuccessfullResponse(response));
    response=>this.handleSuccessfullResponse(response));
  }
  handleSuccessfullResponse(response)
  {
   
    console.log(response.password);
    if(this.username===response.username && this.password===response.password)
    {
      this.router.navigate(['welcome']);
    }
    else
    this.invalidLogin=true
  }
}

