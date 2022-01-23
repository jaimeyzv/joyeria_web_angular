import { NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from '../home/home.component';
import { HistorialComprasComponent } from '../historial-compras/historial-compras.component';
import { RegisterComponent } from '../register/register.component';
import { UpdateComponent } from '../update/update.component';
import { AboutusComponent } from '../aboutus/aboutus.component';

// sets up routes constant where you define your routes
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'register', component: RegisterComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'historial-compras', component: HistorialComprasComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
