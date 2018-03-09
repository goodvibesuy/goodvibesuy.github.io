
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/front/dashboard/dashboard.component';
import { LocalesComponent } from './components/front/locales/locales.component';
import { ReportesComponent } from './components/front/reportes/reportes.component';
import { InputComponent } from './components/adm/input/input.component';
import { RoutesComponent } from './components/adm/routes/routes.component';
import { ListComponent } from './components/adm/routes/list/list.component';
import { InputListComponent } from './components/adm/input/list/input.list.component';
import { InputEditComponent } from './components/adm/input/edit/input.edit.component';
import { RouteAdd } from './components/adm/routes/route.add/route.add.component';
import { RouteEdit } from './components/adm/routes/route.edit/route.edit.component';
import { InputAddComponent } from './components/adm/input/add/input.add.component';
import { MapaComponent } from './components/front/mapa/mapa.component';
import { DetalleLocalComponent } from './components/front/detalle-local/detalle-local.component';
import { ConfigsComponent } from './components/configs/configs.component';
import { ProductsComponent } from './components/adm/products/products.component';
import { ProductsListComponent } from './components/adm/products/list/products.list.component';
import { ProductEditComponent } from './components/adm/products/edit/product.edit.component';
import { ProductAddComponent } from './components/adm/products/add/product.add.component';
import { LoginComponent } from './components/login/login.component';
import { PosComponent } from './components/adm/pos/pos.component';

const routes: Routes = [
    {
        path:'admPuntosDeVenta',
        component:PosComponent
    },
	{
		path: '',
		component: LoginComponent
	},
	{
		path: 'dashboard',
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
