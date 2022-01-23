import { NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from '../home/home.component';
import { HistorialComprasComponent } from '../historial-compras/historial-compras.component';
import { RegisterComponent } from '../register/register.component';
import { UpdateComponent } from '../update/update.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ProductListComponent } from '../products/components/list/product-list.component';
import { ComplaintsBookComponent } from '../complaints-book/complaints-book.component';

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
  { path: 'historial-compras', component: HistorialComprasComponent },
  { path: 'product-list', component: ProductListComponent },
  {path:'librodereclamaciones',component:ComplaintsBookComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
