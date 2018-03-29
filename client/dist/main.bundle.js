webpackJsonp(["main"],{

/***/ "../../../../../../datatypes/result.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultCode; });
var ResultCode;
(function (ResultCode) {
    ResultCode[ResultCode["OK"] = 1] = "OK";
    ResultCode[ResultCode["Error"] = -1] = "Error";
})(ResultCode || (ResultCode = {}));


/***/ }),

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_front_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/front/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_front_locales_locales_component__ = __webpack_require__("../../../../../src/app/components/front/locales/locales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_front_reportes_reportes_component__ = __webpack_require__("../../../../../src/app/components/front/reportes/reportes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_adm_supply_supply_component__ = __webpack_require__("../../../../../src/app/components/adm/supply/supply.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_adm_routes_routes_component__ = __webpack_require__("../../../../../src/app/components/adm/routes/routes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_adm_routes_list_list_component__ = __webpack_require__("../../../../../src/app/components/adm/routes/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_adm_supply_list_supply_list_component__ = __webpack_require__("../../../../../src/app/components/adm/supply/list/supply.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_adm_supply_edit_supply_edit_component__ = __webpack_require__("../../../../../src/app/components/adm/supply/edit/supply.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_adm_routes_route_add_route_add_component__ = __webpack_require__("../../../../../src/app/components/adm/routes/route.add/route.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_adm_routes_route_edit_route_edit_component__ = __webpack_require__("../../../../../src/app/components/adm/routes/route.edit/route.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_adm_supply_add_supply_add_component__ = __webpack_require__("../../../../../src/app/components/adm/supply/add/supply.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_front_mapa_mapa_component__ = __webpack_require__("../../../../../src/app/components/front/mapa/mapa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_front_detalle_local_detalle_local_component__ = __webpack_require__("../../../../../src/app/components/front/detalle-local/detalle-local.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_configs_configs_component__ = __webpack_require__("../../../../../src/app/components/configs/configs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_adm_products_products_component__ = __webpack_require__("../../../../../src/app/components/adm/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_adm_products_list_products_list_component__ = __webpack_require__("../../../../../src/app/components/adm/products/list/products.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_adm_products_edit_product_edit_component__ = __webpack_require__("../../../../../src/app/components/adm/products/edit/product.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_adm_products_add_product_add_component__ = __webpack_require__("../../../../../src/app/components/adm/products/add/product.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_adm_pos_pos_component__ = __webpack_require__("../../../../../src/app/components/adm/pos/pos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_adm_templates_routes_templates_routes_component__ = __webpack_require__("../../../../../src/app/components/adm/templates-routes/templates-routes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [
    {
        path: 'admin/puntos-de-venta',
        component: __WEBPACK_IMPORTED_MODULE_21__components_adm_pos_pos_component__["a" /* PosComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_20__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__components_front_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'admin/productos',
        component: __WEBPACK_IMPORTED_MODULE_16__components_adm_products_products_component__["a" /* ProductsComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_17__components_adm_products_list_products_list_component__["a" /* ProductsListComponent */] },
            { path: 'editar/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_adm_products_edit_product_edit_component__["a" /* ProductEditComponent */] },
            { path: 'agregar', component: __WEBPACK_IMPORTED_MODULE_19__components_adm_products_add_product_add_component__["a" /* ProductAddComponent */] }
        ]
    },
    {
        path: 'locales',
        component: __WEBPACK_IMPORTED_MODULE_3__components_front_locales_locales_component__["a" /* LocalesComponent */]
    },
    {
        path: 'reportes',
        component: __WEBPACK_IMPORTED_MODULE_4__components_front_reportes_reportes_component__["a" /* ReportesComponent */]
    },
    {
        path: 'admin/insumos',
        component: __WEBPACK_IMPORTED_MODULE_5__components_adm_supply_supply_component__["a" /* SupplyComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_adm_supply_list_supply_list_component__["a" /* SupplyListComponent */] },
            { path: 'editar/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_adm_supply_edit_supply_edit_component__["a" /* SupplyEditComponent */] },
            { path: 'agregar', component: __WEBPACK_IMPORTED_MODULE_12__components_adm_supply_add_supply_add_component__["a" /* SupplyAddComponent */] }
        ]
    },
    {
        path: 'recorridos',
        component: __WEBPACK_IMPORTED_MODULE_6__components_adm_routes_routes_component__["a" /* RoutesComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_adm_routes_list_list_component__["a" /* ListComponent */] },
            { path: 'agregar', component: __WEBPACK_IMPORTED_MODULE_10__components_adm_routes_route_add_route_add_component__["a" /* RouteAdd */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_11__components_adm_routes_route_edit_route_edit_component__["a" /* RouteEdit */] }
        ]
    },
    {
        path: 'mapa',
        component: __WEBPACK_IMPORTED_MODULE_13__components_front_mapa_mapa_component__["a" /* MapaComponent */]
    },
    {
        path: 'plantilla-recorridos',
        component: __WEBPACK_IMPORTED_MODULE_22__components_adm_templates_routes_templates_routes_component__["a" /* TemplatesRoutesComponent */]
    },
    {
        path: 'detalle-local/:id',
        component: __WEBPACK_IMPORTED_MODULE_14__components_front_detalle_local_detalle_local_component__["a" /* DetalleLocalComponent */]
    },
    {
        path: 'configs',
        component: __WEBPACK_IMPORTED_MODULE_15__components_configs_configs_component__["a" /* ConfigsComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n<div class=\"container\">\n  <div class=\"col-xs-4 col-xs-offset-4\">\n\n    <alert></alert>\n\n    <app-header></app-header>\n\n    <router-outlet></router-outlet>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_front_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/front/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_front_locales_locales_component__ = __webpack_require__("../../../../../src/app/components/front/locales/locales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_front_reportes_reportes_component__ = __webpack_require__("../../../../../src/app/components/front/reportes/reportes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_adm_supply_supply_component__ = __webpack_require__("../../../../../src/app/components/adm/supply/supply.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_adm_supply_list_supply_list_component__ = __webpack_require__("../../../../../src/app/components/adm/supply/list/supply.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_adm_supply_edit_supply_edit_component__ = __webpack_require__("../../../../../src/app/components/adm/supply/edit/supply.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_adm_supply_add_supply_add_component__ = __webpack_require__("../../../../../src/app/components/adm/supply/add/supply.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_adm_products_products_component__ = __webpack_require__("../../../../../src/app/components/adm/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_adm_products_list_products_list_component__ = __webpack_require__("../../../../../src/app/components/adm/products/list/products.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_adm_products_edit_product_edit_component__ = __webpack_require__("../../../../../src/app/components/adm/products/edit/product.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_adm_products_add_product_add_component__ = __webpack_require__("../../../../../src/app/components/adm/products/add/product.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_front_mapa_mapa_component__ = __webpack_require__("../../../../../src/app/components/front/mapa/mapa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_front_detalle_local_detalle_local_component__ = __webpack_require__("../../../../../src/app/components/front/detalle-local/detalle-local.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_configs_configs_component__ = __webpack_require__("../../../../../src/app/components/configs/configs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_adm_routes_routes_component__ = __webpack_require__("../../../../../src/app/components/adm/routes/routes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_adm_routes_list_list_component__ = __webpack_require__("../../../../../src/app/components/adm/routes/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_adm_routes_route_add_route_add_component__ = __webpack_require__("../../../../../src/app/components/adm/routes/route.add/route.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_adm_routes_route_edit_route_edit_component__ = __webpack_require__("../../../../../src/app/components/adm/routes/route.edit/route.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_adm_pos_pos_component__ = __webpack_require__("../../../../../src/app/components/adm/pos/pos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_supply_service__ = __webpack_require__("../../../../../src/app/services/supply.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_token_service__ = __webpack_require__("../../../../../src/app/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_images_service__ = __webpack_require__("../../../../../src/app/services/images.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_viewing_service__ = __webpack_require__("../../../../../src/app/services/viewing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_header_service__ = __webpack_require__("../../../../../src/app/services/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_point_of_sale_service__ = __webpack_require__("../../../../../src/app/services/point-of-sale.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__shared_components_file_picker_file_picker_component__ = __webpack_require__("../../../../../src/app/shared/components/file-picker/file-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__modules_alert_alert_module__ = __webpack_require__("../../../../../src/app/modules/alert/alert.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__modules_alert_alert_service__ = __webpack_require__("../../../../../src/app/modules/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__auth_token_interceptor__ = __webpack_require__("../../../../../src/app/auth/token.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_kpi_service__ = __webpack_require__("../../../../../src/app/services/kpi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_adm_templates_routes_templates_routes_component__ = __webpack_require__("../../../../../src/app/components/adm/templates-routes/templates-routes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_templates_routes_service__ = __webpack_require__("../../../../../src/app/services/templates-routes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// components





// supplys




// Products




// Mapa

// Detalle local

// Configs

// Routes




// Point of sale

// services









// shared



// app routing

///// Feature modules
// alert


// Interceptor




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_front_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_adm_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_adm_products_list_products_list_component__["a" /* ProductsListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_adm_products_edit_product_edit_component__["a" /* ProductEditComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_adm_products_add_product_add_component__["a" /* ProductAddComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_front_locales_locales_component__["a" /* LocalesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_front_reportes_reportes_component__["a" /* ReportesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_adm_supply_supply_component__["a" /* SupplyComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_adm_supply_list_supply_list_component__["a" /* SupplyListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_adm_supply_edit_supply_edit_component__["a" /* SupplyEditComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_adm_supply_add_supply_add_component__["a" /* SupplyAddComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_front_mapa_mapa_component__["a" /* MapaComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_front_detalle_local_detalle_local_component__["a" /* DetalleLocalComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_configs_configs_component__["a" /* ConfigsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_adm_routes_routes_component__["a" /* RoutesComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_adm_routes_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_adm_routes_route_add_route_add_component__["a" /* RouteAdd */],
                __WEBPACK_IMPORTED_MODULE_25__components_adm_routes_route_edit_route_edit_component__["a" /* RouteEdit */],
                // shared
                __WEBPACK_IMPORTED_MODULE_36__shared_components_file_picker_file_picker_component__["a" /* FilePicker */],
                __WEBPACK_IMPORTED_MODULE_37__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_adm_pos_pos_component__["a" /* PosComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_adm_templates_routes_templates_routes_component__["a" /* TemplatesRoutesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_39__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_42__auth_token_interceptor__["a" /* InterceptorModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_40__modules_alert_alert_module__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__amcharts_amcharts3_angular__["a" /* AmChartsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__services_supply_service__["a" /* SupplyService */],
                __WEBPACK_IMPORTED_MODULE_28__services_products_service__["a" /* ProductsService */],
                __WEBPACK_IMPORTED_MODULE_29__services_route_service__["a" /* RouteService */],
                __WEBPACK_IMPORTED_MODULE_45__services_templates_routes_service__["a" /* TemplatesRoutesService */],
                __WEBPACK_IMPORTED_MODULE_31__services_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_32__services_images_service__["a" /* ImagesService */],
                __WEBPACK_IMPORTED_MODULE_38__services_authenticate_service__["a" /* AuthenticateService */],
                __WEBPACK_IMPORTED_MODULE_35__services_point_of_sale_service__["a" /* PointOfSaleService */],
                __WEBPACK_IMPORTED_MODULE_33__services_viewing_service__["a" /* ViewingService */],
                __WEBPACK_IMPORTED_MODULE_34__services_header_service__["a" /* HeaderService */],
                __WEBPACK_IMPORTED_MODULE_30__services_token_service__["a" /* TokenService */],
                __WEBPACK_IMPORTED_MODULE_41__modules_alert_alert_service__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_43__services_kpi_service__["a" /* KpiService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* LOCALE_ID */], useValue: 'es-UY' }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TokenInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_token_service__ = __webpack_require__("../../../../../src/app/services/token.service.ts");
// Copiado de https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(tokenService) {
        this.tokenService = tokenService;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var token = this.tokenService.generateHeaderToken();
        request = !!token ? request.clone({ headers: token }) : request;
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_token_service__["a" /* TokenService */]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());

var InterceptorModule = /** @class */ (function () {
    function InterceptorModule() {
    }
    InterceptorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: TokenInterceptor,
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_2__services_token_service__["a" /* TokenService */]
            ]
        })
    ], InterceptorModule);
    return InterceptorModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/adm/pos/pos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gmap{\r\n    margin-top: 35px;\r\n    width:100%;height:500px\r\n}\r\n\r\n.tarjeta{\r\n    width: 100%!important;\r\n    height: 625px;\r\n    float: left;\r\n}\r\n\r\n#formAdd{\r\n    margin:10px;;\r\n}\r\n\r\n.footer{\r\n    text-align:center;\r\n}\r\n\r\n.btn-circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 1.42857;\r\n}\r\n\r\n.add{\r\n    background-color: green;\r\n    color: white;\r\n    float: right;\r\n    margin: 10px;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/pos/pos.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"formAdd\" class=\"card\" [hidden]=\"typeOfView !== 3\">\r\n    <div class=\"card-header\">Agregar Punto de venta</div>\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"card tarjeta\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Ubicación del Punto de venta</h5>\r\n                        <div #gmap class=\"gmap\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"card tarjeta\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Información del Punto de venta </h5>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"input-group-addon\">Nombre:</span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"POSName\" [(ngModel)]=\"POSName\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"input-group-addon\">Nombre de contacto:</span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"POSContactName\" [(ngModel)]=\"POSContactName\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"input-group-addon\">RUT:</span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"POSRUT\" [(ngModel)]=\"POSRUT\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"input-group-addon\">Razón social</span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"POSBusinessName\" [(ngModel)]=\"POSBusinessName\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"input-group-addon\">Dirección:</span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"POSAddress\" [(ngModel)]=\"POSAddress\">\r\n                            <button type=\"button\" class=\"btn btn-light\" (click)=\"marcar()\">marcar</button>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"input-group-addon\">Telefono:</span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"POSTel\" [(ngModel)]=\"POSTel\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"input-group-addon\">Imagen:</span>\r\n                            <img [src]=\"getImage()\" *ngIf=\"imageFile\" class=\"small_image\" />\r\n                            <file-picker text=\"Cambiar\" (selected)=\"handleSelected($event)\"></file-picker>\r\n                            <div *ngIf=\"filestring\">\r\n                                {{filestring}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-footer footer\">\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelAdd()\">Cancelar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\">Agregar</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"card\" style=\"margin:15px;\" [hidden]=\"typeOfView !== 2\">\r\n    <div class=\"card-header\">\r\n        <b>Editar Punto de venta</b>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"card tarjeta\" style=\"width: 18rem;\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Ubicación del Punto de venta</h5>\r\n                        <div #gmapEdit class=\"gmap\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"card tarjeta\" style=\"width: 18rem;\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Información del Punto de venta </h5>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"input-group-addon\">Nombre:</span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"POSEditName\" [(ngModel)]=\"POSEditName\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"input-group-addon\">Nombre de contacto:</span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"POSEditContactName\" [(ngModel)]=\"POSEditContactName\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"input-group-addon\">RUT:</span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"POSEditRUT\" [(ngModel)]=\"POSEditRUT\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"input-group-addon\">Razón social</span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"POSEditBusinessName\" [(ngModel)]=\"POSEditBusinessName\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"input-group-addon\">Dirección:</span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"POSEditAddress\" [(ngModel)]=\"POSEditAddress\">\r\n                            <button type=\"button\" class=\"btn btn-light\" (click)=\"locationEdit()\">marcar</button>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"input-group-addon\">Telefono:</span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"POSEditTel\" [(ngModel)]=\"POSEditTel\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"input-group-addon\">Imagen:</span>\r\n                            <img [src]=\"getImage()\" *ngIf=\"POSEdit\" class=\"small_image\" />\r\n                            <file-picker text=\"Cambiar\" (selected)=\"handleSelected($event)\"></file-picker>\r\n                            <div *ngIf=\"filestring\">\r\n                                {{filestring}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-footer footer\">\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelEdit()\">Cancelar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"actualizar()\">Actualizar</button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"typeOfView == 1\">\r\n    <button class=\"btn btn-circle add fa fa-plus\" (click)=\"addForm()\"></button>\r\n    <table class=\"table table-striped\">\r\n        <thead class=\"thead-dark\">\r\n            <tr>\r\n                <th>Imagen</th>\r\n                <th>Nombre</th>\r\n                <th>Direción</th>\r\n                <th>Tel</th>\r\n                <th>Editar</th>\r\n                <th>Eliminar</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let pos of pointsOfSale\">\r\n                <td>\r\n\r\n                    <img *ngIf=\"pos.image !== '' && pos.image !== null\" style=\"width:50px;\" src=\"images/locales/{{pos.image}}\" />\r\n                    <i *ngIf=\"pos.image === '' || pos.image === null\" class=\"fa fa-home\" style=\"font-size: 2.0em;\"></i>\r\n\r\n\r\n                </td>\r\n                <td>{{pos.name}}</td>\r\n                <td>{{pos.address}}</td>\r\n                <td>\r\n                    <a href=\"tel:{{pos.tel}}\">{{pos.tel}}</a>\r\n                </td>\r\n                <td>\r\n                    <a (click)=\"formEdit(pos.id)\">\r\n                        <i class=\"fa fa-edit\" style=\"font-size: 1.7em;\"></i>\r\n                    </a>\r\n                </td>\r\n                <td>\r\n                    <a (click)=\"delete(pos.id)\">\r\n                        <i class=\"fa fa-trash-o\" style=\"font-size: 1.7em;\"></i>\r\n                    </a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/adm/pos/pos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_point_of_sale_service__ = __webpack_require__("../../../../../src/app/services/point-of-sale.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_images_service__ = __webpack_require__("../../../../../src/app/services/images.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PosComponent = /** @class */ (function () {
    function PosComponent(router, pointOFSaleService, domSanitizer, imagesService) {
        this.router = router;
        this.pointOFSaleService = pointOFSaleService;
        this.domSanitizer = domSanitizer;
        this.imagesService = imagesService;
        this.POSGroup = 1;
        this.geocoder = new google.maps.Geocoder();
    }
    PosComponent.prototype.ngOnInit = function () {
        if (this.POSMarker !== undefined) {
            this.POSMarker.setMap(null);
        }
        this.loadPointsOfSale();
        this.typeOfView = 1;
        var mapProp = {
            center: new google.maps.LatLng(-34.909664, -56.163319),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    };
    PosComponent.prototype.marcar = function () {
        this.geocodeAddress(this.geocoder, this.map);
    };
    PosComponent.prototype.setEditMarker = function (editMarker) {
        this.POSEditMarker = editMarker;
        console.log(this.POSEditMarker);
    };
    PosComponent.prototype.locationEdit = function () {
        var mapEdit = this.mapEdit;
        var address = this.POSEditAddress;
        var thisPrincipal = this;
        this.geocoder.geocode({ address: address }, function (results, status) {
            if (status.toString() === 'OK') {
                mapEdit.setCenter(results[0].geometry.location);
                if (thisPrincipal.POSEditMarker === null || thisPrincipal.POSEditMarker === undefined) {
                    thisPrincipal.POSEditMarker = new google.maps.Marker({
                        map: mapEdit,
                        draggable: true,
                        position: results[0].geometry.location
                    });
                }
                else {
                    thisPrincipal.POSEditMarker.setPosition(results[0].geometry.location);
                }
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    PosComponent.prototype.geocodeAddress = function (geocoder, resultsMap) {
        var address = this.POSAddress;
        var thisPrincipal = this;
        geocoder.geocode({ address: address }, function (results, status) {
            if (status === 'OK') {
                if (thisPrincipal.POSMarker !== undefined) {
                    thisPrincipal.POSMarker.setMap(null);
                }
                resultsMap.setCenter(results[0].geometry.location);
                thisPrincipal.POSMarker = new google.maps.Marker({
                    map: resultsMap,
                    draggable: true,
                    position: results[0].geometry.location
                });
            }
            else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    PosComponent.prototype.formEdit = function (idPointOfSale) {
        this.typeOfView = 2;
        this.POSEdit = this.pointsOfSale.filter(function (pos) {
            return idPointOfSale == pos.id;
        })[0];
        this.imagePath = this.POSEdit.image;
        this.POSEditName = this.POSEdit.name;
        this.POSEditAddress = this.POSEdit.address;
        this.POSEditTel = this.POSEdit.tel;
        this.POSEditCoord = this.POSEdit.coord;
        this.POSEditBusinessName = this.POSEdit.businessName;
        this.POSEditContactName = this.POSEdit.contactName;
        this.POSEditRUT = this.POSEdit.RUT;
        if (this.POSEditCoord !== null && this.POSEditCoord !== undefined) {
            var mapProp = {
                center: new google.maps.LatLng(this.POSEditCoord.lat(), this.POSEditCoord.lng()),
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        }
        else {
            var mapProp = {
                center: new google.maps.LatLng(-34.909664, -56.163319),
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        }
        this.mapEdit = new google.maps.Map(this.gmapEditElement.nativeElement, mapProp);
        if (this.POSEditCoord !== null && this.POSEditCoord !== undefined) {
            this.POSEditMarker = new google.maps.Marker({
                map: this.mapEdit,
                draggable: true,
                position: new google.maps.LatLng(this.POSEditCoord.lat(), this.POSEditCoord.lng())
            });
        }
    };
    PosComponent.prototype.addForm = function () {
        this.typeOfView = 3;
        // clean properties
        this.POSName = '';
        this.POSAddress = '';
        this.POSTel = '';
        this.imagePath = '';
        if (this.POSMarker !== undefined) {
            this.POSMarker.setMap(null);
        }
    };
    PosComponent.prototype.cancelEdit = function () {
        this.typeOfView = 1;
    };
    PosComponent.prototype.cancelAdd = function () {
        this.typeOfView = 1;
    };
    PosComponent.prototype.add = function () {
        var _this = this;
        this.pointOFSaleService
            .addPointOfSale(this.POSName, this.POSBusinessName, this.POSContactName, this.POSRUT, this.POSGroup, this.POSAddress, this.POSTel, this.imagePath, this.POSMarker.getPosition())
            .subscribe(function (response) {
            if (!!_this.imageFile) {
                _this.imagesService
                    .sendImage('locales', _this.imagePath, _this.imageFile.size, _this.imageFile.data)
                    .subscribe(function (res) {
                    _this.imageFile = null;
                    _this.typeOfView = 1;
                    _this.loadPointsOfSale();
                }, function (error) {
                    console.error(error);
                });
            }
            else {
                _this.imageFile = null;
                _this.typeOfView = 1;
                _this.loadPointsOfSale();
            }
        });
    };
    PosComponent.prototype.actualizar = function () {
        var _this = this;
        this.pointOFSaleService
            .updatePointOfSale(this.POSEdit.id, this.POSEditName, this.POSEditBusinessName, this.POSEditContactName, this.POSEditRUT, this.POSEditAddress, this.POSEditTel, this.imagePath, this.POSEditMarker.getPosition())
            .subscribe(function (response) {
            if (!!_this.imageFile) {
                _this.imagesService
                    .sendImage('locales', _this.imagePath, _this.imageFile.size, _this.imageFile.data)
                    .subscribe(function (res) {
                    _this.imageFile = null;
                    _this.typeOfView = 1;
                    _this.POSEditMarker.setMap(null);
                    _this.loadPointsOfSale();
                }, function (error) {
                    console.error(error);
                });
            }
            else {
                _this.imageFile = null;
                _this.typeOfView = 1;
                _this.loadPointsOfSale();
            }
        });
    };
    PosComponent.prototype.loadPointsOfSale = function () {
        var _this = this;
        this.pointOFSaleService.get().subscribe(function (response) {
            _this.typeOfView = 1;
            if (response.result === -1) {
                _this.router.navigate(['']);
            }
            else {
                _this.pointsOfSale = [];
                for (var _i = 0, _a = response.data; _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (!!i.coord) {
                        i.coord = new google.maps.LatLng(i.coord.x, i.coord.y);
                    }
                    _this.pointsOfSale.push(i);
                }
                //this.POSEditCoord = new google.maps.LatLng(POSEdit.coord.x,POSEdit.coord.y);
            }
        }, function (error) { });
    };
    PosComponent.prototype.delete = function (idPOS) {
        var _this = this;
        this.pointOFSaleService.deletePointOfSale(idPOS).subscribe(function (response) {
            if (response.result === -1) {
                alert(response.message);
            }
            else {
                _this.loadPointsOfSale();
            }
        });
    };
    PosComponent.prototype.getImage = function () {
        return this.imageFile
            ? this.domSanitizer.bypassSecurityTrustUrl('data:image/' + this.imageFile.type + ';base64, ' + this.imageFile.data)
            : 'images/locales/' + this.imagesService.getSmallImage(this.POSEdit.image);
    };
    PosComponent.prototype.handleSelected = function (file) {
        if (!!file) {
            this.imageFile = file;
            this.imagePath = (this.POSEdit ? this.POSEdit.id + '_' : '') + this.imageFile.name;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('gmap'),
        __metadata("design:type", Object)
    ], PosComponent.prototype, "gmapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('gmapEdit'),
        __metadata("design:type", Object)
    ], PosComponent.prototype, "gmapEditElement", void 0);
    PosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pos',
            template: __webpack_require__("../../../../../src/app/components/adm/pos/pos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/adm/pos/pos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_point_of_sale_service__["a" /* PointOfSaleService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__services_images_service__["a" /* ImagesService */]])
    ], PosComponent);
    return PosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/adm/products/add/product.add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/products/add/product.add.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\r\n\t<tr>\r\n\t\t<td>\r\n\t\t\t<div class=\"card\" style=\"margin:15px;\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<b>Agregar producto</b>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n                    <div class=\"form-group\">\r\n                        <span class=\"input-group-addon\">Nombre:</span>\r\n                        <input type=\"text\" class=\"form-control\" id=\"name\" *ngIf=\"product\" [(ngModel)]=\"product.name\">\r\n                    </div>\r\n    \r\n                    <div class=\"form-group\">\r\n                        <span class=\"input-group-addon\">Imagen:</span>\r\n                        <img [src]=\"getImage()\" *ngIf=\"product\" class=\"small_image\" />\r\n                        <file-picker text=\"Cambiar\" (selected)=\"handleSelected($event)\"></file-picker>\r\n                        <div *ngIf=\"filestring\">\r\n                            {{filestring}}\r\n                        </div>\r\n                    </div>\r\n                    \r\n\t\t\t\t\t<button type=\"button\" (click)=\"agregar()\" class=\"btn btn-primary\">Agregar unidad</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-light\" routerLink=\"/admin/productos\">Cancelar</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</td>\r\n\t</tr>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/adm/products/add/product.add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_images_service__ = __webpack_require__("../../../../../src/app/services/images.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_alert_alert_service__ = __webpack_require__("../../../../../src/app/modules/alert/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// service



var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(router, domSanitizer, productsService, imagesService, alertService) {
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.productsService = productsService;
        this.imagesService = imagesService;
        this.alertService = alertService;
        this.product = { id: -1, name: '', path_image: null };
    }
    ProductAddComponent.prototype.agregar = function () {
        var _this = this;
        var category = 'productos';
        var promise = this.productsService.agregar(this.product);
        promise.subscribe(function (data) {
            if (!!_this.imageFile) {
                _this.imagesService
                    .sendImage(category, _this.product.path_image, _this.imageFile.size, _this.imageFile.data)
                    .subscribe(function (res) {
                    _this.router.navigateByUrl('/admin/productos');
                }, function (error) {
                    console.error(error);
                    _this.alertService.error(error.error);
                });
            }
            else {
                _this.router.navigateByUrl('/admin/productos');
            }
        }, function (error) {
            console.error(error);
            _this.alertService.error(error.error);
        });
    };
    ProductAddComponent.prototype.getImage = function () {
        return this.imageFile
            ? this.domSanitizer.bypassSecurityTrustUrl('data:image/' + this.imageFile.type + ';base64, ' + this.imageFile.data)
            : 'images/productos/' + this.imagesService.getSmallImage(this.product.path_image);
    };
    ProductAddComponent.prototype.handleSelected = function (file) {
        if (!!file) {
            this.imageFile = file;
            this.product.path_image = this.imageFile.name;
        }
    };
    ProductAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/components/adm/products/add/product.add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/adm/products/add/product.add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_images_service__["a" /* ImagesService */],
            __WEBPACK_IMPORTED_MODULE_5__modules_alert_alert_service__["a" /* AlertService */]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/adm/products/edit/product.edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content_row{\r\n    min-height: 230px;        \r\n}\r\n\r\n.image_container{\r\n    position: relative;\r\n}\r\n\r\n.small_edit_image img,\r\n.small_edit_image .img_stream{\r\n    max-width: 40px;\r\n    max-height: 100px;\r\n}\r\n\r\n.small_edit_image_action {\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    height: 100px;\r\n    max-width: 40px;\r\n    max-height: 100px;\r\n    opacity: 0;\r\n}\r\n\r\n.small_edit_image_action:hover  {\r\n    opacity: 0.8;\r\n    background-color: white;\r\n    padding-top: 20px;\r\n    padding-left: 10px;\r\n}\r\n\r\n/deep/ .small_edit_image_action:hover  label {\r\n    background-color: #d6d6d6;\r\n    opacity: 1;\r\n}\r\n\r\n.strong{\r\n    font-weight: bold;\r\n}\r\n\r\n.align-text-right{\r\n    text-align: right;\r\n}\r\n\r\n.detalles-insumo{\r\n    font-size: 13px;\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n.supplies-col{\r\n    margin-top: 30px;\r\n}\r\n\r\n.buttons{\r\n    margin-top: 20px;\r\n}\r\n\r\n.delete-product-supply {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/products/edit/product.edit.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\r\n  <tr>\r\n    <td>\r\n      <div class=\"card\" style=\"margin:15px;\">\r\n        <div class=\"card-header\">\r\n          <b>Editar producto</b>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row content_row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <span class=\"input-group-addon\">Nombre:</span>\r\n                <input type=\"text\" class=\"form-control\" id=\"name\" *ngIf=\"product\" [(ngModel)]=\"product.name\">\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <span class=\"input-group-addon\">Imagen:</span>\r\n                <div class=\"image_container\">\r\n                  <file-picker text=\"Cambiar\" (selected)=\"handleSelected($event)\" class=\"small_edit_image_action\"></file-picker>\r\n                  <div class=\"small_edit_image\">\r\n                    <img [src]=\"getImage()\" *ngIf=\"product\" />\r\n                    <div *ngIf=\"filestring\" class=\"img_stream\">\r\n                      {{filestring}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 supplies-col\">\r\n\r\n              <a data-toggle=\"collapse\" href=\"#collapseDetailes\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseDetailes\">\r\n                <span *ngIf=\"!!product && !!supplies && !!units && !!product.supplies\">\r\n                  Costo en insumos: {{ totalSupplyPrice() | currency:'$':'code':'1.0-0' }}\r\n                  <!-- \"code\", \"symbol\" or \"symbol-narrow\" -->\r\n                </span>\r\n              </a>\r\n              <div class=\"collapse\" id=\"collapseDetailes\">\r\n                <div class=\"card card-body detalles-insumo\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table table-striped table-responsive w-auto\">\r\n                      <thead class=\"thead\">\r\n                        <tr>\r\n                          <th scope=\"col\">Nombre</th>\r\n                          <th scope=\"col\">Cantidad</th>\r\n                          <th scope=\"col\">Total ($)</th>\r\n                          <th scope=\"col\"></th> \r\n                        </tr>\r\n                      </thead>\r\n                      <tbody *ngIf=\"!!supplies && !!units\">\r\n                        <tr *ngFor=\"let i of sortSupplies(product.supplies)\" class=\"supply-row\">\r\n                          <td>{{ filterSupply(i.idSupply).name }}</td>\r\n                          <td>{{ i.quantity }} {{filterUnit(i.idSupply).name}}</td>\r\n                          <td class=\"align-text-right\">{{ filterSupply(i.idSupply).amount * i.quantity }}</td>\r\n                          <td style=\"text-align: center;\">\r\n                              <a (click)=\"deleteSupply(i.idSupply)\" class=\"delete-product-supply\">\r\n                                <i class=\"fa fa-trash-o\" style=\"font-size: 1.2em;\"></i>\r\n                              </a>\r\n                            </td>\r\n                        </tr>\r\n                      </tbody>\r\n                      <tfoot>\r\n                        <tr>\r\n                          <td></td>\r\n                          <td></td>\r\n                          <td class=\"strong align-text-right\" *ngIf=\"!!product && !!supplies && !!units && !!product.supplies\">\r\n                            {{ totalSupplyPrice() | currency:'$':true:'2.0-0' }} </td>\r\n                        </tr>\r\n                      </tfoot>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row buttons\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"actualizar()\">Actualizar</button>\r\n            <button type=\"button\" class=\"btn btn-light\" routerLink=\"/admin/productos\">Cancelar</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/adm/products/edit/product.edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_images_service__ = __webpack_require__("../../../../../src/app/services/images.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_supply_service__ = __webpack_require__("../../../../../src/app/services/supply.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datatypes_result__ = __webpack_require__("../../../../../../datatypes/result.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// service





var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(activatedRoute, router, domSanitizer, productsService, suppliesService, imagesService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.productsService = productsService;
        this.suppliesService = suppliesService;
        this.imagesService = imagesService;
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.activatedRoute.params.subscribe(function (params) {
            _this.loadProduct(params['id']);
        }, function (err) {
            // TODO: handle error
            console.error(err);
        });
        this.suppliesService.getLatestPrices().subscribe(function (s) {
            _this.supplies = s;
        }, function (err) {
            // TODO: handle error
            console.error(err);
        });
        this.suppliesService.getUnits().subscribe(function (u) {
            _this.units = u;
        }, function (err) {
            // TODO: handle error
            console.error(err);
        });
    };
    ProductEditComponent.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
    };
    ProductEditComponent.prototype.loadProduct = function (id) {
        var _this = this;
        this.productsService.get(id).subscribe(function (res) {
            if (res.result == __WEBPACK_IMPORTED_MODULE_6__datatypes_result__["a" /* ResultCode */].Error) {
                // TODO: handle error
            }
            else {
                _this.product = res.data;
            }
        });
    };
    ProductEditComponent.prototype.actualizar = function () {
        var _this = this;
        var category = 'productos';
        var promise = this.productsService.update(this.product);
        promise.subscribe(function (data) {
            if (!!_this.imageFile) {
                _this.imagesService
                    .sendImage(category, _this.product.path_image, _this.imageFile.size, _this.imageFile.data)
                    .subscribe(function (res) {
                    _this.router.navigateByUrl('/admin/productos');
                }, function (error) {
                    console.error(error);
                });
            }
            else {
                _this.router.navigateByUrl('/admin/productos');
            }
        });
    };
    ProductEditComponent.prototype.getImage = function () {
        return this.imageFile
            ? this.domSanitizer.bypassSecurityTrustUrl('data:image/' + this.imageFile.type + ';base64, ' + this.imageFile.data)
            : 'images/productos/' + this.imagesService.getSmallImage(this.product.path_image);
    };
    ProductEditComponent.prototype.handleSelected = function (file) {
        if (!!file) {
            this.imageFile = file;
            this.product.path_image = this.product.id + '_' + this.imageFile.name;
        }
    };
    ProductEditComponent.prototype.sortSupplies = function (supplies) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_7_lodash__["chain"](supplies)
            .sortBy(function (ps) { return __WEBPACK_IMPORTED_MODULE_7_lodash__["find"](_this.supplies, function (s) { return s.id == ps.idSupply; }).name; })
            .value();
    };
    ProductEditComponent.prototype.filterSupply = function (idSupply) {
        return this.supplies.find(function (s) { return s.id == idSupply; });
    };
    ProductEditComponent.prototype.filterUnit = function (idSupply) {
        var _this = this;
        return this.units.find(function (u) { return u.id == _this.filterSupply(idSupply).unit; });
    };
    ProductEditComponent.prototype.totalSupplyPrice = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_7_lodash__["chain"](this.product.supplies)
            .map(function (s) { return s.quantity * _this.filterSupply(s.idSupply).amount; })
            .sum()
            .value();
    };
    ProductEditComponent.prototype.deleteSupply = function (idSupply) {
        var _this = this;
        this.productsService.deleteSupply(this.product.id, idSupply).subscribe(function (d) {
            _this.loadProduct(_this.product.id);
        }, function (err) {
            // error handling
            console.log(err);
        });
    };
    ProductEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/components/adm/products/edit/product.edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/adm/products/edit/product.edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_5__services_supply_service__["a" /* SupplyService */],
            __WEBPACK_IMPORTED_MODULE_4__services_images_service__["a" /* ImagesService */]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/adm/products/list/products.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div style=\"float: right;\">\r\n        <button class=\"btn btn-circle add fa fa-plus\" routerLink=\"agregar\"></button>\r\n    </div>\r\n    <div>\r\n        <table class=\"table table-striped\">\r\n            <thead class=\"thead-dark\">\r\n                <tr>\r\n                    <th scope=\"col\">Imagen</th>\r\n                    <th scope=\"col\">Nombre</th>\r\n                    <th scope=\"col\">Editar</th>\r\n                    <th scope=\"col\">Eliminar</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let i of products\" class=\"product-row\" (click)=\"onProductClick(i.id)\">\r\n                    <td>\r\n                        <!-- <a href=\"{{'images/productos/'+ i.path_image}}\" target=\"_blank\"> -->\r\n                            <img src=\"{{'images/productos/'+ getSmallImage(i.path_image)}}\"  class=\"small_list_image\" />\r\n                        <!-- </a> -->\r\n                    </td>\r\n                    <td>{{i.name}}</td>\r\n                    <td style=\"text-align: center;\">\r\n                        <a [routerLink]=\"['editar', i.id]\">\r\n                            <i class=\"fa fa-edit\" style=\"font-size: 1.7em;\"></i>\r\n                        </a>\r\n                    </td>\r\n                    <td style=\"text-align: center;\">\r\n                        <a (click)=\"delete(i.id)\">\r\n                            <i class=\"fa fa-trash-o\" style=\"font-size: 1.7em;\"></i>\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\t\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/adm/products/list/products.list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img.small_list_image {\n  max-width: 100px;\n  max-height: 100px; }\n\n#formAdd {\n  margin: 10px; }\n\n.footer {\n  text-align: center; }\n\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  padding: 6px 0px;\n  border-radius: 15px;\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.42857; }\n\n.add {\n  background-color: green;\n  color: white;\n  float: right;\n  margin: 10px;\n  font-weight: bold;\n  font-size: 15px; }\n\ntr.product-row {\n  cursor: pointer; }\n\ntr.product-row:hover {\n    background-color: #fdf6e4 !important; }\n\ntr.product-row td {\n    height: 75px;\n    vertical-align: middle; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/products/list/products.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_images_service__ = __webpack_require__("../../../../../src/app/services/images.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datatypes_result__ = __webpack_require__("../../../../../../datatypes/result.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(productsService, router, imagesService) {
        this.productsService = productsService;
        this.router = router;
        this.imagesService = imagesService;
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        this.loadProducts();
    };
    ProductsListComponent.prototype.delete = function (id) {
        var _this = this;
        this.productsService.delete(id).subscribe(function (res) {
            if (res.result == __WEBPACK_IMPORTED_MODULE_5__datatypes_result__["a" /* ResultCode */].OK) {
                _this.loadProducts();
            }
            else {
                console.log('ERROR: ' + res.message);
                alert('ERROR: ' + res.message);
            }
        }, function (err) {
            console.log('UNEXPECTED ERROR: ' + err);
            alert(err);
        });
    };
    ProductsListComponent.prototype.loadProducts = function () {
        var _this = this;
        this.productsService.getAll().subscribe(function (response) {
            _this.products = __WEBPACK_IMPORTED_MODULE_2_lodash__["chain"](response.data)
                .sortBy(function (m) { return m.name.toLowerCase(); })
                .value();
        }, function (error) { });
    };
    ProductsListComponent.prototype.onProductClick = function (id) {
        this.router.navigate(['admin', 'productos', 'editar', id]);
    };
    ProductsListComponent.prototype.getSmallImage = function (path) {
        return this.imagesService.getSmallImage(path);
    };
    ProductsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/components/adm/products/list/products.list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/adm/products/list/products.list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_images_service__["a" /* ImagesService */]])
    ], ProductsListComponent);
    return ProductsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/adm/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/components/adm/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/components/adm/products/products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/adm/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/adm/routes/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 6px 0px;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 1.42857;\r\n}\r\n\r\n.add{\r\n    background-color: green;\r\n    color: white;\r\n    float: right;\r\n    margin: 10px;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/routes/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <button class=\"btn btn-circle add fa fa-plus\" routerLink=\"agregar\"></button>\r\n    <table class=\"table table-striped\">\r\n        <thead class=\"thead-dark\">\r\n            <tr>\r\n                <th>Nombre</th>\r\n                <th>Editar</th>\r\n                <th>Eliminar</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let i of routes\">\r\n                <td>{{i.name}}</td>\r\n                <td style=\"text-align: center;\">\r\n                    <a [routerLink]=\"['edit', i.idroute]\">\r\n                        <i class=\"fa fa-edit\" style=\"font-size: 1.7em;\"></i>\r\n                    </a>\r\n                </td>\r\n                <td>\r\n                    <a (click)=\"delete(i.idroute)\">\r\n                        <i class=\"fa fa-trash-o\" style=\"font-size: 1.7em;\"></i>\r\n                    </a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/adm/routes/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(router, routeServices) {
        this.router = router;
        this.routeServices = routeServices;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.loadSupplies();
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.routeServices.delete(id).subscribe(function (data) { return _this.loadSupplies(); });
    };
    ListComponent.prototype.loadSupplies = function () {
        var _this = this;
        this.routeServices.get().subscribe(function (data) {
            console.log(data);
            if (data.result === -1) {
                console.log(data);
                _this.router.navigate(['']);
            }
            else {
                _this.routes = data.data;
            }
        }, function (error) { });
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/components/adm/routes/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/adm/routes/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_route_service__["a" /* RouteService */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/adm/routes/route.add/route.add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/routes/route.add/route.add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"margin:15px;\">\r\n\t<div class=\"card-header\">\r\n\t\t<b>Agregar Ruta</b>\r\n\t</div>\r\n\t<div class=\"card-body\">\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<span class=\"input-group-addon\">Nombre:</span>\r\n\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"route.name\">\r\n\t\t</div>\r\n    <button type=\"button\" (click)=\"agregar()\" class=\"btn btn-primary\">Agregar ruta</button>\r\n    <button type=\"button\" class=\"btn btn-light\" routerLink=\"/recorridos\">Cancelar</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/adm/routes/route.add/route.add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteAdd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteAdd = /** @class */ (function () {
    function RouteAdd(routeService, router) {
        this.routeService = routeService;
        this.router = router;
        this.route = {};
    }
    RouteAdd.prototype.ngOnInit = function () {
    };
    RouteAdd.prototype.agregar = function () {
        var _this = this;
        this.routeService.agregar(this.route)
            .subscribe(function (data) {
            _this.router.navigateByUrl('/recorridos');
        });
    };
    RouteAdd = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-route.add',
            template: __webpack_require__("../../../../../src/app/components/adm/routes/route.add/route.add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/adm/routes/route.add/route.add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_route_service__["a" /* RouteService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], RouteAdd);
    return RouteAdd;
}());



/***/ }),

/***/ "../../../../../src/app/components/adm/routes/route.edit/route.edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/routes/route.edit/route.edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"margin:15px;\">\r\n    <div class=\"card-header\">\r\n        <b>Editar recorrido</b>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"form-group\">\r\n            <span class=\"input-group-addon\">Nombre:</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"name\" *ngIf=\"route\" [(ngModel)]=\"route.name\">\r\n        </div>\r\n        <table class=\"table\">\r\n            <tr>\r\n                <td>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            Puntos de venta\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <table class=\"table\">\r\n                                <tr>\r\n                                    <td style=\"width: 15px;\"></td>\r\n                                    <td>Nombre</td>\r\n                                    <td>Eliminar</td>\r\n                                </tr>\r\n                                <tr *ngFor=\"let i of pointsOfSaleRoute\">\r\n                                    <td>\r\n                                        <span class=\"fa fa-arrow-circle-up\" (click)=\"changeOrder(i.id,i.position, i.position - 1)\" *ngIf=\"i.position !== 1\"></span>\r\n                                        <span class=\"fa fa-arrow-circle-down\" (click)=\"changeOrder(i.id,i.position,i.position + 1)\" *ngIf=\"i.position !== pointsOfSaleRoute.length\"></span>\r\n                                    </td>\r\n                                    <td>{{i.name}}</td>\r\n                                    <td>\r\n                                        <a (click)=\"remove(i.id)\">\r\n                                            <i class=\"fa fa-trash-o\" style=\"font-size: 1.7em;\"></i>\r\n                                        </a>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <span class=\"input-group-addon\">Punto de venta:</span>\r\n                            <select class=\"form-control\" [(ngModel)]=\"rPOS.idPointOfSale\">\r\n                                <option *ngFor=\"let pos of pointsOfSales\" [ngValue]=\"pos.id\">{{pos.name}}</option>\r\n                            </select>\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"agregarPuntoDeVenta()\">Agregar</button>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            Usuarios\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <table class=\"table\">\r\n                                <tr>\r\n                                    <td>Fecha</td>\r\n                                    <td>Nombre</td>\r\n                                    <td>Eliminar</td>\r\n                                </tr>\r\n                                <tr *ngFor=\"let u of usersRoute\">\r\n                                    <td>{{u.date | date:'dd/MM/yyyy'}}</td>\r\n                                    <td>{{u.firstname}} {{u.lastname}}</td>\r\n                                    <td>\r\n                                        <a (click)=\"removeUser(u.id)\">\r\n                                            <i class=\"fa fa-trash-o\" style=\"font-size: 1.7em;\"></i>\r\n                                        </a>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <span class=\"input-group-addon\">Usuario:</span>\r\n                            <select class=\"form-control\" [(ngModel)]=\"rUser.idUser\">\r\n                                <option *ngFor=\"let u of users\" [ngValue]=\"u.id\">{{u.firstname}} {{u.lastname}}</option>\r\n                            </select>\r\n                            <div class=\"input-group\">\r\n                                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"rUser.date\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\r\n                                        <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"agregarUsuario()\">Agregar</button>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n\r\n\r\n\r\n\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"actualizar()\">Actualizar</button>\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/recorridos\">Cancelar</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/adm/routes/route.edit/route.edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteEdit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RouteEdit = /** @class */ (function () {
    function RouteEdit(activatedRoute, router, routeService, userService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.routeService = routeService;
        this.userService = userService;
        this.rPOS = {};
        this.rUser = {};
        this.usuario = {
            nombre: '',
            apellidos: '',
            email: '',
            password: ''
        };
    }
    RouteEdit.prototype.onSubmit = function () {
        console.log(this.usuario);
    };
    RouteEdit.prototype.ngOnInit = function () {
        var _this = this;
        this.token = localStorage.getItem('token');
        this.userSaved = localStorage.getItem('user');
        this.accountId = Number(localStorage.getItem('accountId'));
        this.editName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.paramsSub = this.activatedRoute.params.subscribe(function (params) {
            _this.routeService.get().subscribe(function (response) {
                console.log(response.data);
                _this.route = response.data.find(function (s) { return s.idroute == params['id']; });
                _this.rPOS.idRoute = _this.route.idroute;
                _this.rUser.idRoute = _this.route.idroute;
                _this.getPointOfSalesRoute();
                _this.getUsers();
                _this.getUsersRoute();
                //this.editForm = new FormGroup({ editName: this.editName });
            });
        }, function (error) { });
        this.routeService.getPointsOfSales().subscribe(function (dataPOS) {
            _this.pointsOfSales = dataPOS;
            console.log(dataPOS);
        });
        this.createFormControls();
        this.createForm();
        this.createFormEditControls();
        this.createFormEdit();
    };
    RouteEdit.prototype.createFormControls = function () {
        this.firstName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.lastName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[^ @]*@[^ @]*')]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8)]);
        this.language = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
    };
    RouteEdit.prototype.createForm = function () {
        /*
        this.myform = new FormGroup({
            name: new FormGroup({
                firstName: this.firstName,
                lastName: this.lastName,
            }),
            email: this.email,
            password: this.password,
            language: this.language
        });
        */
    };
    RouteEdit.prototype.createFormEditControls = function () {
        this.editName = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
    };
    RouteEdit.prototype.createFormEdit = function () {
        /*
        this.editForm = new FormGroup({
            editName: this.editName
        });
        */
    };
    RouteEdit.prototype.remove = function (idPointOfSale) {
        var _this = this;
        this.routeService.remove(this.route.idroute, idPointOfSale).subscribe(function (data) {
            _this.getPointOfSalesRoute();
        });
    };
    RouteEdit.prototype.removeUser = function (idUser) {
        var _this = this;
        this.routeService.removeUser(this.route.idroute, idUser).subscribe(function (data) {
            _this.getUsersRoute();
        });
    };
    RouteEdit.prototype.actualizar = function () {
        var _this = this;
        this.routeService.update(this.route).subscribe(function (data) {
            _this.router.navigateByUrl('/recorridos');
        });
    };
    RouteEdit.prototype.getUsersRoute = function () {
        var _this = this;
        this.routeService.getUsersRoute(this.route.idroute).subscribe(function (data) {
            _this.usersRoute = data;
        });
    };
    RouteEdit.prototype.getPointOfSalesRoute = function () {
        var _this = this;
        this.routeService.getPointsOfSalesRoute(this.route.idroute).subscribe(function (data) {
            _this.pointsOfSaleRoute = data;
        });
    };
    RouteEdit.prototype.getUsers = function () {
        var _this = this;
        this.userService.get().subscribe(function (data) {
            console.log(data);
            _this.users = data;
        });
    };
    RouteEdit.prototype.agregarPuntoDeVenta = function () {
        var _this = this;
        this.routeService.addPointOfSale(this.rPOS).subscribe(function (data) {
            _this.getPointOfSalesRoute();
        });
    };
    RouteEdit.prototype.agregarUsuario = function () {
        var _this = this;
        this.routeService.addUser(this.rUser).subscribe(function (data) {
            _this.getUsersRoute();
        });
    };
    RouteEdit.prototype.changeOrder = function (idpointofSale, position, newposition) {
        var _this = this;
        this.routeService
            .reorderPointOfSale(this.route.idroute, idpointofSale, position, newposition)
            .subscribe(function (data) {
            _this.getPointOfSalesRoute();
        });
    };
    RouteEdit = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-route.edit',
            template: __webpack_require__("../../../../../src/app/components/adm/routes/route.edit/route.edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/adm/routes/route.edit/route.edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_route_service__["a" /* RouteService */],
            __WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UsersService */]])
    ], RouteEdit);
    return RouteEdit;
}());



