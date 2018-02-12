
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LocalesComponent } from './components/locales/locales.component';
import { ReportesComponent } from './components/reportes/reportes.component';

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
