import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LocalesComponent } from './components/locales/locales.component';
import { ReportesComponent } from './components/reportes/reportes.component';
// Inputs
import { InputComponent } from './components/input/input.component';
import { InputListComponent } from './components/input/list/input.list.component';
import { InputEditComponent } from './components/input/edit/input.edit.component';
import { InputAddComponent } from './components/input/add/input.add.component';
// Products
import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products/list/products.list.component';
import { ProductEditComponent } from './components/products/edit/product.edit.component';
import { ProductAddComponent } from './components/products/add/product.add.component';
// Mapa
import { MapaComponent } from './components/mapa/mapa.component';
// Detalle local
import { DetalleLocalComponent } from './components/detalle-local/detalle-local.component';
// Configs
import { ConfigsComponent } from './components/configs/configs.component';

// app routing 
import { AppRoutingModule } from './app-routing.module';

// services
import { InputService } from './services/input.service';
import { ProductsService } from './services/products.service';
import { RouteService } from './services/route.service';
import { RoutesComponent } from './components/routes/routes.component';
import { ListComponent } from './components/routes/list/list.component';
import { RouteAdd } from './components/routes/route.add/route.add.component';
import { RouteEdit } from './components/routes/route.edit/route.edit.component';
import { UsersService } from './services/users.service';
import { ImagesService} from './services/images.service';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

// shared
import { FilePicker } from './shared/components/file-picker/file-picker.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticateService } from './services/authenticate.service';
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
        AuthenticateService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