/***/ }),

/***/ "../../../../../src/app/components/adm/routes/routes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/routes/routes.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/components/adm/routes/routes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoutesComponent = /** @class */ (function () {
    function RoutesComponent() {
    }
    RoutesComponent.prototype.ngOnInit = function () { };
    RoutesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-routes',
            template: __webpack_require__("../../../../../src/app/components/adm/routes/routes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/adm/routes/routes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RoutesComponent);
    return RoutesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/adm/supply/add/supply.add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img.small_image.add_supply {\r\n    max-width: 100px;\r\n    max-height: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/supply/add/supply.add.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\r\n  <tr>\r\n    <td>\r\n      <div class=\"card\" style=\"margin:15px;\">\r\n        <div class=\"card-header\">\r\n          <b>Agregar insumo</b>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"form-group\">\r\n            <span class=\"input-group-addon\">Nombre:</span>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supply.name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <span class=\"input-group-addon\">Unidad:</span>\r\n\r\n            <select class=\"form-control\" [(ngModel)]=\"supply.units\">\r\n              <option *ngFor=\"let unit of units\" [ngValue]=\"unit.id\">{{unit.name}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <span class=\"input-group-addon\">Precio:</span>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supply.amount\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <span class=\"input-group-addon\">Imagen:</span>\r\n            <img [src]=\"getImage()\" *ngIf=\"supply\" class=\"small_image add_supply\" />\r\n            <file-picker text=\"Cambiar\" (selected)=\"handleSelected($event)\"></file-picker>\r\n            <div *ngIf=\"filestring\">\r\n              {{filestring}}\r\n            </div>\r\n          </div>\r\n\r\n          <button type=\"button\" (click)=\"agregar()\" class=\"btn btn-primary\">Agregar unidad</button>\r\n          <button type=\"button\" class=\"btn btn-light\" routerLink=\"/admin/insumos\">Cancelar</button>\r\n        </div>\r\n      </div>\r\n    </td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/adm/supply/add/supply.add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplyAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_supply_service__ = __webpack_require__("../../../../../src/app/services/supply.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_images_service__ = __webpack_require__("../../../../../src/app/services/images.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// service


var SupplyAddComponent = /** @class */ (function () {
    function SupplyAddComponent(supplyService, router, domSanitizer, imagesService) {
        this.supplyService = supplyService;
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.imagesService = imagesService;
        this.category = 'insumos';
        this.supply = { id: -1, name: '', unit: 1, amount: 0 };
    }
    SupplyAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.supplyService.getUnits().subscribe(function (data) {
            _this.units = data;
        });
    };
    SupplyAddComponent.prototype.agregar = function () {
        var _this = this;
        var promise = this.supplyService.agregar(this.supply);
        promise.subscribe(function (data) {
            if (!!_this.imageFile) {
                _this.imagesService
                    .sendImage(_this.category, _this.supply.path_image, _this.imageFile.size, _this.imageFile.data)
                    .subscribe(function (res) {
                    _this.router.navigateByUrl('/admin/' + _this.category);
                }, function (error) {
                    console.error(error);
                });
            }
            else {
                _this.router.navigateByUrl('/admin/' + _this.category);
            }
        });
    };
    SupplyAddComponent.prototype.getImage = function () {
        return this.imageFile
            ? this.domSanitizer.bypassSecurityTrustUrl('data:image/' + this.imageFile.type + ';base64, ' + this.imageFile.data)
            : 'images/' + this.category + '/' + this.imagesService.getSmallImage(this.supply.path_image);
    };
    SupplyAddComponent.prototype.handleSelected = function (file) {
        if (!!file) {
            this.imageFile = file;
            this.supply.path_image = this.imageFile.name;
        }
    };
    SupplyAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-input-add',
            template: __webpack_require__("../../../../../src/app/components/adm/supply/add/supply.add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/adm/supply/add/supply.add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_supply_service__["a" /* SupplyService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__services_images_service__["a" /* ImagesService */]])
    ], SupplyAddComponent);
    return SupplyAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/adm/supply/edit/supply.edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img.small_image.edit_supply {\r\n    max-width: 100px;\r\n    max-height: 100px; \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/supply/edit/supply.edit.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\r\n  <tr>\r\n    <td>\r\n      <div class=\"card\" style=\"margin:15px;\">\r\n        <div class=\"card-header\">\r\n          <b>Editar insumo</b>\r\n        </div>\r\n        <div class=\"card-body\">\r\n\r\n          <div class=\"form-group\">\r\n            <span class=\"input-group-addon\">Nombre:</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"name\" *ngIf=\"supply\" [(ngModel)]=\"supply.name\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <span class=\"input-group-addon\">Unidad:</span>\r\n\r\n            <select class=\"form-control\" *ngIf=\"supply\" [(ngModel)]=\"supply.unit\">\r\n              <option *ngFor=\"let unit of units\" [ngValue]=\"unit.id\">{{unit.name}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <span class=\"input-group-addon\">Precio:</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"amount\" *ngIf=\"supply\" [(ngModel)]=\"supply.amount\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <span class=\"input-group-addon\">Imagen:</span>\r\n            <img [src]=\"getImage()\" *ngIf=\"supply\" class=\"small_image edit_supply\" />\r\n            <file-picker text=\"Cambiar\" (selected)=\"handleSelected($event)\"></file-picker>\r\n            <div *ngIf=\"filestring\">\r\n              {{filestring}}\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"actualizar()\">Actualizar</button>\r\n          <button type=\"button\" class=\"btn btn-light\" routerLink=\"/admin/insumos\">Cancelar</button>\r\n        </div>\r\n      </div>\r\n    </td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/adm/supply/edit/supply.edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplyEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_supply_service__ = __webpack_require__("../../../../../src/app/services/supply.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_images_service__ = __webpack_require__("../../../../../src/app/services/images.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// service



var SupplyEditComponent = /** @class */ (function () {
    function SupplyEditComponent(activatedRoute, router, supplyService, domSanitizer, imagesService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.supplyService = supplyService;
        this.domSanitizer = domSanitizer;
        this.imagesService = imagesService;
        this.category = 'insumos';
    }
    SupplyEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.activatedRoute.params.subscribe(function (params) {
            _this.supplyService.get().subscribe(function (data) {
                _this.supply = data.find(function (s) { return s.id == params['id']; });
            });
            _this.supplyService.getUnits().subscribe(function (data) {
                _this.units = data;
            });
        }, function (error) { });
    };
    SupplyEditComponent.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
    };
    SupplyEditComponent.prototype.actualizar = function () {
        var _this = this;
        var promise = this.supplyService.update(this.supply);
        promise.subscribe(function (data) {
            if (!!_this.imageFile) {
                _this.imagesService
                    .sendImage(_this.category, _this.supply.path_image, _this.imageFile.size, _this.imageFile.data)
                    .subscribe(function (res) {
                    _this.router.navigateByUrl('/admin/' + _this.category);
                }, function (error) {
                    console.error(error);
                });
            }
            else {
                _this.router.navigateByUrl('/admin/' + _this.category);
            }
        });
    };
    SupplyEditComponent.prototype.getImage = function () {
        return this.imageFile
            ? this.domSanitizer.bypassSecurityTrustUrl('data:image/' + this.imageFile.type + ';base64, ' + this.imageFile.data)
            : 'images/' + this.category + '/' + this.imagesService.getSmallImage(this.supply.path_image);
    };
    SupplyEditComponent.prototype.handleSelected = function (file) {
        if (!!file) {
            this.imageFile = file;
            this.supply.path_image = this.supply.id + '_' + this.imageFile.name;
        }
    };
    SupplyEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-supply-edit',
            template: __webpack_require__("../../../../../src/app/components/adm/supply/edit/supply.edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/adm/supply/edit/supply.edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_supply_service__["a" /* SupplyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__services_images_service__["a" /* ImagesService */]])
    ], SupplyEditComponent);
    return SupplyEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/adm/supply/list/supply.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <span style=\"float: right;\">\r\n        <button class=\"btn btn-circle add fa fa-plus\" routerLink=\"agregar\"></button>\r\n    </span>\r\n\t<table class=\"table table-striped\">\r\n\t\t<thead class=\"thead-dark\">\r\n\t\t\t<tr>\r\n\t\t\t\t<th scope=\"col\">Imagen</th>\r\n\t\t\t\t<th scope=\"col\">Nombre</th>\r\n\t\t\t\t<th scope=\"col\">Precio</th>\r\n\t\t\t\t<th scope=\"col\" style=\"width:100px;text-align: center;\">Editar</th>\r\n\t\t\t\t<th scope=\"col\" style=\"width:100px;text-align: center;\">Eliminar</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr *ngFor=\"let s of supplies\" class=\"supply-row\">\r\n                <td>\r\n                    <a href=\"{{'images/insumos' + s.path_image}}\" target=\"_blank\">\r\n                        <img src=\"{{'images/insumos/'+ s.path_image}}\"  class=\"small_list_image\" />\r\n                    </a>\r\n                </td>\r\n\t\t\t\t<td>{{s.name}}</td>\r\n\t\t\t\t<td>$ {{s.amount}} / {{ getUnit(s.unit) }}</td>\r\n\t\t\t\t<td style=\"text-align: center;\">\r\n\t\t\t\t\t<a [routerLink]=\"['editar', s.id]\">\r\n\t\t\t\t\t\t<i class=\"fa fa-edit\" style=\"font-size: 1.7em;\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td style=\"text-align: center;\">\r\n\t\t\t\t\t<a (click)=\"delete(s.id)\">\r\n\t\t\t\t\t\t<i class=\"fa fa-trash-o\" style=\"font-size: 1.7em;\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/adm/supply/list/supply.list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img.small_list_image {\n  max-width: 100px;\n  max-height: 100px; }\n\ntr.supply-row:hover {\n  background-color: #fdf6e4 !important; }\n\ntr.supply-row td {\n  height: 75px;\n  vertical-align: middle; }\n\n.btn-circle {\n  width: 30px;\n  height: 30px;\n  padding: 6px 0px;\n  border-radius: 15px;\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.42857; }\n\n.add {\n  background-color: green;\n  color: white;\n  float: right;\n  margin: 10px;\n  font-weight: bold;\n  font-size: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/supply/list/supply.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_supply_service__ = __webpack_require__("../../../../../src/app/services/supply.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datatypes_result__ = __webpack_require__("../../../../../../datatypes/result.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupplyListComponent = /** @class */ (function () {
    function SupplyListComponent(supplyService) {
        this.supplyService = supplyService;
        this.category = 'insumos';
    }
    SupplyListComponent.prototype.ngOnInit = function () {
        this.loadSupplies();
    };
    SupplyListComponent.prototype.getUnit = function (unitId) {
        return !!this.units ? this.units.find(function (u) { return u.id == unitId; }).name : null;
    };
    SupplyListComponent.prototype.delete = function (id) {
        var _this = this;
        this.supplyService.delete(id).subscribe(function (res) {
            if (res.result == __WEBPACK_IMPORTED_MODULE_2__datatypes_result__["a" /* ResultCode */].OK) {
                _this.loadSupplies();
            }
            else {
                console.error('ERROR: ' + res.message);
                alert('ERROR: ' + res.message);
            }
        }, function (err) {
            console.error('UNEXPECTED ERROR: ' + err);
            alert(err);
        });
    };
    SupplyListComponent.prototype.loadSupplies = function () {
        var _this = this;
        this.supplyService.getLatestPrices().subscribe(function (data) {
            _this.supplies = data;
            // _.chain(data)
            // 	.groupBy(s => s.id)
            // 	.map(g =>
            // 		_.chain(g)
            // 			.sortBy(s => s.date)
            // 			.last()
            // 			.value()
            // 	)
            // 	.sortBy(m => m.name.toLowerCase())
            // 	.value();
        }, function (error) {
            // TODO: mostrar error
            console.error(error);
            alert(error);
        });
        this.supplyService.getUnits().subscribe(function (data) { return (_this.units = data); }, function (error) {
            // TODO: mostrar error
            console.error(error);
            alert(error);
        });
    };
    SupplyListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-supply-list',
            template: __webpack_require__("../../../../../src/app/components/adm/supply/list/supply.list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/adm/supply/list/supply.list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_supply_service__["a" /* SupplyService */]])
    ], SupplyListComponent);
    return SupplyListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/adm/supply/supply.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/supply/supply.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/components/adm/supply/supply.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupplyComponent = /** @class */ (function () {
    function SupplyComponent() {
    }
    SupplyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/components/adm/supply/supply.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/adm/supply/supply.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SupplyComponent);
    return SupplyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/adm/templates-routes/templates-routes.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"typeOfView == 3\">\r\n    <form novalidate>\r\n        <div class=\"card\" style=\"margin:15px;\">\r\n            <div class=\"card-header\">\r\n                <b>Editar recorrido</b>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"form-group\">\r\n                    <span class=\"input-group-addon\">Nombre:</span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"routeTemplateName\">\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"nuevoTemplate()\">Actualizar</button>\r\n                <button type=\"button\" class=\"btn btn-light\" routerLink=\"/recorridos\">Cancelar</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div class=\"card\" style=\"margin:15px;\" [hidden]=\"typeOfView !== 2\" *ngIf=\"templateRoute\">\r\n    <div class=\"card-header\">\r\n        <b>Editar Template</b>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"form-group\">\r\n            <span class=\"input-group-addon\">Nombre:</span>\r\n            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"templateRoute.name\">\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                Puntos de venta\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <table class=\"table\">\r\n                    <tr>\r\n                        <td style=\"width: 15px;\"></td>\r\n                        <td>Nombre</td>\r\n                        <td>Eliminar</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let i of pointsOfSaleRoute\">\r\n                        <td>\r\n                            <span class=\"fa fa-arrow-circle-up\" (click)=\"changeOrder(i.id,i.position, i.position - 1)\" *ngIf=\"i.position !== 1\"></span>\r\n                            <span class=\"fa fa-arrow-circle-down\" (click)=\"changeOrder(i.id,i.position,i.position + 1)\" *ngIf=\"i.position !== pointsOfSaleRoute.length\"></span>\r\n                        </td>\r\n                        <td>{{i.name}}</td>\r\n                        <td>\r\n                            <a (click)=\"remove(i.id)\">\r\n                                <i class=\"fa fa-trash-o\" style=\"font-size: 1.7em;\"></i>\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <span class=\"input-group-addon\">Punto de venta:</span>\r\n                <select class=\"form-control\" [(ngModel)]=\"POS\">\r\n                    <option *ngFor=\"let pos of pointsOfSale\" [ngValue]=\"pos\">{{pos.name}}</option>\r\n                </select>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"agregarPuntoDeVenta()\">Agregar</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-footer footer\">\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelEdit()\">Cancelar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"actualizar()\">Actualizar</button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"typeOfView == 1\">\r\n    <button class=\"btn btn-circle add fa fa-plus\" (click)=\"addForm()\"></button>\r\n    <table class=\"table table-striped\">\r\n        <thead class=\"thead-dark\">\r\n            <tr>\r\n                <th>Nombre</th>\r\n                <th>Editar</th>\r\n                <th>Eliminar</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let i of templates\">\r\n                <td>{{i.name}}</td>\r\n                <td style=\"text-align: center;\">\r\n                    <a (click)=\"editForm(i.id)\">\r\n                        <i class=\"fa fa-edit\" style=\"font-size: 1.7em;\"></i>\r\n                    </a>\r\n                </td>\r\n                <td>\r\n                    <a (click)=\"delete(i.id)\">\r\n                        <i class=\"fa fa-trash-o\" style=\"font-size: 1.7em;\"></i>\r\n                    </a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/adm/templates-routes/templates-routes.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/templates-routes/templates-routes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesRoutesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_templates_routes_service__ = __webpack_require__("../../../../../src/app/services/templates-routes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TemplatesRoutesComponent = /** @class */ (function () {
    function TemplatesRoutesComponent(templateRouteService, routeService) {
        this.templateRouteService = templateRouteService;
        this.routeService = routeService;
        this.typeOfView = 1;
    }
    TemplatesRoutesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTemplates();
        this.routeService.getPointsOfSales().subscribe(function (response) {
            _this.pointsOfSale = response;
            console.log(_this.pointsOfSale);
        });
    };
    TemplatesRoutesComponent.prototype.getPointOfSalesRoute = function () {
        var _this = this;
        this.templateRouteService.getPointsOfSalesRoute(this.templateRoute.id).subscribe(function (response) {
            _this.pointsOfSaleRoute = response;
            console.log(response);
        });
    };
    TemplatesRoutesComponent.prototype.getTemplates = function () {
        var _this = this;
        this.templateRouteService.getAll().subscribe(function (response) {
            _this.templates = response.data;
            console.log(response);
        });
    };
    TemplatesRoutesComponent.prototype.delete = function (id) {
        var _this = this;
        this.templateRouteService.delete(id).subscribe(function (response) {
            _this.getTemplates();
            console.log(response);
        });
    };
    TemplatesRoutesComponent.prototype.addForm = function () {
        this.typeOfView = 3;
    };
    TemplatesRoutesComponent.prototype.cancelEdit = function () {
        this.typeOfView = 1;
    };
    TemplatesRoutesComponent.prototype.editForm = function (id) {
        this.templateRoute = this.templates.find(function (s) { return s.id == id; });
        this.getPointOfSalesRoute();
        this.typeOfView = 2;
    };
    TemplatesRoutesComponent.prototype.nuevoTemplate = function () {
        var _this = this;
        this.templateRouteService.add(this.routeTemplateName).subscribe(function (data) {
            console.log(data);
            _this.getTemplates();
            _this.typeOfView = 1;
        });
    };
    TemplatesRoutesComponent.prototype.agregarPuntoDeVenta = function () {
        var _this = this;
        console.log(this.templateRoute.id, this.POS.id);
        this.templateRouteService.addPointOfSale(this.templateRoute.id, this.POS.id).subscribe(function (data) {
            _this.getPointOfSalesRoute();
        });
    };
    TemplatesRoutesComponent.prototype.changeOrder = function (idpointofSale, position, newposition) {
        var _this = this;
        this.templateRouteService
            .reorderPointOfSale(this.templateRoute.id, idpointofSale, position, newposition)
            .subscribe(function (data) {
            _this.getPointOfSalesRoute();
        });
    };
    TemplatesRoutesComponent.prototype.remove = function (idPointOfSale) {
        var _this = this;
        this.templateRouteService.remove(this.templateRoute.id, idPointOfSale).subscribe(function (data) {
            _this.getPointOfSalesRoute();
        });
    };
    TemplatesRoutesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-templates-routes',
            template: __webpack_require__("../../../../../src/app/components/adm/templates-routes/templates-routes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/adm/templates-routes/templates-routes.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_templates_routes_service__["a" /* TemplatesRoutesService */],
            __WEBPACK_IMPORTED_MODULE_2__services_route_service__["a" /* RouteService */]])
    ], TemplatesRoutesComponent);
    return TemplatesRoutesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/configs/configs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/configs/configs.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  configs works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/configs/configs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigsComponent = /** @class */ (function () {
    function ConfigsComponent() {
    }
    ConfigsComponent.prototype.ngOnInit = function () {
    };
    ConfigsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-configs',
            template: __webpack_require__("../../../../../src/app/components/configs/configs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/configs/configs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfigsComponent);
    return ConfigsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/front/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex flex-wrap d-flex justify-content-around content-center content-between boxs-container\">\r\n  <div class=\"boxs-home border border-warning\">\r\n    <div class=\"label\">\r\n      <span>Locales</span>\r\n    </div>\r\n    <div class=\"app-image\">\r\n      <a routerLink=\"/locales\">\r\n          <img src=\"/images/Locales.png\">\r\n        </a>\r\n    </div>\r\n  </div>\r\n  <div class=\"boxs-home border border-danger\">\r\n    <div class=\"label\">\r\n      <span>Productos</span>\r\n    </div>\r\n    <div class=\"app-image\">\r\n      <a routerLink=\"/admin/productos\">\r\n          <img src=\"images/Productos.png\">\r\n        </a>\r\n    </div>\r\n  </div>\r\n  <div class=\"boxs-home border border-success\">\r\n    <div class=\"label\">\r\n      <span>Reportes</span>\r\n    </div>\r\n    <div class=\"app-image\" style=\"padding: 7px 2px;\">\r\n      <a routerLink=\"/reportes\">\r\n          <img src=\"/images/Reportes.png\">\r\n        </a>\r\n    </div>\r\n  </div>\r\n  <div class=\"boxs-home border border-primary\">\r\n    <div class=\"label\">\r\n      <span>Mapas</span>\r\n    </div>\r\n    <div class=\"app-image\">\r\n      <a routerLink=\"/mapa\">\r\n          <img src=\"/images/Mapas.png\">\r\n        </a>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/front/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_header_service__ = __webpack_require__("../../../../../src/app/services/header.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, authenticateService, headerService) {
        this.router = router;
        this.authenticateService = authenticateService;
        this.headerService = headerService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticateService.verifyToken().subscribe(function (data) {
            console.log('lplplp');
            _this.headerService.setVisibility(true);
            if (!data.result) {
                _this.router.navigate(['']);
            }
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/front/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/front/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_authenticate_service__["a" /* AuthenticateService */],
            __WEBPACK_IMPORTED_MODULE_3__services_header_service__["a" /* HeaderService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/front/detalle-local/detalle-local.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/detalle-local/detalle-local.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"detalle-local border\">\r\n    <div class=\"detalle-local-header flex flex-wrap d-flex justify-content-around content-center content-between\">\r\n        <div style=\"width:100%; text-align: center;\">{{pointOfSale.name}}</div>\r\n        <div style=\"clear: both;\"></div>\r\n        <div class=\"head-image\">\r\n            \r\n            <img *ngIf=\"pointOfSale.image !== '' && pointOfSale.image !== null\" \r\n                 src=\"images/locales/{{pointOfSale.image}}\" />\r\n            <i *ngIf=\"pointOfSale.image === '' || pointOfSale.image === null\" class=\"fa fa-home\" style=\"font-size: 3.0em;\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"detalle-local-info\">\r\n        <div class=\"container\">\r\n            <div class=\"row align-items-center\">\r\n                <div class=\"col\"></div>\r\n                <div class=\"col\">Entregados</div>\r\n                <div class=\"col\">Devolución vencidos</div>\r\n                <div class=\"col\">Devolución vacíos</div>\r\n            </div>\r\n            <div class=\"row align-items-center\" *ngFor=\"let product of productsToSend\">\r\n                <div class=\"col productos-info\">\r\n                    <div class=\"productos-image\">\r\n                        <img src=\"images/productos/{{product.path_image}}\">\r\n                    </div>\r\n                    <div class=\"productos-title\">\r\n                        <label>{{product.name}}</label>\r\n                    </div>\r\n                </div>            \r\n                <div class=\"col\" >\r\n                    <input type=\"number\" style=\"margin:auto;\" class=\"detalle-input form-control\" [(ngModel)]=\"product.typeTransaction.delivery\" />\r\n                </div>\r\n                <div class=\"col\">\r\n                    <input type=\"number\" style=\"margin:auto;\" class=\"detalle-input form-control\" [(ngModel)]=\"product.typeTransaction.return\"/>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <input type=\"number\" style=\"margin:auto;\" class=\"detalle-input form-control\" [(ngModel)]=\"product.typeTransaction.empty\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"row align-items-center\">\r\n                <div class=\"col\"></div>\r\n                <div class=\"col\">{{quantity(\"delivery\")}}</div>\r\n                <div class=\"col\">{{quantity(\"return\")}}</div>\r\n                <div class=\"col\">{{quantity(\"empty\")}}</div>\r\n            </div>\r\n            <div>\r\n                <textarea class=\"form-control\" [(ngModel)]=\"annotation\" id=\"annotation\"></textarea>                \r\n            </div>\r\n            <div>\r\n                <b>Detalle de la empresa</b><br/>\r\n                <b>RUT: </b> {{pointOfSale.RUT}}<br/>\r\n                <b>Razón Social</b> {{pointOfSale.businessName}}<br/>\r\n                <b>Contacto</b> {{pointOfSale.contactName}}<br/>                \r\n                <b>Detalle a facturar</b><br/>\r\n                <b>Precio unitario: </b>$ {{unitePrice}}<br/>\r\n                <b>Cantidad de productos vendidos: </b>{{quantity(\"delivery\") - quantity(\"return\")}} <br/>\r\n                <b>IVA: </b>${{ (quantity(\"delivery\") - quantity(\"return\")) * unitePrice * 0.22   }}<br/>\r\n                <b>Sub-Total: </b>${{ (quantity(\"delivery\") - quantity(\"return\")) * unitePrice   }}<br/>\r\n                <b>Total: </b>${{ (quantity(\"delivery\") - quantity(\"return\")) * unitePrice * 1.22  }}\r\n            </div>\r\n        </div>\r\n        <div class=\"filters flex d-flex justify-content-around content-center content-between\">            \r\n            <button type=\"button\" class=\"btn btn-secondary btn-lg\" [routerLink]=\"['/locales']\">Cancelar</button>\r\n            <button type=\"button\" (click)=\"agregar()\" class=\"btn btn-success btn-lg\">Agregar Visita</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/front/detalle-local/detalle-local.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleLocalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_point_of_sale_service__ = __webpack_require__("../../../../../src/app/services/point-of-sale.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_viewing_service__ = __webpack_require__("../../../../../src/app/services/viewing.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetalleLocalComponent = /** @class */ (function () {
    function DetalleLocalComponent(route, pointOFSaleService, productService, viewingService) {
        this.route = route;
        this.pointOFSaleService = pointOFSaleService;
        this.productService = productService;
        this.viewingService = viewingService;
        this.annotation = '';
        this.unitePrice = 69;
    }
    DetalleLocalComponent.prototype.ngOnInit = function () {
        this.getPointOfSale(Number(this.route.snapshot.paramMap.get('id')));
        this.getProducts();
    };
    DetalleLocalComponent.prototype.quantity = function (typeTransaction) {
        var sum = 0;
        if (this.productsToSend !== undefined) {
            for (var i = 0; i < this.productsToSend.length; i++) {
                sum += this.productsToSend[i].typeTransaction[typeTransaction];
            }
        }
        return sum;
    };
    DetalleLocalComponent.prototype.getPointOfSale = function (id) {
        var _this = this;
        var pos;
        this.pointOFSaleService.getPointOfSale(id).subscribe(function (result) {
            console.log(result.data, "data");
            _this.pointOfSale = result.data[0];
        });
    };
    DetalleLocalComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getAll().subscribe(function (response) {
            _this.products = response.data;
            _this.productsToSend = new Array();
            for (var _i = 0, _a = _this.products; _i < _a.length; _i++) {
                var p = _a[_i];
                var product = {};
                product.id = p.id;
                product.name = p.name;
                product.path_image = p.path_image;
                product.typeTransaction = {};
                product.typeTransaction.delivery = 0;
                product.typeTransaction.return = 0;
                product.typeTransaction.empty = 0;
                _this.productsToSend.push(product);
            }
            console.log(_this.productsToSend);
        });
    };
    DetalleLocalComponent.prototype.agregar = function () {
        this.viewingService.addViewing(this.pointOfSale.id, this.productsToSend, this.annotation).subscribe(function (response) {
            console.log(response);
        });
    };
    DetalleLocalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-detalle-local',
            template: __webpack_require__("../../../../../src/app/components/front/detalle-local/detalle-local.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/front/detalle-local/detalle-local.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_point_of_sale_service__["a" /* PointOfSaleService */],
            __WEBPACK_IMPORTED_MODULE_4__services_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_5__services_viewing_service__["a" /* ViewingService */]])
    ], DetalleLocalComponent);
    return DetalleLocalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/front/locales/locales.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n\tmax-width: 90px;\r\n\tmax-height: 60px;\r\n}\r\n\r\n.imageContainer {\r\n\tmargin: 5px;\r\n\ttext-align: center;\r\n}\r\n\r\n.lista-info {\r\n\tmargin-left: 5px;\r\n}\r\n\r\n.lista-title {\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n}\r\n\r\n.boxs-lista{\r\n    min-width: 220px;\r\n}\r\n\r\n@media (max-width: 299px) {   \r\n    .imageContainer {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.lista-info .lista-title label {\r\n\t\tfont-size: 11px;\r\n\t}\r\n\t.lista-info .lista-info-content label {\r\n\t\tdisplay: none;\r\n    }\r\n    \r\n    .boxs-lista{\r\n        margin-top: 3px;\r\n        margin-bottom: 3;\r\n        padding-bottom: 0px;\r\n    }\r\n}\r\n\r\n@media (min-width: 300px) and (max-width: 479px) {\r\n\t.imageContainer {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.lista-info .lista-title label {\r\n\t\tfont-size: 12px;\r\n\t}\r\n\t.lista-info .lista-info-content label {\r\n\t\tfont-size: 10px;\r\n\t}\r\n}\r\n\r\n@media (min-width: 480px) and (max-width:767px) {\r\n\t.lista-info .lista-title label {\r\n\t\tfont-size: 13px;\r\n\t}\r\n\t.lista-info .lista-info-content label {\r\n\t\tfont-size: 11px;\r\n\t}\r\n}\r\n\r\n/* Small devices (tablets, 768px and up) */\r\n\r\n@media (min-width: 768px) {\r\n\t.lista-info .lista-title label {\r\n\t\tfont-size: 14px;\r\n\t}\r\n\t.lista-info .lista-info-content label {\r\n\t\tfont-size: 12px;\r\n\t}\r\n}\r\n\r\n/* tablets/desktops and up ----------- */\r\n\r\n@media (min-width: 992px) {\r\n}\r\n\r\n/* large desktops and up ----------- */\r\n\r\n@media (min-width: 1200px) {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/locales/locales.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"buscador\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Buscar locales...\" (keyup)=\"filterPOS()\" [(ngModel)]=\"filter\">\r\n</div>\r\n<div class=\"flex flex-wrap d-flex justify-content-around content-center content-between boxs-container\">\r\n    <div class=\"boxs-lista border row inline-block\" *ngFor=\"let pos of pointsOfSale\" [routerLink]=\"['/detalle-local', pos.id]\">\r\n        <div class=\"imageContainer col-auto\">\r\n            <img *ngIf=\"pos.image !== '' && pos.image !== null\" style=\"width:50px;\" src=\"images/locales/{{pos.image}}\" />\r\n            <i *ngIf=\"pos.image === '' || pos.image === null\" class=\"fa fa-home\" style=\"font-size: 2.0em;\"></i>\r\n        </div>\r\n        <div class=\"lista-info col col-sm\">\r\n            <div class=\"lista-title\">\r\n                <label>{{pos.name}}</label>\r\n            </div>\r\n            <div class=\"lista-info-content\">\r\n                <label><b>Tel:</b> <a href=\"tel:{{pos.tel}}\">{{pos.tel}}</a> </label>\r\n                <label><b>Dirección:</b> {{pos.address}}</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/front/locales/locales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_point_of_sale_service__ = __webpack_require__("../../../../../src/app/services/point-of-sale.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalesComponent = /** @class */ (function () {
    function LocalesComponent(router, pointOFSaleService, productService) {
        this.router = router;
        this.pointOFSaleService = pointOFSaleService;
        this.productService = productService;
    }
    LocalesComponent.prototype.ngOnInit = function () {
        this.loadPointsOfSale();
    };
    LocalesComponent.prototype.loadPointsOfSale = function () {
        var _this = this;
        this.pointOFSaleService.get().subscribe(function (data) {
            if (data.result === -1) {
                _this.router.navigate(['']);
            }
            else {
                _this.pointsOfSale = data.data;
            }
        }, function (error) { });
    };
    LocalesComponent.prototype.filterPOS = function () {
        var _this = this;
        if (this.filter !== '') {
            this.pointOFSaleService.getFilteredByName(this.filter).subscribe(function (data) {
                if (data.result === -1) {
                    _this.router.navigate(['']);
                }
                else {
                    _this.pointsOfSale = data.data;
                }
            });
        }
        else {
            this.loadPointsOfSale();
        }
    };
    LocalesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-locales',
            template: __webpack_require__("../../../../../src/app/components/front/locales/locales.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/front/locales/locales.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_point_of_sale_service__["a" /* PointOfSaleService */],
            __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */]])
    ], LocalesComponent);
    return LocalesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/front/mapa/mapa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/mapa/mapa.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 style=\"margin:20px;\">\r\nEn construcción\r\n</h2>\r\n<!--\r\n  \r\n  \r\n  <html>\r\n\t<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\r\n  <link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" />\r\n\r\n  <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\r\n\r\n  <title>GoodVibes prototype - Home</title>\t\t\r\n  <link rel=\"stylesheet\" href=\"/css/style.css\" crossorigin=\"anonymous\">\r\n</head>\r\n<body>\r\n    <div class=\"slide-img cabezal\">\r\n      <a href=\"index.html\"><img src=\"images/app/good-vibes-logo.jpg\"></a>\r\n    </div>\t\r\n    <div class=\"flex flex-wrap d-flex justify-content-around content-center content-between boxs-container\">\r\n      <div class=\"boxs-productos border\" style=\"height: 110px;\">\r\n        <div class=\"productos-image2\">\r\n          <img src=\"images/lamandolina.jpg\">\r\n        </div>\r\n        <div class=\"productos-info\">\r\n          <div class=\"productos-title\">\r\n            <label>La mandolina</label>\r\n          </div>\t\t\t\t\t\t\r\n          <span class=\"fa fa-calendar-check-o\" style=\"font-size: 2em; color:#00aa00;\"  aria-hidden=\"true\"></span>\r\n          <span style=\"color:#00aa00;\">10:00Hs</span>\t\t<br/>\r\n          <i class=\"fa fa-arrow-up\" aria-hidden=\"true\" style=\"color:#00aa00;\"></i><span style=\"color:#00aa00;\"> 20</span>\r\n          <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" style=\"color:#aa0000;\"></i><span style=\"color:#aa0000;\"> 3</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"boxs-productos border\" style=\"height: 110px;\">\r\n        <div class=\"productos-image2\">\r\n          <img src=\"images/cayetana.png\">\r\n        </div>\r\n        <div class=\"productos-info\">\r\n          <div class=\"productos-title\">\r\n            <label>Gandhi</label>\r\n          </div>\r\n          <span class=\"fa fa-calendar-check-o\" style=\"font-size: 2em; color:#00aa00;\"  aria-hidden=\"true\"></span>\r\n          <span style=\"color:#00aa00;\">10:30Hs</span><br/>\r\n          <i class=\"fa fa-arrow-up\" aria-hidden=\"true\" style=\"color:#00aa00;\"></i><span style=\"color:#00aa00;\"> 20</span>\r\n          <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" style=\"color:#aa0000;\"></i><span style=\"color:#aa0000;\"> 2</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"boxs-productos border\" style=\"height: 110px;\">\r\n        <div class=\"productos-image2\">\r\n          <img src=\"images/koi.jpg\">\r\n        </div>\r\n        <div class=\"productos-info\">\r\n          <div class=\"productos-title\">\r\n            <label>Koi supermarket</label>\r\n          </div>\r\n          <span class=\"fa fa-calendar\" style=\"font-size: 2em;\" aria-hidden=\"true\"></span>\t\t\t\t\t\t\r\n          <span style=\"color:#00aa00;\">10:45Hs</span><br/>\r\n          <i class=\"fa fa-arrow-up\" aria-hidden=\"true\" style=\"color:#00aa00;\"></i><span style=\"color:#00aa00;\"> 20</span>\r\n          <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" style=\"color:#aa0000;\"></i><span style=\"color:#aa0000;\"> 2</span>\r\n        </div>\r\n      </div>\t\t\t\t\t\r\n    \r\n      \r\n      <div class=\"boxs-productos border\" style=\"height: 110px;\">\r\n        <div class=\"productos-image2\">\r\n          <img src=\"images/cayetana.png\">\r\n        </div>\r\n        <div class=\"productos-info\">\r\n          <div class=\"productos-title\">\r\n            <label>Cayetana Golf</label>\r\n          </div>\t\r\n          <span class=\"fa fa-calendar\" style=\"font-size: 2em;\" aria-hidden=\"true\"></span>\r\n          <span style=\"color:#00aa00;\">11:00Hs</span><br/>\r\n          <i class=\"fa fa-arrow-up\" aria-hidden=\"true\" style=\"color:#00aa00;\"></i><span style=\"color:#00aa00;\"> 25</span>\r\n          <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" style=\"color:#aa0000;\"></i><span style=\"color:#aa0000;\"> 4</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"boxs-productos border\" style=\"height: 110px;\">\r\n        <div class=\"productos-image2\">\r\n          <img src=\"images/portovanila.png\">\r\n        </div>\r\n        <div class=\"productos-info\">\r\n          <div class=\"productos-title\">\r\n            <label>Porto Vanila</label>\r\n          </div>\r\n          <a href=\"comgooglemaps://?daddr=-34.923443,-56.159779&directionsmode=driving\">\r\n            <span class=\"fa fa-map\" style=\"margin-left:5px;font-size: 1.5em;color:#555;\"></span>\r\n          </a>\t\t\t\t\t\t\t\r\n          <a href=\"detalle-local.html\">\r\n            <span class=\"fa fa-cart-arrow-down\" style=\"margin-left:5px;font-size: 1.8em;color:#555;\"></span>\r\n          </a>\t\t\t\t\t\t\t\r\n        </div>\r\n      </div>\r\n    </div>\r\n</body>\r\n</html>\r\n  \r\n-->"

/***/ }),

/***/ "../../../../../src/app/components/front/mapa/mapa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapaComponent = /** @class */ (function () {
    function MapaComponent() {
    }
    MapaComponent.prototype.ngOnInit = function () {
    };
    MapaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mapa',
            template: __webpack_require__("../../../../../src/app/components/front/mapa/mapa.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/front/mapa/mapa.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapaComponent);
    return MapaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/front/reportes/reportes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#chartdiv {\r\n    width: 100%;\r\n    height: 500px;\r\n}\r\n\r\n#chartdiv2 {\r\n    width: 100%;\r\n    height: 500px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/reportes/reportes.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\r\n<ul class=\"nav nav-tabs\" id=\"supplyTab\" role=\"tablist\">\r\n    <li class=\"nav-item\" *ngFor=\"let supply of supplies; index as i\">\r\n        <a class=\"nav-link active\" data-toggle=\"tab\" id=\"supply_{{i}}-tab\" *ngIf=\"i == 0\" href=\"#supply_{{i}}\" role=\"tab\" aria-selected=\"false\"\r\n            (click)=\"supplyHistory(supply.id)\">{{supply.name}}</a>\r\n        <a class=\"nav-link\" data-toggle=\"tab\" id=\"supply_{{i}}-tab\" *ngIf=\"i != 0\" href=\"#supply_{{i}}\" role=\"tab\" aria-selected=\"false\"\r\n            (click)=\"supplyHistory(supply.id)\">{{supply.name}}</a>\r\n    </li>\r\n</ul>\r\n<div class=\"tab-content\" id=\"supplyTabContent\">    \r\n    <div [ngClass]=\"(i == 0)?'tab-pane show active':'tab-pane'\" *ngFor=\"let supply of supplies; index as i\" id=\"supply_{{i}}\"\r\n        role=\"tabpanel\" aria-labelledby=\"home-tab\">        \r\n        <table class=\"table table-striped\">\r\n            <thead class=\"thead-dark\">\r\n                <tr>\r\n                    <th scope=\"col\">Fecha</th>\r\n                    <th scope=\"col\">Valor</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let s of suppliesPrice\">\r\n                    <td>{{s.date | date:'dd/MM/yyyy'}}</td>\r\n                    <td>{{s.amount}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div id=\"chartdiv\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/front/reportes/reportes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_kpi_service__ = __webpack_require__("../../../../../src/app/services/kpi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_supply_service__ = __webpack_require__("../../../../../src/app/services/supply.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportesComponent = /** @class */ (function () {
    function ReportesComponent(router, kpiService, supplyService, AmCharts) {
        this.router = router;
        this.kpiService = kpiService;
        this.supplyService = supplyService;
        this.AmCharts = AmCharts;
    }
    ReportesComponent.prototype.suppliesPrices = function (id) {
        var _this = this;
        this.kpiService.get(id).subscribe(function (response) {
            _this.suppliesPrice = response.data;
            var chartData = [];
            for (var i = 0; i < _this.suppliesPrice.length; i++) {
                var newDate = new Date(_this.suppliesPrice[i].date);
                chartData.push({
                    date: newDate,
                    visits: _this.suppliesPrice[i].amount
                });
            }
            _this.chart = _this.AmCharts.makeChart("chartdiv", {
                "theme": "light",
                "type": "serial",
                "dataProvider": chartData,
                "valueAxes": [{
                        "inside": true,
                        "axisAlpha": 0
                    }],
                "graphs": [{
                        "id": "g1",
                        "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>",
                        "bullet": "round",
                        "bulletBorderAlpha": 1,
                        "bulletBorderColor": "#FFFFFF",
                        "hideBulletsCount": 50,
                        "lineThickness": 2,
                        "lineColor": "#fdd400",
                        "negativeLineColor": "#67b7dc",
                        "valueField": "visits"
                    }],
                "chartScrollbar": {},
                "chartCursor": {},
                "categoryField": "date",
                "categoryAxis": {
                    "parseDates": true,
                    "axisAlpha": 0,
                    "minHorizontalGap": 55
                }
            });
        });
    };
    ReportesComponent.prototype.supplyHistory = function (id) {
        var _this = this;
        this.kpiService.get(id).subscribe(function (response) {
            _this.suppliesPrice = response.data;
        });
        this.suppliesPrices(id);
    };
    ReportesComponent.prototype.ngAfterViewInit = function () {
        /*
        this.suppliesById = new Map<number, any>();
        this.suppliesPrices();
        */
    };
    ReportesComponent.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.AmCharts.destroyChart(this.chart);
        }
    };
    ReportesComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*
        
                var chart = AmCharts.makeChart("chartdiv",
                    {
                        "type": "serial",
                        "theme": "light",
                        "dataProvider": [{
                            "name": "Green Life",
                            "points": 35654,
                            "color": "#A9BE3F",
                            "bullet": "images/greenLife.png"
                        }, {
                            "name": "Citra Trip",
                            "points": 65456,
                            "color": "#FCB100",
                            "bullet": "images/citraTrip.png"
                        }, {
                            "name": "Citra Trip",
                            "points": 45724,
                            "color": "#F8FF32",
                            "bullet": "images/citraTrip.png"
                        }, {
                            "name": "Sun Kiss",
                            "points": 13654,
                            "color": "#6E2539",
                            "bullet": "images/sunKiss.png"
                        }],
                        "valueAxes": [{
                            "maximum": 80000,
                            "minimum": 0,
                            "axisAlpha": 0,
                            "dashLength": 4,
                            "position": "left"
                        }],
                        "startDuration": 1,
                        "graphs": [{
                            "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
                            "bulletOffset": 10,
                            "bulletSize": 52,
                            "colorField": "color",
                            "cornerRadiusTop": 8,
                            "customBulletField": "bullet",
                            "fillAlphas": 0.8,
                            "lineAlpha": 0,
                            "type": "column",
                            "valueField": "points"
                        }],
                        "marginTop": 0,
                        "marginRight": 0,
                        "marginLeft": 0,
                        "marginBottom": 0,
                        "autoMargins": false,
                        "categoryField": "name",
                        "categoryAxis": {
                            "axisAlpha": 0,
                            "gridAlpha": 0,
                            "inside": true,
                            "tickLength": 0
                        },
                        "export": {
                            "enabled": true
                        }
                    });
        
                
                var chartData2 = {
                    "1997": [
                        { "sector": "Green Life", "size": 6.1 },
                        { "sector": "Citra Trip", "size": 20.9 },
                        { "sector": "Paradise Dream", "size": 1.8 },
                        { "sector": "Yellow Rolling", "size": 4.2 }],
                    "1998": [
                        { "sector": "Green Life", "size": 6.2 },
                        { "sector": "Citra Trip", "size": 21.4 },
                        { "sector": "Paradise Dream", "size": 1.9 },
                        { "sector": "Yellow Rolling", "size": 4.2 }],
                    "1999": [
                        { "sector": "Green Life", "size": 5.7 },
                        { "sector": "Citra Trip", "size": 20 },
                        { "sector": "Paradise Dream", "size": 1.8 },
                        { "sector": "Yellow Rolling", "size": 4.4 }]
                };
        
                var texto = {
                    "1997": "Febrero",
                    "1998": "Marzo",
                    "1999": "Abril"
                }
        
        
        
        */
        /*
                this.supplyService.get().subscribe(
                    data => {
                        console.log(data, "**");
                    }
                )
        */
        this.supplyService.getAll().subscribe(function (data) {
            _this.supplies = data;
            console.log(data[0]);
            _this.supplyHistory(data[0].id);
        });
        /*
            
        
              var currentYear = 1997;
              var chart2 = AmCharts.makeChart("chartdiv2", {
                "type": "pie",
                "theme": "light",
                "labelText": "[[percents]]%",
                "dataProvider": [],
                "valueField": "size",
                "titleField": "sector",
                "startDuration": 0,
                "innerRadius": 60,
                "legend": {
                  "position": "bottom"
                },
                "titles": [{
                  "text": "Venta de productos"
                }],
                "allLabels": [{
                  "y": "50%",
                  "align": "center",
                  "size": 20,
                  "bold": true,
                  "text": "1995",
                  "color": "#555"
                },
                {
                  "y": "55%",
                  "align": "center",
                  "size": 20,
                  "bold": true,
                  "text": "2018",
                  "color": "#555"
                }],
                "listeners": [{
                  "event": "init",
                  "method": function (e) {
                    var chart = e.chart;
                    function getCurrentData() {
                      var data = chartData2[currentYear];
                      currentYear++;
                      if (currentYear > 1999)
                        currentYear = 1997;
                      return data;
                    }
            
                    function loop() {
                      //chart.allLabels[0].text = currentYear;
                      chart.allLabels[0].text = texto[currentYear];
                      var data = getCurrentData();
                      chart.animateData(data, {
                        duration: 1000,
                        complete: function () {
                          setTimeout(loop, 2000);
                        }
                      });
                    }
                    loop();
                  }
                }],
                "export": {
                  "enabled": true
                }
              });
        */
    };
    ReportesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reportes',
            template: __webpack_require__("../../../../../src/app/components/front/reportes/reportes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/front/reportes/reportes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_kpi_service__["a" /* KpiService */],
            __WEBPACK_IMPORTED_MODULE_3__services_supply_service__["a" /* SupplyService */],
            __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__["b" /* AmChartsService */]])
    ], ReportesComponent);
    return ReportesComponent;
}());

