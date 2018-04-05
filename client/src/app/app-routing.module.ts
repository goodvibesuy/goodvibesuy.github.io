
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/front/dashboard/dashboard.component';
import { LocalesComponent } from './components/front/locales/locales.component';
import { ReportesComponent } from './components/front/reportes/reportes.component';
import { SupplyComponent } from './components/adm/supply/supply.component';
import { RoutesComponent } from './components/adm/routes/routes.component';
import { ListComponent } from './components/adm/routes/list/list.component';
import { SupplyListComponent } from './components/adm/supply/list/supply.list.component';
import { SupplyEditComponent } from './components/adm/supply/edit/supply.edit.component';
import { RouteAdd } from './components/adm/routes/route.add/route.add.component';
import { RouteEdit } from './components/adm/routes/route.edit/route.edit.component';
import { SupplyAddComponent } from './components/adm/supply/add/supply.add.component';
import { MapaComponent } from './components/front/mapa/mapa.component';
import { DetalleLocalComponent } from './components/front/detalle-local/detalle-local.component';
import { ConfigsComponent } from './components/configs/configs.component';
import { ProductsComponent } from './components/adm/products/products.component';
import { ProductsListComponent } from './components/adm/products/list/products.list.component';
import { ProductEditComponent } from './components/adm/products/edit/product.edit.component';
import { ProductAddComponent } from './components/adm/products/add/product.add.component';
import { LoginComponent } from './components/login/login.component';
import { PosComponent } from './components/adm/pos/pos.component';
import { PosListComponent } from './components/adm/pos/list/pos.list.component';
import { PosEditComponent } from './components/adm/pos/edit/pos.edit.component';
import { PosAddComponent } from './components/adm/pos/add/pos.add.component';
import { TemplatesRoutesComponent } from './components/adm/templates-routes/templates-routes.component';

const routes: Routes = [
    {
        path:'admin/puntos-de-venta',
        component:PosComponent,
		children: [
			{ path: '', component: PosListComponent },
			{ path: 'agregar', component: PosAddComponent },
			{ path: 'editar/:id', component: PosEditComponent }
		]
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
		path: 'admin/productos',
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
		path: 'admin/insumos',
		component: SupplyComponent,
		children: [
			{ path: '', component: SupplyListComponent},
			{ path: 'editar/:id', component: SupplyEditComponent},
			{ path: 'agregar', component: SupplyAddComponent}
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
		path: 'plantilla-recorridos',
		component: TemplatesRoutesComponent
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
