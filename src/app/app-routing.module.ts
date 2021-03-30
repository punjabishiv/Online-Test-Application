import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { ReviewComponent } from './review/review.component';


const routes: Routes = [
	{path:'home', component: HomeComponent},
	{path:'about', component: AboutComponent},
	{path:'contact', component: ContactComponent},
	{path:'result', component: ResultComponent},
	{path:'quiz', component: QuizComponent},
	{path: 'review', component: ReviewComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