/*
@Component({
  template: `<div id="chartdiv" [style.width.%]="100" [style.height.px]="500"></div>`
})
export class AppComponent {

}
*/ 


/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slide-img cabezal\">\r\n  <a href=\"index.html\"><img src=\"/images/app/good-vibes-logo.jpg\"></a>\r\n</div>\r\n\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\"  *ngIf=\"visible\">\r\n  <a class=\"navbar-brand\" href=\"#\">{{getName()}}</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\r\n    aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/locales\">Locales</a>\r\n      </li>\r\n      <!--\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" routerLink=\"/reportes\">Reportes</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" routerLink=\"/mapa\">Mapas</a>\r\n      </li>\r\n    -->\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Admin\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink=\"/admin/insumos\">Insumos</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/admin/productos\">Productos</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" routerLink=\"/admin/puntos-de-venta\">Puntos de venta</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" routerLink=\"/plantilla-recorridos\">Plantilla de recorridos</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/recorridos\">Recorridos</a>\r\n        </div>\r\n      </li>\r\n      <!--\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" routerLink=\"/configs\">Configuraciones</a>\r\n      </li>\r\n    -->\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"  (click)=\"closeSession()\">Cerrar sesión</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_header_service__ = __webpack_require__("../../../../../src/app/services/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_token_service__ = __webpack_require__("../../../../../src/app/services/token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, location, authenticateService, headerService, tokenService) {
        this.router = router;
        this.location = location;
        this.authenticateService = authenticateService;
        this.headerService = headerService;
        this.tokenService = tokenService;
        this.visible = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerService.currentVisibility.subscribe(function (visibility) { return (_this.visible = visibility); });
        this.authenticateService.verifyToken().subscribe(function (data) {
            _this.visible = data.result;
        });
    };
    HeaderComponent.prototype.closeSession = function () {
        var _this = this;
        this.authenticateService.closeSession().subscribe(function (data) {
            _this.visible = data.result;
            _this.tokenService.removeToken();
            _this.router.navigate(['']);
        });
    };
    HeaderComponent.prototype.getName = function () {
        var name = this.location.path() == ''
            ? 'Home'
            : this.location
                .path()
                .replace('/', '')[0]
                .toUpperCase() +
                this.location
                    .path()
                    .replace('/', '')
                    .substr(1);
        return name.indexOf('/') > 0 ? name.substring(0, name.indexOf('/')) : name;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2__services_authenticate_service__["a" /* AuthenticateService */],
            __WEBPACK_IMPORTED_MODULE_4__services_header_service__["a" /* HeaderService */],
            __WEBPACK_IMPORTED_MODULE_5__services_token_service__["a" /* TokenService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\r\n\r\n.error{\r\n    color: #EF3B3A;\r\n}\r\n\r\n.errorMessage{\r\n    color: #EF3B3A;\r\n    font-weight: bold;\r\n    margin: 20px;\r\n}\r\n\r\n.login-page {\r\n  width: 360px;\r\n  padding: 8% 0 0;\r\n  margin: auto;\r\n}\r\n\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 360px;\r\n  margin: 0 auto 100px;\r\n  padding: 45px;\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.form input {\r\n  font-family: \"Roboto\", sans-serif;\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n\r\n.form button {\r\n  font-family: \"Roboto\", sans-serif;\r\n  text-transform: uppercase;\r\n  outline: 0;\r\n  background: #4CAF50;\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  -webkit-transition: all 0.3 ease;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.form button:hover,.form button:active,.form button:focus {\r\n  background: #43A047;\r\n}\r\n\r\n.form .message {\r\n  margin: 15px 0 0;\r\n  color: #b3b3b3;\r\n  font-size: 12px;\r\n}\r\n\r\n.form .message a {\r\n  color: #4CAF50;\r\n  text-decoration: none;\r\n}\r\n\r\n.form .register-form {\r\n  display: none;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  z-index: 1;\r\n  max-width: 300px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container:before, .container:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\r\n\r\n.container .info {\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n\r\n.container .info h1 {\r\n  margin: 0 0 15px;\r\n  padding: 0;\r\n  font-size: 36px;\r\n  font-weight: 300;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.container .info span {\r\n  color: #4d4d4d;\r\n  font-size: 12px;\r\n}\r\n\r\n.container .info span a {\r\n  color: #000000;\r\n  text-decoration: none;\r\n}\r\n\r\n.container .info span .fa {\r\n  color: #EF3B3A;\r\n}\r\n\r\nbody {\r\n  background: #76b852; /* fallback for old browsers */\r\n  background: -webkit-gradient(linear, right top, left top, from(#76b852), to(#8DC26F));\r\n  background: linear-gradient(to left, #76b852, #8DC26F);\r\n  font-family: \"Roboto\", sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;      \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\r\n  <div class=\"form\">\r\n    <form novalidate [formGroup]=\"loginform\" class=\"login-form\">\r\n        <div class=\"errorMessage\" *ngIf=\"errorForm\">\r\n            Usuario o contraseña incorrecta        \r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Usuario\" class=\"form-control\" formControlName=\"username\">\r\n            <div class=\"form-control-feedback\" *ngIf=\"username.errors && (username.dirty || username.touched)\">\r\n                <p *ngIf=\"username.errors.required\" class=\"error\">Usuario requerido</p>                \r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"password\" placeholder=\"password\" class=\"form-control\" formControlName=\"password\">\r\n            <div class=\"form-control-feedback\" *ngIf=\"password.errors && (password.dirty || password.touched)\">\r\n                <p *ngIf=\"password.errors.required\" class=\"error\">Contraseña requerida</p>                \r\n            </div>\r\n        </div>\r\n        <button (click)=\"login()\">login</button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_token_service__ = __webpack_require__("../../../../../src/app/services/token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authenticateService, tokenService) {
        this.router = router;
        this.authenticateService = authenticateService;
        this.tokenService = tokenService;
        this.errorForm = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createFormControls();
        this.createForm();
        this.authenticateService.verifyToken().subscribe(function (data) {
            if (data.result) {
                _this.router.navigate(['dashboard']);
            }
        });
    };
    LoginComponent.prototype.createFormControls = function () {
        this.username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
    };
    LoginComponent.prototype.createForm = function () {
        this.loginform = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            username: this.username,
            password: this.password
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticateService.login(this.username.value, this.password.value).subscribe(function (data) {
            console.log(data.result);
            if (data.result) {
                _this.tokenService.setToken(data.tokenId, data.user, data.accountId);
                if (data.rolId === 1) {
                    _this.router.navigate(['dashboard']);
                }
                else {
                    _this.router.navigate(['recorridos']);
                }
            }
            else {
                _this.errorForm = true;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_authenticate_service__["a" /* AuthenticateService */],
            __WEBPACK_IMPORTED_MODULE_4__services_token_service__["a" /* TokenService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\">\r\n     {{alert.message}}\r\n     <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_model__ = __webpack_require__("../../../../../src/app/modules/alert/alert.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_service__ = __webpack_require__("../../../../../src/app/modules/alert/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                // clear alerts when an empty alert is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case __WEBPACK_IMPORTED_MODULE_1__alert_model__["a" /* AlertType */].Success:
                return 'alert alert-success';
            case __WEBPACK_IMPORTED_MODULE_1__alert_model__["a" /* AlertType */].Error:
                return 'alert alert-danger';
            case __WEBPACK_IMPORTED_MODULE_1__alert_model__["a" /* AlertType */].Info:
                return 'alert alert-info';
            case __WEBPACK_IMPORTED_MODULE_1__alert_model__["a" /* AlertType */].Warning:
                return 'alert alert-warning';
        }
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'alert',
            template: __webpack_require__("../../../../../src/app/modules/alert/alert.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/alert/alert.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Alert */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertType; });
var Alert = /** @class */ (function () {
    function Alert() {
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "../../../../../src/app/modules/alert/alert.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_service__ = __webpack_require__("../../../../../src/app/modules/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_component__ = __webpack_require__("../../../../../src/app/modules/alert/alert.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    AlertModule_1 = AlertModule;
    AlertModule.forRoot = function () {
        return {
            ngModule: AlertModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_2__alert_service__["a" /* AlertService */]]
        };
    };
    AlertModule = AlertModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__alert_component__["a" /* AlertComponent */]],
            providers: [],
            exports: [__WEBPACK_IMPORTED_MODULE_3__alert_component__["a" /* AlertComponent */]]
        })
    ], AlertModule);
    return AlertModule;
    var AlertModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/modules/alert/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_model__ = __webpack_require__("../../../../../src/app/modules/alert/alert.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__alert_model__["a" /* AlertType */].Success, message, keepAfterRouteChange);
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__alert_model__["a" /* AlertType */].Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__alert_model__["a" /* AlertType */].Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__alert_model__["a" /* AlertType */].Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    };
    AlertService.prototype.clear = function () {
        // clear alerts
        this.subject.next();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/services/authenticate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__token_service__ = __webpack_require__("../../../../../src/app/services/token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticateService = /** @class */ (function () {
    function AuthenticateService(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.AUTHENTICATE_URL = '/api/authenticate';
    }
    AuthenticateService.prototype.login = function (user, pass) {
        return this.http.post(this.AUTHENTICATE_URL + '/login', { user: user, pass: pass });
    };
    AuthenticateService.prototype.verifyToken = function () {
        return this.http.get(this.AUTHENTICATE_URL + '/verifyToken');
    };
    AuthenticateService.prototype.closeSession = function () {
        return this.http.get(this.AUTHENTICATE_URL + '/closeSession');
    };
    AuthenticateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__token_service__["a" /* TokenService */]])
    ], AuthenticateService);
    return AuthenticateService;
}());



/***/ }),

