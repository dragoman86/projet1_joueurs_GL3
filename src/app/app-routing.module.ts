import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AccueilComponent } from './accueil/accueil.component';
import { JoueursComponent } from './joueurs/joueurs.component';

const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path: 'accueil',component:AccueilComponent},
  {path:'signup',component: SignupComponent },
  {path:'user',component: UsersComponent },
  {path:'joueurs',component: JoueursComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
