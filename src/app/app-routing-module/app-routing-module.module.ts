import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from '../home/home.component';

// sets up routes constant where you define your routes
const routes: Routes = [{
   path: 'login', component: LoginComponent },
  {path:'home',component: HomeComponent}];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