/***/ "../../../../../src/app/services/header.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderService = /** @class */ (function () {
    function HeaderService() {
        this.visibility = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.currentVisibility = this.visibility.asObservable();
    }
    HeaderService.prototype.setVisibility = function (visibility) {
        this.visibility.next(visibility);
    };
    HeaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "../../../../../src/app/services/images.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// input.service


//import { Headers, Http, RequestOptions } from '@angular/common/http';
var ImagesService = /** @class */ (function () {
    function ImagesService(http) {
        this.http = http;
        this.imagesUrl = '/api/images';
    }
    ImagesService.prototype.getSmallImage = function (imagePath) {
        return imagePath;
        // var dotIndex = imagePath.indexOf('.');
        // return imagePath.substr(0, dotIndex) + '_small' + imagePath.substr(dotIndex);
    };
    /*.pipe(
                map(r => (<any>r).data )
            )
            
             this.inp ut Service.getUnits()
      .subscribe(data => {
      });*/
    ImagesService.prototype.sendImage = function (category, fileName, fileSize, fileData) {
        return this.http.post(this.imagesUrl, {
            cat: category,
            name: fileName,
            size: fileSize,
            data: fileData
        });
    };
    ImagesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ImagesService);
    return ImagesService;
}());



/***/ }),

/***/ "../../../../../src/app/services/kpi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KpiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KpiService = /** @class */ (function () {
    function KpiService(http) {
        this.http = http;
        this.kpisUrl = '/api/kpis';
        this.pointOfSaleUrl = '/api/pointOfSail';
    }
    KpiService.prototype.get = function (idSupply) {
        return this.http.get(this.kpisUrl + "/suppliesPrices/" + idSupply);
    };
    KpiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], KpiService);
    return KpiService;
}());



