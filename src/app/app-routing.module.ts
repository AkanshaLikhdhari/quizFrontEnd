import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionViewComponent } from './question-view/question-view.component';


const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'welcome' ,component:QuestionViewComponent},
  {path:'questionView' ,component:QuestionViewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
