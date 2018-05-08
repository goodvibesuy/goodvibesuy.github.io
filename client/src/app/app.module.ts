import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, OnChanges, SimpleChanges, DoCheck, Renderer, Renderer2 } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { AmChartsModule } from '@amcharts/amcharts3-angular';

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
import { TemplatesRoutesComponent } from './components/adm/templates-routes/templates-routes.component';
// Point of sale
import { PosComponent } from './components/adm/pos/pos.component';
import { PosAddComponent } from './components/adm/pos/add/pos.add.component';
import { PosEditComponent } from './components/adm/pos/edit/pos.edit.component';
import { PosListComponent } from './components/adm/pos/list/pos.list.component';

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
import { KpiService } from './services/kpi.service';
import { TemplatesRoutesService } from './services/templates-routes.service';
import { ProvidersService } from './services/providers.service';
import { UnitsConversorService } from './services/units-conversor.service';
import { CustomerService } from './services/customer.service';
import { ClientService } from './services/client.service';
import { GroupPosService } from './services/group-pos.service';

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

import {DragulaModule, DragulaService} from 'ng2-dragula/ng2-dragula';

import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { CenouraInputValidation } from './shared/validation/CenouraInputValidation';
import { NgbDateESParserFormatter } from './shared/DateParserFormatter';
import { ReporteViewingComponent } from './components/front/reporte-viewing/reporte-viewing.component';
import { ClientComponent } from './components/adm/client/client.component';
import { ClientFormComponent } from './components/forms/client-form/client-form.component';
import { ClientListComponent } from './components/adm/client/list/client.list.component';
import { ProviderComponent } from './components/adm/provider/provider.component';
import { ProviderFormComponent } from './components/adm/provider/form/provider-form.component';
import { ProviderListComponent } from './components/adm/provider/list/provider-list.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { KpiSalesPosComponent } from './components/front/reporte-viewing/kpi-sales-pos/kpi-sales-pos.component';
import { KpiSaleReturnsGroupPosComponent } from './components/front/reporte-viewing/kpi-sale-returns-group-pos/kpi-sale-returns-group-pos.component';
import { PurchaseOfSuppliesComponent } from './components/front/purchase-of-supplies/purchase-of-supplies.component';

@NgModule({
    declarations: [
        CenouraInputValidation,
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
        PosComponent,
        PosAddComponent,
        PosEditComponent,
        PosListComponent,
        TemplatesRoutesComponent,
        ReporteViewingComponent,
        ClientComponent,
        ClientListComponent,
        ClientFormComponent,
        ProviderComponent,
        ProviderFormComponent,
        ProviderListComponent,
        PieChartComponent,
        KpiSalesPosComponent,
        KpiSaleReturnsGroupPosComponent,
        PurchaseOfSuppliesComponent
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
        AmChartsModule,
        DragulaModule
    ],
    providers: [
        SupplyService,
        ProductsService,
        ProvidersService,
        RouteService,
        ClientService,
        TemplatesRoutesService,
        UsersService,
        ImagesService,


        DragulaService,



        
        AuthenticateService,
        PointOfSaleService,
        CustomerService,
        GroupPosService,
        ViewingService,
        HeaderService,
        TokenService,
        AlertService,
        KpiService,
        UnitsConversorService,
        { provide: LOCALE_ID, useValue: 'es-UY' },
        { provide: NgbDateParserFormatter, useClass: NgbDateESParserFormatter }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