/***/ }),

/***/ "../../../../../src/app/services/point-of-sale.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointOfSaleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PointOfSaleService = /** @class */ (function () {
    function PointOfSaleService(http) {
        this.http = http;
        this.pointOfSaleURL = '/api/pointOfSail';
    }
    PointOfSaleService.prototype.get = function () {
        return this.http.get(this.pointOfSaleURL);
    };
    PointOfSaleService.prototype.getFilteredByName = function (filterName) {
        return this.http.get(this.pointOfSaleURL + '/getFilteredByName/' + filterName);
    };
    PointOfSaleService.prototype.getPointOfSale = function (idPointOfSale) {
        return this.http.get(this.pointOfSaleURL + '/getPointOfSale/' + idPointOfSale);
    };
    PointOfSaleService.prototype.addPointOfSale = function (name, businessName, contactName, RUT, group, address, tel, image, coords) {
        return this.http.post(this.pointOfSaleURL, { name: name, businessName: businessName, contactName: contactName, RUT: RUT, group: group, address: address, tel: tel, image: image, coords: coords });
    };
    PointOfSaleService.prototype.updatePointOfSale = function (idPointOfSale, name, businessName, contactName, RUT, address, tel, image, coord) {
        return this.http.put(this.pointOfSaleURL, { id: idPointOfSale, name: name, businessName: businessName, contactName: contactName, RUT: RUT, address: address, tel: tel, coord: coord, image: image });
    };
    PointOfSaleService.prototype.deletePointOfSale = function (idPointOfSale) {
        return this.http.delete(this.pointOfSaleURL + '/' + idPointOfSale);
    };
    PointOfSaleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PointOfSaleService);
    return PointOfSaleService;
}());



