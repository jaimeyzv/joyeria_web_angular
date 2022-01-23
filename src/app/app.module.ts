import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module/app-routing-module.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SemanaTresComponent } from './semana-tres/semana-tres.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistorialComprasComponent } from './historial-compras/historial-compras.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SemanaTresComponent,
    HistorialComprasComponent,
    RegisterComponent,
    UpdateComponent,
    AboutusComponent,
    ProductosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
