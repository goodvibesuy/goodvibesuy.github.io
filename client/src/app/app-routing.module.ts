
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
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
import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products/list/products.list.component';
import { ProductEditComponent } from './components/products/edit/product.edit.component';
import { ProductAddComponent } from './components/products/add/product.add.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent
	},
	{
		path: 'productos',
		component: ProductsComponent,
		children: [
			{ path: '', component: ProductsListComponent },
			{ path: 'editar/:id', component: ProductEditComponent },
			{ path: 'agregar', component: ProductAddComponent }
		]
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
		path: 'insumos',
		component: InputComponent,
		children: [
			{ path: '', component: InputListComponent},
			{ path: 'editar/:id', component: InputEditComponent},
			{ path: 'agregar', component: InputAddComponent}
		]
	},
	{
		path: 'recorridos',
		component: RoutesComponent,
		children: [
			{ path: '', component: ListComponent},
			{ path: 'agregar', component: RouteAdd},		
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
