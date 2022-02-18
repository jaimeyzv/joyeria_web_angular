import { NgModule } from '@angular/core';
import { LoginComponent } from '../user/login/login.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from '../home/home.component';
import { HistorialComprasComponent } from '../historial-compras/components/historial-compras.component';
import { RegisterComponent } from '../user/register/register.component';
import { UpdateComponent } from '../user/update/update.component';
import { AboutusComponent } from '../aboutus/aboutus.component';

import { ContactusComponent } from '../contactus/contactus.component';
import { ProductDetailComponent } from '../product/components/detail/product-detail.component';
import { CartComponent } from '../cart/cart.component';
import { PaymentComponent } from '../payment/payment.component';
import { ProductListComponent } from '../admin/product/components/product-list/product-list.component';
import { ProductEditComponent } from '../admin/product/components/product-edit/product-edit.component';
import { ProductCreateComponent } from '../admin/product/components/product-create/product-create.component';
import { LogoutComponent } from '../user/login/logout.component';
import { SaleReportComponent } from '../admin/sale/components/sale-report/sale-report.component';
import { CategoryListComponent } from '../admin/category/components/category-list/category-list.component';
import { UsersListComponent }    from '../user/list/users-list/users-list.component';
import { ProductListCarComponent } from '../product/components/list/product-list-car.component';
import { ComplaintsBookComponent } from '../complaints/complaints-book/complaints-book.component';
import { ComplaintsBooksComponent } from '../complaints/complaints-books/complaints-books.component';
import { ComplaintsBookEditComponent } from '../complaints/complaints-book-edit/complaints-book-edit.component';

// sets up routes constant where you define your routes
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'pay', component: PaymentComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'historial-compras', component: HistorialComprasComponent },
  { path: 'historial-compras', component: HistorialComprasComponent },
  { path: 'librodereclamaciones', component: ComplaintsBookComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'admin/product-list', component: ProductListComponent },
  { path: 'admin/product-edit/:id', component: ProductEditComponent },
  { path: 'admin/product-create', component: ProductCreateComponent },
  { path: 'admin/sale-report', component: SaleReportComponent },
  { path: 'admin/category-list', component:CategoryListComponent },
  { path: 'admin/users-list', component:UsersListComponent },
  { path: 'product-list-car', component: ProductListCarComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  {path:'admin/complaints',component:ComplaintsBooksComponent},
  {path:'admin/complaints/:id',component:ComplaintsBookEditComponent}
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
