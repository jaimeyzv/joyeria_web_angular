import { NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from '../home/home.component';
import { HistorialComprasComponent } from '../historial-compras/components/historial-compras.component';
import { RegisterComponent } from '../register/register.component';
import { UpdateComponent } from '../update/update.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ProductListComponent } from '../products/components/list/product-list.component';
import { ComplaintsBookComponent } from '../complaints-book/complaints-book.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { ListarProductosComponent } from '../admin/listar-productos/listar-productos.component';
import { RegistrarProductosComponent } from '../admin/registrar-productos/registrar-productos.component';
import { EditarProductosComponent } from '../admin/editar-productos/editar-productos.component';
import { ReportesVentasComponent } from '../admin/reportes-ventas/reportes-ventas.component';
import { ProductDetailComponent } from '../products/components/detail/product-detail.component';
import { CartComponent } from '../cart/cart.component';
import { PaymentComponent } from '../payment/payment.component';
// sets up routes constant where you define your routes
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'pay', component: PaymentComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'historial-compras', component: HistorialComprasComponent },
  { path: 'historial-compras', component: HistorialComprasComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'librodereclamaciones', component: ComplaintsBookComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contactus', component: ContactusComponent },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'registrar-productos', component: RegistrarProductosComponent },
  { path: 'editar-productos', component: EditarProductosComponent },
  { path: 'reportes-ventas', component: ReportesVentasComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
