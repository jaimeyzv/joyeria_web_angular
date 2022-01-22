import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from '../home/home.component';
import { SemanaTresComponent } from '../semana-tres/semana-tres.component';

// sets up routes constant where you define your routes
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'home', component: HomeComponent },
  { path: 'semanatres', component: SemanaTresComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
