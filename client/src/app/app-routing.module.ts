
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LocalesComponent } from './components/locales/locales.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { InputComponent } from './components/input/input.component';
import { RoutesComponent } from './components/routes/routes.component';
import { ListComponent } from './components/routes/list/list.component';
import { InputListComponent } from './components/input/list/input.list.component';
import { InputEditComponent } from './components/input/edit/input.edit.component';
import { RouteAdd } from './components/routes/route.add/route.add.component';
import { RouteEdit } from './components/routes/route.edit/route.edit.component';
import { InputAddComponent } from './components/input/add/input.add.component';
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
		path: 'inputs',
		component: InputComponent,
		children: [
			{ path: '', component: InputListComponent},
			{ path: 'edit/:id', component: InputEditComponent},
			{ path: 'add', component: InputAddComponent}
		]
	},
	{
		path: 'recorridos',
		component: RoutesComponent,
		children: [
			{ path: '', component: ListComponent},
			{ path: 'add', component: RouteAdd},		
			{ path: 'edit/:id', component: RouteEdit}				
		]
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
		RouterModule.forRoot(routes, { useHash: true })
	],
	exports: [
		RouterModule
	],
	declarations: []
})

export class AppRoutingModule { }
