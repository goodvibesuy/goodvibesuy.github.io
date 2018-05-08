
// #region begin imports 
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
import { ReporteViewingComponent } from './components/front/reporte-viewing/reporte-viewing.component';
import { ClientComponent } from './components/adm/client/client.component';
import { ClientListComponent } from './components/adm/client/list/client.list.component';
import { ClientFormComponent } from './components/forms/client-form/client-form.component';
import { ProviderComponent } from './components/adm/provider/provider.component';
import { ProviderListComponent } from './components/adm/provider/list/provider-list.component';
import { ProviderFormComponent } from './components/adm/provider/form/provider-form.component';
import { PurchaseOfSuppliesComponent } from './components/front/purchase-of-supplies/purchase-of-supplies.component';
// #endregion end imports

const routes: Routes = [
    {
		path: '',
		component: LoginComponent
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
        path:'admin/puntos-de-venta',
        component:PosComponent,
		children: [
			{ path: '', component: PosListComponent },
			{ path: 'agregar', component: PosAddComponent },
			{ path: 'editar/:id', component: PosEditComponent }
		]
    },
    {
        path:'admin/clientes',
        component: ClientComponent,
		children: [
			{ path: '', component: ClientListComponent },
			{ path: 'agregar', component: ClientFormComponent },
			{ path: 'editar/:id', component: ClientFormComponent }
		]
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
		path: 'dashboard',
		component: DashboardComponent
    },
    {
		path: 'compraInsumos',
		component: PurchaseOfSuppliesComponent
    },    
	{
		path: 'locales',
		component: LocalesComponent
    },
    {
		path: 'admin/proveedores',
		component: ProviderComponent,
		children: [
			{ path: '', component: ProviderListComponent },
			{ path: 'editar/:id', component: ProviderFormComponent },
			{ path: 'agregar', component: ProviderFormComponent }
		]
	},
	{
		path: 'reportes',
		component: ReportesComponent
    },
    {
		path: 'reporteVisitas',
		component: ReporteViewingComponent
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
		path: 'mapa/:idRoute',
		component: MapaComponent
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
		path: 'detalle-local/:id/:idRoute',
		component: DetalleLocalComponent
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
