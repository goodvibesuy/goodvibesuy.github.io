import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AmChartsModule } from "@amcharts/amcharts3-angular";


// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/front/dashboard/dashboard.component';
import { LocalesComponent } from './components/front/locales/locales.component';
import { ReportesComponent } from './components/front/reportes/reportes.component';
// supplys
import { SupplyComponent } from './components/adm/supply/supply.component';
import { SupplyListComponent } from './components/adm/supply/list/supply.list.component';
import { SupplyEditComponent } from './components/adm/supply/edit/supply.edit.component';
import { SupplyAddComponent } from './components/adm/supply/add/supply.add.component';
// Products
import { ProductsComponent } from './components/adm/products/products.component';
import { ProductsListComponent } from './components/adm/products/list/products.list.component';
import { ProductEditComponent } from './components/adm/products/edit/product.edit.component';
import { ProductAddComponent } from './components/adm/products/add/product.add.component';
// Mapa
import { MapaComponent } from './components/front/mapa/mapa.component';
// Detalle local
import { DetalleLocalComponent } from './components/front/detalle-local/detalle-local.component';
// Configs
import { ConfigsComponent } from './components/configs/configs.component';
// Routes
import { RoutesComponent } from './components/adm/routes/routes.component';
import { ListComponent } from './components/adm/routes/list/list.component';
import { RouteAdd } from './components/adm/routes/route.add/route.add.component';
import { RouteEdit } from './components/adm/routes/route.edit/route.edit.component';
// Point of sale
import { PosComponent } from './components/adm/pos/pos.component';

// services
import { SupplyService } from './services/supply.service';
import { ProductsService } from './services/products.service';
import { RouteService } from './services/route.service';
import { TokenService } from './services/token.service';
import { UsersService } from './services/users.service';
import { ImagesService } from './services/images.service';
import { ViewingService } from './services/viewing.service';
import { HeaderService } from './services/header.service';
import { PointOfSaleService } from './services/point-of-sale.service';

// shared
import { FilePicker } from './shared/components/file-picker/file-picker.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticateService } from './services/authenticate.service';

// app routing
import { AppRoutingModule } from './app-routing.module';

///// Feature modules
// alert
import { AlertModule } from './modules/alert/alert.module';
import { AlertService } from './modules/alert/alert.service';
// Interceptor
import { InterceptorModule } from './auth/token.interceptor';
import { KpiService } from './services/kpi.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		DashboardComponent,
		ProductsComponent,
		ProductsListComponent,
		ProductEditComponent,
		ProductAddComponent,
		LocalesComponent,
		ReportesComponent,
		SupplyComponent,
		SupplyListComponent,
		SupplyEditComponent,
		SupplyAddComponent,
		MapaComponent,
		DetalleLocalComponent,
		ConfigsComponent,
		RoutesComponent,
		ListComponent,
		RouteAdd,
		RouteEdit,
		// shared
		FilePicker,
		LoginComponent,
        PosComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		AppRoutingModule,
		InterceptorModule,
		NgbModule.forRoot(),
        AlertModule.forRoot(),
        AmChartsModule
	],
	providers: [
		SupplyService,
		ProductsService,
		RouteService,
		UsersService,
		ImagesService,
		AuthenticateService,
		PointOfSaleService,
		ViewingService,
		HeaderService,
        TokenService,
        AlertService,
        KpiService
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
