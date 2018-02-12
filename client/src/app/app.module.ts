import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LocalesComponent } from './components/locales/locales.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { InputComponent } from './components/input/input.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { DetalleLocalComponent } from './components/detalle-local/detalle-local.component';
import { ConfigsComponent } from './components/configs/configs.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		DashboardComponent,
		ProductosComponent,
		LocalesComponent,
		ReportesComponent,
		InputComponent,
		MapaComponent,
		DetalleLocalComponent,
		ConfigsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