/***/ }),

/***/ "../../../../../src/app/services/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Product.service



var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        this.PRODUCTS_URL = '/api/products';
    }
    ProductsService.prototype.get = function (id) {
        return this.http.get(this.PRODUCTS_URL + '/' + id);
    };
    ProductsService.prototype.getAll = function () {
        return this.http.get(this.PRODUCTS_URL);
    };
    ProductsService.prototype.update = function (product) {
        return this.http.put(this.PRODUCTS_URL + '/' + product.id, product);
    };
    ProductsService.prototype.agregar = function (Product) {
        return this.http.post(this.PRODUCTS_URL, Product);
    };
    ProductsService.prototype.delete = function (id) {
        return this.http.delete(this.PRODUCTS_URL + '/' + id);
    };
    ProductsService.prototype.deleteSupply = function (idProduct, idSupply) {
        return this.http.delete(this.PRODUCTS_URL + '/' + idProduct + '/supplies/' + idSupply);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ProductsService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    ProductsService.prototype.log = function (message) {
        //this.messageService.add('HeroService: ' + message);
        console.log('log: ' + message);
    };
    ProductsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/route.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteService = /** @class */ (function () {
    function RouteService(http) {
        this.http = http;
        this.routeUrl = '/api/route';
        this.pointOfSaleUrl = '/api/pointOfSail';
    }
    RouteService.prototype.get = function () {
        return this.http.get(this.routeUrl);
    };
    RouteService.prototype.agregar = function (route) {
        return this.http.post(this.routeUrl, { idroute: route.idroute, name: route.name });
    };
    RouteService.prototype.update = function (route) {
        return this.http.put(this.routeUrl, route);
    };
    RouteService.prototype.reorderPointOfSale = function (idRoute, idPointOfSale, position, newPosition) {
        return this.http.put(this.routeUrl + '/reorderPointOfSale', {
            idRoute: idRoute,
            idPointOfSale: idPointOfSale,
            position: position,
            newPosition: newPosition
        });
    };
    RouteService.prototype.getPointsOfSales = function () {
        return this.http.get(this.pointOfSaleUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (r) { return r.data; }));
    };
    RouteService.prototype.getUsersRoute = function (idRoute) {
        return this.http.get(this.routeUrl + '/users/' + idRoute).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (r) { return r.data; }));
    };
    RouteService.prototype.getPointsOfSalesRoute = function (idRoute) {
        return this.http.get(this.routeUrl + '/pointofsales/' + idRoute).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (r) { return r.data; }));
    };
    RouteService.prototype.addPointOfSale = function (rPOS) {
        return this.http.post(this.routeUrl + '/addPointOfSale', {
            idRoute: rPOS.idRoute,
            idPointOfSale: rPOS.idPointOfSale
        });
    };
    RouteService.prototype.addUser = function (rUser) {
        return this.http.post(this.routeUrl + '/addUser', {
            idRoute: rUser.idRoute,
            idUser: rUser.idUser,
            date: rUser.date
        });
    };
    RouteService.prototype.remove = function (idRoute, idPointOfSale) {
        return this.http.delete(this.routeUrl + '/removePointOfSale/' + idRoute + '/' + idPointOfSale);
    };
    RouteService.prototype.removeUser = function (idRoute, idUser) {
        return this.http.delete(this.routeUrl + '/removeUser/' + idRoute + '/' + idUser);
    };
    RouteService.prototype.delete = function (id) {
        return this.http.delete(this.routeUrl + '/' + id);
    };
    RouteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], RouteService);
    return RouteService;
}());



