import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module/app-routing-module.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistorialComprasComponent } from './historial-compras/historial-compras.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { AboutusComponent } from './aboutus/aboutus.component';
<<<<<<< HEAD
import { ComplaintsBookComponent } from './complaints-book/complaints-book.component';
=======
import { ProductListComponent } from './products/components/list/product-list.component';
>>>>>>> dcb0e66857fd4ac32bab62f8dd9d6fd018217d4b

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HistorialComprasComponent,
    RegisterComponent,
    UpdateComponent,
    AboutusComponent,
<<<<<<< HEAD
    ComplaintsBookComponent,
=======
    ProductListComponent,
>>>>>>> dcb0e66857fd4ac32bab62f8dd9d6fd018217d4b
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
