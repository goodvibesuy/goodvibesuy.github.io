
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LocalesComponent } from './components/locales/locales.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { InputComponent } from './components/input/input.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { DetalleLocalComponent } from './components/detalle-local/detalle-local.component';
import { ConfigsComponent } from './components/configs/configs.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent
	},
	{
		path: 'productos',
		component: ProductosComponent
	},
	{
		path: 'locales',
		component: LocalesComponent
	},
	{
		path: 'reportes',
		component: ReportesComponent
	},
	{
		path: 'input',
		component: InputComponent
	},
	{
		path: 'mapa',
		component: MapaComponent
	},
	{
		path: 'detalle-local/:id',
		component: DetalleLocalComponent
	},
	{
		path: 'configs',
		component: ConfigsComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	],
	declarations: []
})

export class AppRoutingModule { }