/***/ }),

/***/ "../../../../../src/app/services/supply.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// input.service





var SupplyService = /** @class */ (function () {
    function SupplyService(http) {
        this.http = http;
        this.suppliesUrl = '/api/supplies';
        this.unitsUrl = '/api/units';
        this.headers = { 'Content-Type': 'application/json; charset=utf-8' };
    }
    SupplyService.prototype.get = function () {
        return this.http.get(this.suppliesUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (r) { return r.data; }));
    };
    SupplyService.prototype.getAll = function () {
        return this.http.get(this.suppliesUrl + "/getAll").pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (r) { return r.data; }));
    };
    SupplyService.prototype.getLatestPrices = function () {
        return this.get().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (r) { return __WEBPACK_IMPORTED_MODULE_4_lodash__["chain"](r)
            .groupBy(function (s) { return s.id; })
            .map(function (g) {
            return __WEBPACK_IMPORTED_MODULE_4_lodash__["chain"](g)
                .sortBy(function (s) { return s.date; })
                .last()
                .value();
        })
            .sortBy(function (m) { return m.name.toLowerCase(); })
            .value(); }));
    };
    SupplyService.prototype.getUnits = function () {
        return this.http.get(this.unitsUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (r) { return r.data; }));
    };
    SupplyService.prototype.agregar = function (supply) {
        return this.http.post(this.suppliesUrl, supply);
    };
    SupplyService.prototype.update = function (supply) {
        return this.http.put(this.suppliesUrl + '/' + supply.id, supply);
    };
    SupplyService.prototype.delete = function (id) {
        return this.http.delete(this.suppliesUrl + '/' + id);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    SupplyService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    SupplyService.prototype.log = function (message) {
        //this.messageService.add('HeroService: ' + message);
        console.log('log: ' + message);
    };
    SupplyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SupplyService);
    return SupplyService;
}());

