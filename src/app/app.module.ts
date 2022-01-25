import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module/app-routing-module.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistorialComprasComponent } from './historial-compras/components/historial-compras.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ComplaintsBookComponent } from './complaints-book/complaints-book.component';
import { ProductListComponent } from './products/components/list/product-list.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReportesVentasComponent } from './admin/reportes-ventas/reportes-ventas.component';
import { ListarProductosComponent } from './admin/listar-productos/listar-productos.component';
import { EditarProductosComponent } from './admin/editar-productos/editar-productos.component';
import { RegistrarProductosComponent } from './admin/registrar-productos/registrar-productos.component';
import { ProductDetailComponent } from './products/components/detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './shared/filter.pipe';

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
    ProductListComponent,
    RegistrarProductosComponent,
    EditarProductosComponent,
    ListarProductosComponent,
    ReportesVentasComponent,
    ContactusComponent,
    ProductDetailComponent,
    HeaderComponent,
    CartComponent,
    SearchComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
