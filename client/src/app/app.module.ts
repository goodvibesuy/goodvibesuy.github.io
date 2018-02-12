import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LocalesComponent } from './components/locales/locales.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { InputComponent } from './components/input/input.component';
import { InputListComponent } from './components/input/list/input.list.component';
import { InputEditComponent } from './components/input/edit/input.edit.component';
import { InputAddComponent } from './components/input/add/input.add.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { DetalleLocalComponent } from './components/detalle-local/detalle-local.component';
import { ConfigsComponent } from './components/configs/configs.component';

// app routing 
import { AppRoutingModule } from './app-routing.module';

// services
import { InputService } from './services/input.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		DashboardComponent,
		ProductosComponent,
		LocalesComponent,
		ReportesComponent,
		InputComponent,
		InputListComponent,
		InputEditComponent,
		InputAddComponent,
		MapaComponent,
		DetalleLocalComponent,
		ConfigsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [
		InputService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
