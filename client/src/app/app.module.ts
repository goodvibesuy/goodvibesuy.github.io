import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/front/dashboard/dashboard.component';
import { LocalesComponent } from './components/front/locales/locales.component';
import { ReportesComponent } from './components/front/reportes/reportes.component';
// Inputs
import { InputComponent } from './components/adm/input/input.component';
import { InputListComponent } from './components/adm/input/list/input.list.component';
import { InputEditComponent } from './components/adm/input/edit/input.edit.component';
import { InputAddComponent } from './components/adm/input/add/input.add.component';
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

import { RoutesComponent } from './components/adm/routes/routes.component';
import { ListComponent } from './components/adm/routes/list/list.component';
import { RouteAdd } from './components/adm/routes/route.add/route.add.component';
import { RouteEdit } from './components/adm/routes/route.edit/route.edit.component';

// app routing 
import { AppRoutingModule } from './app-routing.module';

// services
import { InputService } from './services/input.service';
import { ProductsService } from './services/products.service';
import { RouteService } from './services/route.service';

import { UsersService } from './services/users.service';
import { ImagesService} from './services/images.service';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

// shared
import { FilePicker } from './shared/components/file-picker/file-picker.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticateService } from './services/authenticate.service';
import { PointOfSaleService } from './services/point-of-sale.service';


import { ActivatedRoute, ParamMap } from '@angular/router';
import { GeneralComponent } from './components/general/general.component';
import { ViewingService } from './services/viewing.service';
import { PosComponent } from './components/adm/pos/pos.component';
import { HeaderService } from './services/header.service';
// models
//import { GVFile } from './shared/models/gvfile.model';




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
		InputComponent,
		InputListComponent,
		InputEditComponent,
		InputAddComponent,
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
		GeneralComponent,
		PosComponent,
        // models
    //    GVFile
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		AppRoutingModule,
		NgbModule.forRoot()
	],
	providers: [
		InputService,
		ProductsService,
		RouteService,
		UsersService,
        ImagesService,
        AuthenticateService,
        PointOfSaleService,
        ViewingService,
        HeaderService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
