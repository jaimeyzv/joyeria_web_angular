import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module/app-routing-module.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistorialComprasComponent } from './historial-compras/components/historial-compras.component';
import { RegisterComponent } from './user/register/register.component';
import { UpdateComponent } from './user/update/update.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ComplaintsBookComponent } from './complaints/complaints-book/complaints-book.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductDetailComponent } from './product/components/detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './shared/filter.pipe';
import { PaymentComponent } from './payment/payment.component';
import { CreateComponent } from './product/components/create/create.component';
import { ProductListComponent } from './admin/product/components/product-list/product-list.component';
import { ProductEditComponent } from './admin/product/components/product-edit/product-edit.component';
import { ProductCreateComponent } from './admin/product/components/product-create/product-create.component';
import { SaleReportComponent } from './admin/sale/components/sale-report/sale-report.component';
import { CategoryListComponent } from './admin/category/components/category-list/category-list.component';
import { UsersListComponent } from './user/list/users-list/users-list.component';
import { ProductListCarComponent } from './product/components/list/product-list-car.component';
import { ComplaintsBooksComponent } from './complaints/complaints-books/complaints-books.component';
import { ComplaintsBookEditComponent } from './complaints/complaints-book-edit/complaints-book-edit.component';
import { UsersUpdateComponent } from './user/list/users-update/users-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HistorialComprasComponent,
    RegisterComponent,
    UpdateComponent,
    AboutusComponent,
    ComplaintsBookComponent,
    ContactusComponent,
    ProductDetailComponent,
    HeaderComponent,
    CartComponent,
    SearchComponent,
    FooterComponent,
    FilterPipe,
    PaymentComponent,
    CreateComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductCreateComponent,
    SaleReportComponent,
    CategoryListComponent,
    UsersListComponent,
    ProductListCarComponent,
    ComplaintsBooksComponent,
    ComplaintsBookEditComponent,
    UsersUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