/*var app = angular.module('googApp', []);

var map = {};
var controllerBack = "riesgoNuevo";

app.controller('pointOfSailController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {

        $http({
            method: 'GET',
            url: "http://localhost:3000/unity",
            data: JSON.stringify({"a":"b"}),
            headers: { "Content-Type": "application/json; charset=utf-8" }
        }).then(function(response) {
            $scope.units = response.data.data;
            console.log($scope.units);
        });



        $http({
            method: 'GET',
            url: "http://localhost:3000/inputs",
            data: JSON.stringify({"a":"b"}),
            headers: { "Content-Type": "application/json; charset=utf-8" }
        }).then(function(response) {
            $scope.inputs = response.data.data;
        });
        
        $scope.newInput = function(){
            $http({
                method: 'POST',
                url: "http://localhost:3000/inputs",
                data: JSON.stringify({name:$scope.name,unity:$scope.unity,price:$scope.price}),
                headers: { "Content-Type": "application/json; charset=utf-8" }
            }).then(function(response) {
                console.log(response);
                $http({
                    method: 'GET',
                    url: "http://localhost:3000/inputs",
                    data: JSON.stringify({"a":"b"}),
                    headers: { "Content-Type": "application/json; charset=utf-8" }
                }).then(function(response) {
                    $scope.inputs = response.data.data;
                });
            });
        };

        $scope.editInput = function(){
            $http({
                method: 'PUT',
                url: "http://localhost:3000/inputs",
                data: JSON.stringify({name:$scope.nameUpdate,unity:$scope.unityUpdate,price:$scope.priceUpdate,id:$scope.idUpdate}),
                headers: { "Content-Type": "application/json; charset=utf-8" }
            }).then(function(response) {
                console.log(response);
            });
        };
        

        $scope.update = function(id,name,unity,amount){
            $scope.idUpdate =id;
            $scope.nameUpdate = name;
            $scope.unityUpdate = unity;
            $scope.priceUpdate = amount;
        };

        $scope.editPointOfSale = function(){
            $http({
                method: 'PUT',
                url: "http://localhost:3000/unity",
                data: JSON.stringify({id:$scope.idUpdate,name:$scope.nameUpdate,
                                    address:$scope.addressUpdate,tel:$scope.telUpdate}),
                headers: { "Content-Type": "application/json; charset=utf-8" }
            }).then(function(response) {
                console.log(response);
            });
        };
      
        $scope.delete = function(id){
            $http({
                method: 'DELETE',
                url: "http://localhost:3000/inputs",
                data: JSON.stringify({id:id}),
                headers: { "Content-Type": "application/json; charset=utf-8" }
            }).then(function(response) {
                console.log(response);
            });
        }

}]);
*/


/***/ }),

/***/ "../../../../../src/app/services/templates-routes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesRoutesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TemplatesRoutesService = /** @class */ (function () {
    function TemplatesRoutesService(http) {
        this.http = http;
        this.routeUrl = '/api/templateRoute';
        this.pointOfSaleUrl = '/api/pointOfSail';
    }
    TemplatesRoutesService.prototype.getAll = function () {
        return this.http.get(this.routeUrl);
    };
    TemplatesRoutesService.prototype.add = function (name) {
        return this.http.post(this.routeUrl, { name: name });
    };
    TemplatesRoutesService.prototype.delete = function (id) {
        return this.http.delete(this.routeUrl + '/' + id);
    };
    /*
    agregar(route: Route): Observable<any> {
        return this.http.post(this.routeUrl, { idroute: route.idroute, name: route.name });
    }

    update(route: Route): Observable<any> {
        return this.http.put<Route[]>(this.routeUrl, route);
    }
    */
    TemplatesRoutesService.prototype.reorderPointOfSale = function (idRoute, idPointOfSale, position, newPosition) {
        return this.http.put(this.routeUrl + '/reorderPointOfSale', {
            idRoute: idRoute,
            idPointOfSale: idPointOfSale,
            position: position,
            newPosition: newPosition
        });
    };
    TemplatesRoutesService.prototype.getPointsOfSales = function () {
        return this.http.get(this.pointOfSaleUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (r) { return r.data; }));
    };
    TemplatesRoutesService.prototype.getPointsOfSalesRoute = function (idRoute) {
        return this.http.get(this.routeUrl + '/pointofsales/' + idRoute).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (r) { return r.data; }));
    };
    TemplatesRoutesService.prototype.addPointOfSale = function (idTemplateRoute, idPointOfSale) {
        return this.http.post(this.routeUrl + '/addPointOfSale', {
            idTemplateRoute: idTemplateRoute,
            idPointOfSale: idPointOfSale
        });
    };
    TemplatesRoutesService.prototype.remove = function (idRoute, idPointOfSale) {
        return this.http.delete(this.routeUrl + '/removePointOfSale/' + idRoute + '/' + idPointOfSale);
    };
    TemplatesRoutesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], TemplatesRoutesService);
    return TemplatesRoutesService;
}());



/***/ }),

/***/ "../../../../../src/app/services/token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenService = /** @class */ (function () {
    function TokenService() {
    }
    TokenService.prototype.setToken = function (tokenId, user, accountId) {
        localStorage.setItem('token', tokenId);
        localStorage.setItem('user', user);
        localStorage.setItem('accountId', accountId);
    };
    TokenService.prototype.removeToken = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('accountId');
    };
    TokenService.prototype.generateHeaderToken = function () {
        var token = localStorage.getItem('token');
        var userSaved = localStorage.getItem('user');
        var accountId = Number(localStorage.getItem('accountId'));
        return this.generateHeaderTokenFromValues(token, userSaved, accountId);
    };
    TokenService.prototype.generateHeaderTokenFromValues = function (token, userSaved, accountId) {
        var headers = null;
        if (!!token && !!userSaved && !!accountId) {
            headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
                tokenId: token,
                user: userSaved,
                accountId: accountId.toString()
            });
        }
        return headers;
    };
    TokenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.userUrl = '/api/users/';
    }
    UsersService.prototype.get = function () {
        return this.http.get(this.userUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (r) { return r.data; }));
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "../../../../../src/app/services/viewing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewingService = /** @class */ (function () {
    function ViewingService(http) {
        this.http = http;
        this.viewingsURL = '/api/viewings';
    }
    ViewingService.prototype.addViewing = function (idPointOfSale, data, annotation) {
        return this.http.post(this.viewingsURL, { idPointOfSale: idPointOfSale, data: data, annotation: annotation });
    };
    ViewingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ViewingService);
    return ViewingService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/file-picker/file-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <label for=\"files\" class=\"btn\">{{text}}</label>\r\n    <input id=\"files\" style=\"visibility:hidden;\" type=\"file\" (change)=\"onChange($event)\">\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/file-picker/file-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilePicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilePicker = /** @class */ (function () {
    function FilePicker() {
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.text = "Seleccionar imagen";
    }
    FilePicker.prototype.onChange = function (event) {
        var _this = this;
        var files = event.srcElement.files;
        if (files && files.length > 0) {
            var file = files[0];
            var reader = new FileReader();
            reader.onload = function (readerEvt) {
                var binaryString = readerEvt.target.result;
                var filestring = btoa(binaryString);
                _this.selected.emit({
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    data: filestring
                });
            };
            reader.readAsBinaryString(file);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], FilePicker.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], FilePicker.prototype, "selected", void 0);
    FilePicker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'file-picker',
            template: __webpack_require__("../../../../../src/app/shared/components/file-picker/file-picker.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FilePicker);
    return FilePicker;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map