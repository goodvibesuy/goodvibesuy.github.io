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
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
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

module.exports = "\n<app-header></app-header>\n\n<router-outlet></router-outlet>\n"

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

//import { DashboardComponent } from './components/dashboard/dashboard.component';
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_front_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/front/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_front_locales_locales_component__ = __webpack_require__("../../../../../src/app/components/front/locales/locales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_front_reportes_reportes_component__ = __webpack_require__("../../../../../src/app/components/front/reportes/reportes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_adm_supply_supply_component__ = __webpack_require__("../../../../../src/app/components/adm/supply/supply.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_adm_supply_list_supply_list_component__ = __webpack_require__("../../../../../src/app/components/adm/supply/list/supply.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_adm_supply_edit_supply_edit_component__ = __webpack_require__("../../../../../src/app/components/adm/supply/edit/supply.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_adm_supply_add_supply_add_component__ = __webpack_require__("../../../../../src/app/components/adm/supply/add/supply.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_adm_products_products_component__ = __webpack_require__("../../../../../src/app/components/adm/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_adm_products_list_products_list_component__ = __webpack_require__("../../../../../src/app/components/adm/products/list/products.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_adm_products_edit_product_edit_component__ = __webpack_require__("../../../../../src/app/components/adm/products/edit/product.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_adm_products_add_product_add_component__ = __webpack_require__("../../../../../src/app/components/adm/products/add/product.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_front_mapa_mapa_component__ = __webpack_require__("../../../../../src/app/components/front/mapa/mapa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_front_detalle_local_detalle_local_component__ = __webpack_require__("../../../../../src/app/components/front/detalle-local/detalle-local.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_configs_configs_component__ = __webpack_require__("../../../../../src/app/components/configs/configs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_adm_routes_routes_component__ = __webpack_require__("../../../../../src/app/components/adm/routes/routes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_adm_routes_list_list_component__ = __webpack_require__("../../../../../src/app/components/adm/routes/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_adm_routes_route_add_route_add_component__ = __webpack_require__("../../../../../src/app/components/adm/routes/route.add/route.add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_adm_routes_route_edit_route_edit_component__ = __webpack_require__("../../../../../src/app/components/adm/routes/route.edit/route.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_supply_service__ = __webpack_require__("../../../../../src/app/services/supply.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_token_service__ = __webpack_require__("../../../../../src/app/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_images_service__ = __webpack_require__("../../../../../src/app/services/images.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_components_file_picker_file_picker_component__ = __webpack_require__("../../../../../src/app/shared/components/file-picker/file-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_authenticate_service__ = __webpack_require__("../../../../../src/app/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_point_of_sale_service__ = __webpack_require__("../../../../../src/app/services/point-of-sale.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_viewing_service__ = __webpack_require__("../../../../../src/app/services/viewing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_adm_pos_pos_component__ = __webpack_require__("../../../../../src/app/components/adm/pos/pos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_header_service__ = __webpack_require__("../../../../../src/app/services/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__auth_token_interceptor__ = __webpack_require__("../../../../../src/app/auth/token.interceptor.ts");
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





// app routing 

// services







// shared







// models
//import { GVFile } from './shared/models/gvfile.model';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_front_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_adm_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_adm_products_list_products_list_component__["a" /* ProductsListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_adm_products_edit_product_edit_component__["a" /* ProductEditComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_adm_products_add_product_add_component__["a" /* ProductAddComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_front_locales_locales_component__["a" /* LocalesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_front_reportes_reportes_component__["a" /* ReportesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_adm_supply_supply_component__["a" /* SupplyComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_adm_supply_list_supply_list_component__["a" /* SupplyListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_adm_supply_edit_supply_edit_component__["a" /* SupplyEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_adm_supply_add_supply_add_component__["a" /* SupplyAddComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_front_mapa_mapa_component__["a" /* MapaComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_front_detalle_local_detalle_local_component__["a" /* DetalleLocalComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_configs_configs_component__["a" /* ConfigsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_adm_routes_routes_component__["a" /* RoutesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_adm_routes_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_adm_routes_route_add_route_add_component__["a" /* RouteAdd */],
                __WEBPACK_IMPORTED_MODULE_23__components_adm_routes_route_edit_route_edit_component__["a" /* RouteEdit */],
                // shared		
                __WEBPACK_IMPORTED_MODULE_32__shared_components_file_picker_file_picker_component__["a" /* FilePicker */],
                __WEBPACK_IMPORTED_MODULE_33__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_adm_pos_pos_component__["a" /* PosComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_39__auth_token_interceptor__["a" /* InterceptorModule */],
                __WEBPACK_IMPORTED_MODULE_31__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__services_supply_service__["a" /* SupplyService */],
                __WEBPACK_IMPORTED_MODULE_26__services_products_service__["a" /* ProductsService */],
                __WEBPACK_IMPORTED_MODULE_27__services_route_service__["a" /* RouteService */],
                __WEBPACK_IMPORTED_MODULE_29__services_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_30__services_images_service__["a" /* ImagesService */],
                __WEBPACK_IMPORTED_MODULE_34__services_authenticate_service__["a" /* AuthenticateService */],
                __WEBPACK_IMPORTED_MODULE_35__services_point_of_sale_service__["a" /* PointOfSaleService */],
                __WEBPACK_IMPORTED_MODULE_36__services_viewing_service__["a" /* ViewingService */],
                __WEBPACK_IMPORTED_MODULE_38__services_header_service__["a" /* HeaderService */],
                __WEBPACK_IMPORTED_MODULE_28__services_token_service__["a" /* TokenService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
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
exports.push([module.i, ".gmap{\n    width:100%;height:400px\n}\n\n.tarjeta{\n    width: 100%!important;\n    height: 500px;\n    float: left;\n}\n\n#formAdd{\n    margin:10px;;\n}\n\n.footer{\n    text-align:center;\n}\n\n.btn-circle {\n    width: 30px;\n    height: 30px;\n    padding: 6px 0px;\n    border-radius: 15px;\n    text-align: center;\n    font-size: 12px;\n    line-height: 1.42857;\n}\n\n.add{\n    background-color: green;\n    color: white;\n    float: right;\n    margin: 10px;\n    font-weight: bold;\n    font-size: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/pos/pos.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"formAdd\" class=\"card\" [hidden]=\"typeOfView !== 3\">\n    <div class=\"card-header\">Agregar Punto de venta</div>\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"card tarjeta\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Ubicación del Punto de venta</h5>\n                        <div #gmap class=\"gmap\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"card tarjeta\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Información del Punto de venta </h5>\n                        <div class=\"form-group\">\n                            <span class=\"input-group-addon\">Nombre:</span>\n                            <input type=\"text\" class=\"form-control\" id=\"POSName\" [(ngModel)]=\"POSName\">\n                        </div>\n                        <div class=\"form-group\">\n                            <span class=\"input-group-addon\">Dirección:</span>\n                            <input type=\"text\" class=\"form-control\" id=\"POSAddress\" [(ngModel)]=\"POSAddress\">\n                            <button type=\"button\" class=\"btn btn-light\" (click)=\"marcar()\">marcar</button>\n                        </div>\n                        <div class=\"form-group\">\n                            <span class=\"input-group-addon\">Telefono:</span>\n                            <input type=\"text\" class=\"form-control\" id=\"POSTel\" [(ngModel)]=\"POSTel\">\n                        </div>\n                        <div class=\"form-group\">\n                            <span class=\"input-group-addon\">Imagen:</span>\n                            <img [src]=\"getImage()\" *ngIf=\"imageFile\" class=\"small_image\" />\n                            <file-picker text=\"Cambiar\" (selected)=\"handleSelected($event)\"></file-picker>\n                            <div *ngIf=\"filestring\">\n                                {{filestring}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelAdd()\">Cancelar</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\">Agregar</button>\n    </div>\n</div>\n\n<div class=\"card\" style=\"margin:15px;\" [hidden]=\"typeOfView !== 2\">\n    <div class=\"card-header\">\n        <b>Editar Punto de venta</b>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"card tarjeta\" style=\"width: 18rem;\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Ubicación del Punto de venta</h5>\n                        <div #gmapEdit class=\"gmap\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"card tarjeta\" style=\"width: 18rem;\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Información del Punto de venta </h5>\n                        <div class=\"form-group\">\n                            <span class=\"input-group-addon\">Nombre:</span>\n                            <input type=\"text\" class=\"form-control\" id=\"POSEditName\" [(ngModel)]=\"POSEditName\">\n                        </div>\n                        <div class=\"form-group\">\n                            <span class=\"input-group-addon\">Dirección:</span>\n                            <input type=\"text\" class=\"form-control\" id=\"POSEditAddress\" [(ngModel)]=\"POSEditAddress\">\n                            <button type=\"button\" class=\"btn btn-light\" (click)=\"locationEdit()\">marcar</button>\n                        </div>\n                        <div class=\"form-group\">\n                            <span class=\"input-group-addon\">Telefono:</span>\n                            <input type=\"text\" class=\"form-control\" id=\"POSEditTel\" [(ngModel)]=\"POSEditTel\">\n                        </div>\n                        <div class=\"form-group\">\n                            <span class=\"input-group-addon\">Imagen:</span>\n                            <img [src]=\"getImage()\" *ngIf=\"POSEdit\" class=\"small_image\" />\n                            <file-picker text=\"Cambiar\" (selected)=\"handleSelected($event)\"></file-picker>\n                            <div *ngIf=\"filestring\">\n                                {{filestring}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelEdit()\">Cancelar</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"actualizar()\">Actualizar</button>\n    </div>\n</div>\n\n\n<div *ngIf=\"typeOfView == 1\">\n    <button class=\"btn btn-circle add fa fa-plus\" (click)=\"addForm()\"></button>\n    <table class=\"table table-striped\">\n        <thead class=\"thead-dark\">\n            <tr>\n                <th>Imagen</th>\n                <th>Nombre</th>\n                <th>Direción</th>\n                <th>Tel</th>\n                <th>Editar</th>\n                <th>Eliminar</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let pos of pointsOfSale\">\n                <td>\n\n                    <img *ngIf=\"pos.image !== '' && pos.image !== null\" style=\"width:50px;\" src=\"images/locales/{{pos.image}}\" />\n                    <i *ngIf=\"pos.image === '' || pos.image === null\" class=\"fa fa-home\" style=\"font-size: 2.0em;\"></i>\n\n\n                </td>\n                <td>{{pos.name}}</td>\n                <td>{{pos.address}}</td>\n                <td>\n                    <a href=\"tel:{{pos.tel}}\">{{pos.tel}}</a>\n                </td>\n                <td>\n                    <a (click)=\"formEdit(pos.id)\">\n                        <i class=\"fa fa-edit\" style=\"font-size: 1.7em;\"></i>\n                    </a>\n                </td>\n                <td>\n                    <a (click)=\"delete(pos.id)\">\n                        <i class=\"fa fa-trash-o\" style=\"font-size: 1.7em;\"></i>\n                    </a>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

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
        this.geocoder = new google.maps.Geocoder();
    }
    PosComponent.prototype.ngOnInit = function () {
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
                resultsMap.setCenter(results[0].geometry.location);
                thisPrincipal.POSMarker = new google.maps.Marker({
                    map: resultsMap,
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
            .addPointOfSale(this.POSName, this.POSAddress, this.POSTel, this.imagePath, this.POSMarker.getPosition())
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
            .updatePointOfSale(this.POSEdit.id, this.POSEditName, this.POSEditAddress, this.POSEditTel, this.imagePath, this.POSEditMarker.getPosition())
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
            this.imagePath = (this.POSEdit ? (this.POSEdit.id + '_') : '') + this.imageFile.name;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
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

module.exports = "<table class=\"table\">\n\t<tr>\n\t\t<td>\n\t\t\t<div class=\"card\" style=\"margin:15px;\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<b>Agregar producto</b>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body\">\n                    <div class=\"form-group\">\n                        <span class=\"input-group-addon\">Nombre:</span>\n                        <input type=\"text\" class=\"form-control\" id=\"name\" *ngIf=\"product\" [(ngModel)]=\"product.name\">\n                    </div>\n    \n                    <div class=\"form-group\">\n                        <span class=\"input-group-addon\">Imagen:</span>\n                        <img [src]=\"getImage()\" *ngIf=\"product\" class=\"small_image\" />\n                        <file-picker text=\"Cambiar\" (selected)=\"handleSelected($event)\"></file-picker>\n                        <div *ngIf=\"filestring\">\n                            {{filestring}}\n                        </div>\n                    </div>\n                    \n\t\t\t\t\t<button type=\"button\" (click)=\"agregar()\" class=\"btn btn-primary\">Agregar unidad</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-light\" routerLink=\"/admin/productos\">Cancelar</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</td>\n\t</tr>\n</table>"

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
    function ProductAddComponent(router, domSanitizer, productsService, imagesService) {
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.productsService = productsService;
        this.imagesService = imagesService;
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
                });
            }
            else {
                _this.router.navigateByUrl('/admin/productos');
            }
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_images_service__["a" /* ImagesService */]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/adm/products/edit/product.edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/products/edit/product.edit.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n\t<tr>\n\t\t<td>\n\t\t\t<div class=\"card\" style=\"margin:15px;\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<b>Editar producto</b>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<span class=\"input-group-addon\">Nombre:</span>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" *ngIf=\"product\" [(ngModel)]=\"product.name\">\n\t\t\t\t\t</div>\n \n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<span class=\"input-group-addon\">Imagen:</span>\n\t\t\t\t\t\t<img [src]=\"getImage()\" *ngIf=\"product\" class=\"small_image\" />\n                        <file-picker text=\"Cambiar\" (selected)=\"handleSelected($event)\"></file-picker>\n                        <div *ngIf=\"filestring\">\n                            {{filestring}}\n                        </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"actualizar()\">Actualizar</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-light\" routerLink=\"/admin/productos\">Cancelar</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</td>\n\t</tr>\n</table>"

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



// service



var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(activatedRoute, router, domSanitizer, productsService, imagesService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.productsService = productsService;
        this.imagesService = imagesService;
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.activatedRoute.params.subscribe(function (params) {
            _this.productsService.get().subscribe(function (res) {
                if (res.result == __WEBPACK_IMPORTED_MODULE_5__datatypes_result__["a" /* ResultCode */].Error) {
                    // TODO: handle error
                }
                else {
                    _this.product = res.data.find(function (s) { return s.id == params['id']; });
                }
            });
        }, 
        // TODO: handle error
        function (error) { });
    };
    ProductEditComponent.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
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
    ProductEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/components/adm/products/edit/product.edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/adm/products/edit/product.edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_images_service__["a" /* ImagesService */]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/adm/products/list/products.list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img.small_list_image {\n    max-width: 100px;\n    max-height: 100px;\n}\n\n#formAdd{\n    margin:10px;;\n}\n\n.footer{\n    text-align:center;\n}\n\n.btn-circle {\n    width: 30px;\n    height: 30px;\n    padding: 6px 0px;\n    border-radius: 15px;\n    text-align: center;\n    font-size: 12px;\n    line-height: 1.42857;\n}\n\n.add{\n    background-color: green;\n    color: white;\n    float: right;\n    margin: 10px;\n    font-weight: bold;\n    font-size: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/products/list/products.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div style=\"float: right;\">\n        <button class=\"btn btn-circle add fa fa-plus\" routerLink=\"agregar\"></button>\n    </div>\n    <div>\n        <table class=\"table table-striped\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <th scope=\"col\">Imagen</th>\n                    <th scope=\"col\">Nombre</th>\n                    <th scope=\"col\">Editar</th>\n                    <th scope=\"col\">Eliminar</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let i of products\">\n                    <td>\n                        <a href=\"{{'images/productos/'+ i.path_image}}\" target=\"_blank\">\n                            <img src=\"{{'images/productos/'+ getSmallImage(i.path_image)}}\"  class=\"small_list_image\" />\n                        </a>\n                    </td>\n                    <td>{{i.name}}</td>\n                    <td style=\"text-align: center;\">\n                        <a [routerLink]=\"['editar', i.id]\">\n                            <i class=\"fa fa-edit\" style=\"font-size: 1.7em;\"></i>\n                        </a>\n                    </td>\n                    <td style=\"text-align: center;\">\n                        <a (click)=\"delete(i.id)\">\n                            <i class=\"fa fa-trash-o\" style=\"font-size: 1.7em;\"></i>\n                        </a>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/adm/products/list/products.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_images_service__ = __webpack_require__("../../../../../src/app/services/images.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datatypes_result__ = __webpack_require__("../../../../../../datatypes/result.ts");
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
    function ProductsListComponent(productsService, imagesService) {
        this.productsService = productsService;
        this.imagesService = imagesService;
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        this.loadProducts();
    };
    ProductsListComponent.prototype.delete = function (id) {
        var _this = this;
        this.productsService
            .delete(id)
            .subscribe(function (res) {
            if (res.result == __WEBPACK_IMPORTED_MODULE_4__datatypes_result__["a" /* ResultCode */].OK) {
                _this.loadProducts();
            }
            else {
                console.log("ERROR: " + res.message);
                alert("ERROR: " + res.message);
            }
        }, function (err) {
            console.log("UNEXPECTED ERROR: " + err);
            alert(err);
        });
    };
    ProductsListComponent.prototype.loadProducts = function () {
        var _this = this;
        this.productsService.get().subscribe(function (response) {
            _this.products = __WEBPACK_IMPORTED_MODULE_1_lodash__["chain"](response.data)
                .sortBy(function (m) { return m.name.toLowerCase(); })
                .value();
        }, function (error) { });
    };
    ProductsListComponent.prototype.getSmallImage = function (path) {
        return this.imagesService.getSmallImage(path);
    };
    ProductsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/components/adm/products/list/products.list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/adm/products/list/products.list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_2__services_images_service__["a" /* ImagesService */]])
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

module.exports = "\n<router-outlet></router-outlet>"

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
exports.push([module.i, ".btn-circle {\n    width: 30px;\n    height: 30px;\n    padding: 6px 0px;\n    border-radius: 15px;\n    text-align: center;\n    font-size: 12px;\n    line-height: 1.42857;\n}\n\n.add{\n    background-color: green;\n    color: white;\n    float: right;\n    margin: 10px;\n    font-weight: bold;\n    font-size: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/routes/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <button class=\"btn btn-circle add fa fa-plus\" routerLink=\"agregar\"></button>\n    <table class=\"table table-striped\">\n        <thead class=\"thead-dark\">\n            <tr>\n                <th>Nombre</th>\n                <th>Editar</th>\n                <th>Eliminar</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let i of routes\">\n                <td>{{i.name}}</td>\n                <td style=\"text-align: center;\">\n                    <a [routerLink]=\"['edit', i.idroute]\">\n                        <i class=\"fa fa-edit\" style=\"font-size: 1.7em;\"></i>\n                    </a>\n                </td>\n                <td>\n                    <a (click)=\"delete(i.idroute)\">\n                        <i class=\"fa fa-trash-o\" style=\"font-size: 1.7em;\"></i>\n                    </a>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_route_service__["a" /* RouteService */]])
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

module.exports = "<div class=\"card\" style=\"margin:15px;\">\n\t<div class=\"card-header\">\n\t\t<b>Agregar Ruta</b>\n\t</div>\n\t<div class=\"card-body\">\n\t\t<div class=\"form-group\">\n\t\t\t<span class=\"input-group-addon\">Nombre:</span>\n\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"route.name\">\n\t\t</div>\n    <button type=\"button\" (click)=\"agregar()\" class=\"btn btn-primary\">Agregar ruta</button>\n    <button type=\"button\" class=\"btn btn-light\" routerLink=\"/recorridos\">Cancelar</button>\n\t</div>\n</div>"

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
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
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

module.exports = "<div class=\"card\" style=\"margin:15px;\">\n    <div class=\"card-header\">\n        <b>Editar recorrido</b>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"form-group\">\n            <span class=\"input-group-addon\">Nombre:</span>\n            <input type=\"text\" class=\"form-control\" id=\"name\" *ngIf=\"route\" [(ngModel)]=\"route.name\">\n        </div>\n        <table class=\"table\">\n            <tr>\n                <td>\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            Puntos de venta\n                        </div>\n                        <div class=\"card-body\">\n                            <table class=\"table\">\n                                <tr>\n                                    <td style=\"width: 15px;\"></td>\n                                    <td>Nombre</td>\n                                    <td>Eliminar</td>\n                                </tr>\n                                <tr *ngFor=\"let i of pointsOfSaleRoute\">\n                                    <td>\n                                        <span class=\"fa fa-arrow-circle-up\" (click)=\"changeOrder(i.id,i.position, i.position - 1)\" *ngIf=\"i.position !== 1\"></span>\n                                        <span class=\"fa fa-arrow-circle-down\" (click)=\"changeOrder(i.id,i.position,i.position + 1)\" *ngIf=\"i.position !== pointsOfSaleRoute.length\"></span>\n                                    </td>\n                                    <td>{{i.name}}</td>\n                                    <td>\n                                        <a (click)=\"remove(i.id)\">\n                                            <i class=\"fa fa-trash-o\" style=\"font-size: 1.7em;\"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                            </table>\n                            <span class=\"input-group-addon\">Punto de venta:</span>\n                            <select class=\"form-control\" [(ngModel)]=\"rPOS.idPointOfSale\">\n                                <option *ngFor=\"let pos of pointsOfSales\" [ngValue]=\"pos.id\">{{pos.name}}</option>\n                            </select>\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"agregarPuntoDeVenta()\">Agregar</button>\n                        </div>\n                    </div>\n                </td>\n                <td>\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            Usuarios\n                        </div>\n                        <div class=\"card-body\">\n                            <table class=\"table\">\n                                <tr>\n                                    <td>Fecha</td>\n                                    <td>Nombre</td>\n                                    <td>Eliminar</td>\n                                </tr>\n                                <tr *ngFor=\"let u of usersRoute\">\n                                    <td>{{u.date | date:'dd/MM/yyyy'}}</td>\n                                    <td>{{u.firstname}} {{u.lastname}}</td>\n                                    <td>\n                                        <a (click)=\"removeUser(u.id)\">\n                                            <i class=\"fa fa-trash-o\" style=\"font-size: 1.7em;\"></i>\n                                        </a>\n                                    </td>\n                                </tr>\n                            </table>\n                            <span class=\"input-group-addon\">Usuario:</span>\n                            <select class=\"form-control\" [(ngModel)]=\"rUser.idUser\">\n                                <option *ngFor=\"let u of users\" [ngValue]=\"u.id\">{{u.firstname}} {{u.lastname}}</option>\n                            </select>\n                            <div class=\"input-group\">\n                                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"rUser.date\" ngbDatepicker #d=\"ngbDatepicker\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n                                        <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\n                                    </button>\n                                </div>\n                            </div>\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"agregarUsuario()\">Agregar</button>\n                        </div>\n                    </div>\n                </td>\n            </tr>\n        </table>\n\n\n\n\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"actualizar()\">Actualizar</button>\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/recorridos\">Cancelar</button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/adm/routes/route.edit/route.edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteEdit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { FormGroup, FormControl, Validators } from '@angular/forms';

var RouteEdit = /** @class */ (function () {
    function RouteEdit(activatedRoute, router, routeService, userService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.routeService = routeService;
        this.userService = userService;
        this.rPOS = {};
        this.rUser = {};
        this.usuario = {
            "nombre": "",
            "apellidos": "",
            "email": "",
            "password": ""
        };
    }
    RouteEdit.prototype.onSubmit = function () {
        console.log(this.usuario);
    };
    RouteEdit.prototype.ngOnInit = function () {
        var _this = this;
        this.token = localStorage.getItem("token");
        this.userSaved = localStorage.getItem("user");
        this.accountId = Number(localStorage.getItem("accountId"));
        this.editName = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required);
        this.paramsSub = this.activatedRoute.params
            .subscribe(function (params) {
            _this.routeService.get()
                .subscribe(function (response) {
                console.log(response.data);
                _this.route = (response.data.find(function (s) { return s.idroute == params['id']; }));
                _this.rPOS.idRoute = _this.route.idroute;
                _this.rUser.idRoute = _this.route.idroute;
                _this.getPointOfSalesRoute();
                _this.getUsers();
                _this.getUsersRoute();
                //this.editForm = new FormGroup({ editName: this.editName });
            });
        }, function (error) { });
        this.routeService.getPointsOfSales()
            .subscribe(function (dataPOS) {
            _this.pointsOfSales = dataPOS;
            console.log(dataPOS);
        });
        this.createFormControls();
        this.createForm();
        this.createFormEditControls();
        this.createFormEdit();
    };
    RouteEdit.prototype.createFormControls = function () {
        this.firstName = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required);
        this.lastName = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required);
        this.email = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern("[^ @]*@[^ @]*")
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(8)
        ]);
        this.language = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required);
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
        this.editName = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required);
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
            if (data.result === -1) {
                alert(data.message);
            }
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
        this.routeService.update(this.route)
            .subscribe(function (data) {
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
        console.log(this.rUser);
        this.routeService.addUser(this.rUser).subscribe(function (data) {
            _this.getUsersRoute();
        });
    };
    RouteEdit.prototype.changeOrder = function (idpointofSale, position, newposition) {
        var _this = this;
        this.routeService.reorderPointOfSale(this.route.idroute, idpointofSale, position, newposition).subscribe(function (data) {
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
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_route_service__["a" /* RouteService */],
            __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]])
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
/* supply en vez de input?? */

var RoutesComponent = /** @class */ (function () {
    // private inputs: Input[];
    function RoutesComponent() {
    }
    RoutesComponent.prototype.ngOnInit = function () {
        // this.inputService.getInputs()
        //   .subscribe(data => this.inputs = data,
        //   error => { }
        //   );
    };
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
exports.push([module.i, "img.small_image.add_supply {\n    max-width: 100px;\n    max-height: 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/supply/add/supply.add.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <tr>\n    <td>\n      <div class=\"card\" style=\"margin:15px;\">\n        <div class=\"card-header\">\n          <b>Agregar insumo</b>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n            <span class=\"input-group-addon\">Nombre:</span>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supply.name\">\n          </div>\n          <div class=\"form-group\">\n            <span class=\"input-group-addon\">Unidad:</span>\n\n            <select class=\"form-control\" [(ngModel)]=\"supply.units\">\n              <option *ngFor=\"let unit of units\" [ngValue]=\"unit.id\">{{unit.name}}</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <span class=\"input-group-addon\">Precio:</span>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"supply.amount\">\n          </div>\n\n          <div class=\"form-group\">\n            <span class=\"input-group-addon\">Imagen:</span>\n            <img [src]=\"getImage()\" *ngIf=\"supply\" class=\"small_image add_supply\" />\n            <file-picker text=\"Cambiar\" (selected)=\"handleSelected($event)\"></file-picker>\n            <div *ngIf=\"filestring\">\n              {{filestring}}\n            </div>\n          </div>\n\n          <button type=\"button\" (click)=\"agregar()\" class=\"btn btn-primary\">Agregar unidad</button>\n          <button type=\"button\" class=\"btn btn-light\" routerLink=\"/admin/insumos\">Cancelar</button>\n        </div>\n      </div>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/adm/supply/add/supply.add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplyAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_supply_service__ = __webpack_require__("../../../../../src/app/services/supply.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_images_service__ = __webpack_require__("../../../../../src/app/services/images.service.ts");
/* supply en vez de imput?? */
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_supply_service__["a" /* SupplyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */],
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
exports.push([module.i, "img.small_image.edit_supply {\n    max-width: 100px;\n    max-height: 100px; \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/adm/supply/edit/supply.edit.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <tr>\n    <td>\n      <div class=\"card\" style=\"margin:15px;\">\n        <div class=\"card-header\">\n          <b>Editar insumo</b>\n        </div>\n        <div class=\"card-body\">\n\n          <div class=\"form-group\">\n            <span class=\"input-group-addon\">Nombre:</span>\n            <input type=\"text\" class=\"form-control\" id=\"name\" *ngIf=\"supply\" [(ngModel)]=\"supply.name\">\n          </div>\n\n          <div class=\"form-group\">\n            <span class=\"input-group-addon\">Unidad:</span>\n\n            <select class=\"form-control\" *ngIf=\"supply\" [(ngModel)]=\"supply.unit\">\n              <option *ngFor=\"let unit of units\" [ngValue]=\"unit.id\">{{unit.name}}</option>\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <span class=\"input-group-addon\">Precio:</span>\n            <input type=\"text\" class=\"form-control\" id=\"amount\" *ngIf=\"supply\" [(ngModel)]=\"supply.amount\">\n          </div>\n\n          <div class=\"form-group\">\n            <span class=\"input-group-addon\">Imagen:</span>\n            <img [src]=\"getImage()\" *ngIf=\"supply\" class=\"small_image edit_supply\" />\n            <file-picker text=\"Cambiar\" (selected)=\"handleSelected($event)\"></file-picker>\n            <div *ngIf=\"filestring\">\n              {{filestring}}\n            </div>\n          </div>\n\n\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"actualizar()\">Actualizar</button>\n          <button type=\"button\" class=\"btn btn-light\" routerLink=\"/admin/insumos\">Cancelar</button>\n        </div>\n      </div>\n    </td>\n  </tr>\n</table>\n"

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
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_supply_service__["a" /* SupplyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__services_images_service__["a" /* ImagesService */]])
    ], SupplyEditComponent);
    return SupplyEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/adm/supply/list/supply.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <span style=\"float: right;\">\n        <button class=\"btn btn-circle add fa fa-plus\" routerLink=\"agregar\"></button>\n    </span>\n\t<table class=\"table table-striped\">\n\t\t<thead class=\"thead-dark\">\n\t\t\t<tr>\n\t\t\t\t<th scope=\"col\">Imagen</th>\n\t\t\t\t<th scope=\"col\">Nombre</th>\n\t\t\t\t<th scope=\"col\">Precio</th>\n\t\t\t\t<th scope=\"col\" style=\"width:100px;text-align: center;\">Editar</th>\n\t\t\t\t<th scope=\"col\" style=\"width:100px;text-align: center;\">Eliminar</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let s of supplies\" class=\"supply-row\">\n                <td>\n                    <a href=\"{{'images/insumos' + s.path_image}}\" target=\"_blank\">\n                        <img src=\"{{'images/insumos/'+ s.path_image}}\"  class=\"small_list_image\" />\n                    </a>\n                </td>\n\t\t\t\t<td>{{s.name}}</td>\n\t\t\t\t<td>$ {{s.amount}} / {{ getUnit(s.unit) }}</td>\n\t\t\t\t<td style=\"text-align: center;\">\n\t\t\t\t\t<a [routerLink]=\"['editar', s.id]\">\n\t\t\t\t\t\t<i class=\"fa fa-edit\" style=\"font-size: 1.7em;\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</td>\n\t\t\t\t<td style=\"text-align: center;\">\n\t\t\t\t\t<a (click)=\"delete(s.id)\">\n\t\t\t\t\t\t<i class=\"fa fa-trash-o\" style=\"font-size: 1.7em;\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_supply_service__ = __webpack_require__("../../../../../src/app/services/supply.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datatypes_result__ = __webpack_require__("../../../../../../datatypes/result.ts");
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
            if (res.result == __WEBPACK_IMPORTED_MODULE_3__datatypes_result__["a" /* ResultCode */].OK) {
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
        this.supplyService.get().subscribe(function (data) {
            _this.supplies = __WEBPACK_IMPORTED_MODULE_1_lodash__["chain"](data)
                .groupBy(function (s) { return s.id; })
                .map(function (g) {
                return __WEBPACK_IMPORTED_MODULE_1_lodash__["chain"](g)
                    .sortBy(function (s) { return s.date; })
                    .last()
                    .value();
            })
                .sortBy(function (m) { return m.name.toLowerCase(); })
                .value();
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_supply_service__["a" /* SupplyService */]])
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

module.exports = "\n<router-outlet></router-outlet>"

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

module.exports = "<div class=\"flex flex-wrap d-flex justify-content-around content-center content-between boxs-container\">\n  <div class=\"boxs-home border border-warning\">\n    <div class=\"label\">\n      <span>Locales</span>\n    </div>\n    <div class=\"app-image\">\n      <a routerLink=\"/locales\">\n          <img src=\"/images/Locales.png\">\n        </a>\n    </div>\n  </div>\n  <div class=\"boxs-home border border-danger\">\n    <div class=\"label\">\n      <span>Productos</span>\n    </div>\n    <div class=\"app-image\">\n      <a routerLink=\"/admin/productos\">\n          <img src=\"images/Productos.png\">\n        </a>\n    </div>\n  </div>\n  <div class=\"boxs-home border border-success\">\n    <div class=\"label\">\n      <span>Reportes</span>\n    </div>\n    <div class=\"app-image\" style=\"padding: 7px 2px;\">\n      <a routerLink=\"/reportes\">\n          <img src=\"/images/Reportes.png\">\n        </a>\n    </div>\n  </div>\n  <div class=\"boxs-home border border-primary\">\n    <div class=\"label\">\n      <span>Mapas</span>\n    </div>\n    <div class=\"app-image\">\n      <a routerLink=\"/mapa\">\n          <img src=\"/images/Mapas.png\">\n        </a>\n    </div>\n  </div>\n</div>"

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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
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

module.exports = "<div class=\"detalle-local border\">\n    <div class=\"detalle-local-header flex flex-wrap d-flex justify-content-around content-center content-between\">\n        <div class=\"head-image\">\n            <img src=\"images/locales/{{pointOfSale.image}}\">\n        </div>\n    </div>\n    <div class=\"detalle-local-info\">\n        <div class=\"container\">\n            <div class=\"row align-items-center\">\n                <div class=\"col\"></div>\n                <div class=\"col\">Entregados</div>\n                <div class=\"col\">Devolución vencidos</div>\n                <div class=\"col\">Devolución vacíos</div>\n            </div>\n            <div class=\"row align-items-center\" *ngFor=\"let product of productsToSend\">\n                <div class=\"col productos-info\">\n                    <div class=\"productos-image\">\n                        <img src=\"images/productos/{{product.path_image}}\">\n                    </div>\n                    <div class=\"productos-title\">\n                        <label>{{product.name}}</label>\n                    </div>\n                </div>            \n                <div class=\"col\">\n                    <input type=\"number\" class=\"detalle-input form-control\" [(ngModel)]=\"product.typeTransaction.delivery\" />\n                </div>\n                <div class=\"col\">\n                    <input type=\"number\" class=\"detalle-input form-control\" [(ngModel)]=\"product.typeTransaction.empty\"/>\n                </div>\n                <div class=\"col\">\n                    <input type=\"number\" class=\"detalle-input form-control\" [(ngModel)]=\"product.typeTransaction.return\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"filters flex d-flex justify-content-around content-center content-between\">            \n            <button type=\"button\" class=\"btn btn-secondary btn-lg\" [routerLink]=\"['/locales']\">Cancelar</button>\n            <button type=\"button\" (click)=\"agregar()\" class=\"btn btn-success btn-lg\">Agregar Visita</button>\n        </div>\n    </div>\n</div>"

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
    }
    DetalleLocalComponent.prototype.ngOnInit = function () {
        this.getPointOfSale(Number(this.route.snapshot.paramMap.get('id')));
        this.getProducts();
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
        this.productService.get().subscribe(function (response) {
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
        this.viewingService.addViewing(this.pointOfSale.id, this.productsToSend).subscribe(function (response) {
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
exports.push([module.i, "img{\n    max-width: 90px;\n    max-height: 60px;\n}\n\n.imageContainer{\n    float: left;\n    margin: 5px;\n    width: 100px;\n    text-align: center;\n}\n\n.lista-info{\n    float:left;\n    margin-left: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/locales/locales.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"buscador\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Buscar locales...\" (keyup)=\"filterPOS()\" [(ngModel)]=\"filter\">\n</div>\n<div class=\"flex flex-wrap d-flex justify-content-around content-center content-between boxs-container\">\n    <div class=\"boxs-lista border\" *ngFor=\"let pos of pointsOfSale\" [routerLink]=\"['/detalle-local', pos.id]\">\n        <div class=\"imageContainer\">\n            <img *ngIf=\"pos.image !== '' && pos.image !== null\" style=\"width:50px;\" src=\"images/locales/{{pos.image}}\" />\n            <i *ngIf=\"pos.image === '' || pos.image === null\" class=\"fa fa-home\" style=\"font-size: 2.0em;\"></i>\n        </div>\n        <div class=\"lista-info\">\n            <div class=\"lista-title\">\n                <label>{{pos.name}}</label>\n            </div>\n            <div class=\"lista-info-content\">\n                <label><b>Tel:</b> <a href=\"tel:{{pos.tel}}\">{{pos.tel}}</a> </label>\n                <label><b>Dirección:</b> {{pos.address}}</label>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/front/locales/locales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_point_of_sale_service__ = __webpack_require__("../../../../../src/app/services/point-of-sale.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_point_of_sale_service__["a" /* PointOfSaleService */],
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

module.exports = "<h2 style=\"margin:20px;\">\nEn construcción\n</h2>\n<!--\n  \n  \n  <html>\n\t<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n  <link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" />\n\n  <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n\n  <title>GoodVibes prototype - Home</title>\t\t\n  <link rel=\"stylesheet\" href=\"/css/style.css\" crossorigin=\"anonymous\">\n</head>\n<body>\n    <div class=\"slide-img cabezal\">\n      <a href=\"index.html\"><img src=\"images/app/good-vibes-logo.jpg\"></a>\n    </div>\t\n    <div class=\"flex flex-wrap d-flex justify-content-around content-center content-between boxs-container\">\n      <div class=\"boxs-productos border\" style=\"height: 110px;\">\n        <div class=\"productos-image2\">\n          <img src=\"images/lamandolina.jpg\">\n        </div>\n        <div class=\"productos-info\">\n          <div class=\"productos-title\">\n            <label>La mandolina</label>\n          </div>\t\t\t\t\t\t\n          <span class=\"fa fa-calendar-check-o\" style=\"font-size: 2em; color:#00aa00;\"  aria-hidden=\"true\"></span>\n          <span style=\"color:#00aa00;\">10:00Hs</span>\t\t<br/>\n          <i class=\"fa fa-arrow-up\" aria-hidden=\"true\" style=\"color:#00aa00;\"></i><span style=\"color:#00aa00;\"> 20</span>\n          <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" style=\"color:#aa0000;\"></i><span style=\"color:#aa0000;\"> 3</span>\n        </div>\n      </div>\n      <div class=\"boxs-productos border\" style=\"height: 110px;\">\n        <div class=\"productos-image2\">\n          <img src=\"images/cayetana.png\">\n        </div>\n        <div class=\"productos-info\">\n          <div class=\"productos-title\">\n            <label>Gandhi</label>\n          </div>\n          <span class=\"fa fa-calendar-check-o\" style=\"font-size: 2em; color:#00aa00;\"  aria-hidden=\"true\"></span>\n          <span style=\"color:#00aa00;\">10:30Hs</span><br/>\n          <i class=\"fa fa-arrow-up\" aria-hidden=\"true\" style=\"color:#00aa00;\"></i><span style=\"color:#00aa00;\"> 20</span>\n          <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" style=\"color:#aa0000;\"></i><span style=\"color:#aa0000;\"> 2</span>\n        </div>\n      </div>\n      <div class=\"boxs-productos border\" style=\"height: 110px;\">\n        <div class=\"productos-image2\">\n          <img src=\"images/koi.jpg\">\n        </div>\n        <div class=\"productos-info\">\n          <div class=\"productos-title\">\n            <label>Koi supermarket</label>\n          </div>\n          <span class=\"fa fa-calendar\" style=\"font-size: 2em;\" aria-hidden=\"true\"></span>\t\t\t\t\t\t\n          <span style=\"color:#00aa00;\">10:45Hs</span><br/>\n          <i class=\"fa fa-arrow-up\" aria-hidden=\"true\" style=\"color:#00aa00;\"></i><span style=\"color:#00aa00;\"> 20</span>\n          <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" style=\"color:#aa0000;\"></i><span style=\"color:#aa0000;\"> 2</span>\n        </div>\n      </div>\t\t\t\t\t\n    \n      \n      <div class=\"boxs-productos border\" style=\"height: 110px;\">\n        <div class=\"productos-image2\">\n          <img src=\"images/cayetana.png\">\n        </div>\n        <div class=\"productos-info\">\n          <div class=\"productos-title\">\n            <label>Cayetana Golf</label>\n          </div>\t\n          <span class=\"fa fa-calendar\" style=\"font-size: 2em;\" aria-hidden=\"true\"></span>\n          <span style=\"color:#00aa00;\">11:00Hs</span><br/>\n          <i class=\"fa fa-arrow-up\" aria-hidden=\"true\" style=\"color:#00aa00;\"></i><span style=\"color:#00aa00;\"> 25</span>\n          <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" style=\"color:#aa0000;\"></i><span style=\"color:#aa0000;\"> 4</span>\n        </div>\n      </div>\n\n      <div class=\"boxs-productos border\" style=\"height: 110px;\">\n        <div class=\"productos-image2\">\n          <img src=\"images/portovanila.png\">\n        </div>\n        <div class=\"productos-info\">\n          <div class=\"productos-title\">\n            <label>Porto Vanila</label>\n          </div>\n          <a href=\"comgooglemaps://?daddr=-34.923443,-56.159779&directionsmode=driving\">\n            <span class=\"fa fa-map\" style=\"margin-left:5px;font-size: 1.5em;color:#555;\"></span>\n          </a>\t\t\t\t\t\t\t\n          <a href=\"detalle-local.html\">\n            <span class=\"fa fa-cart-arrow-down\" style=\"margin-left:5px;font-size: 1.8em;color:#555;\"></span>\n          </a>\t\t\t\t\t\t\t\n        </div>\n      </div>\n    </div>\n</body>\n</html>\n  \n-->"

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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/front/reportes/reportes.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 style=\"margin:20px;\">\n    En construcción\n    </h2>\n\n<style>\n  #chartdiv {\n    width: 100%;\n    height: 500px;\n  }\n\n  #chartdiv2 {\n    width: 100%;\n    height: 500px;\n  }\n</style>\n\n<!-- Resources -->\n<script src=\"https://www.amcharts.com/lib/3/amcharts.js\"></script>\n<script src=\"https://www.amcharts.com/lib/3/serial.js\"></script>\n<script src=\"https://www.amcharts.com/lib/3/plugins/export/export.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://www.amcharts.com/lib/3/plugins/export/export.css\" type=\"text/css\" media=\"all\" />\n<script src=\"https://www.amcharts.com/lib/3/themes/light.js\"></script>\n\n<script src=\"https://www.amcharts.com/lib/3/pie.js\"></script>\n<script src=\"https://www.amcharts.com/lib/3/plugins/animate/animate.min.js\"></script>\n\n\n<!-- Chart code -->\n<script>\n  var chart = AmCharts.makeChart(\"chartdiv\",\n    {\n      \"type\": \"serial\",\n      \"theme\": \"light\",\n      \"dataProvider\": [{\n        \"name\": \"Green Life\",\n        \"points\": 35654,\n        \"color\": \"#A9BE3F\",\n        \"bullet\": \"images/greenLife.png\"\n      }, {\n        \"name\": \"Citra Trip\",\n        \"points\": 65456,\n        \"color\": \"#FCB100\",\n        \"bullet\": \"images/citraTrip.png\"\n      }, {\n        \"name\": \"Citra Trip\",\n        \"points\": 45724,\n        \"color\": \"#F8FF32\",\n        \"bullet\": \"images/citraTrip.png\"\n      }, {\n        \"name\": \"Sun Kiss\",\n        \"points\": 13654,\n        \"color\": \"#6E2539\",\n        \"bullet\": \"images/sunKiss.png\"\n      }],\n      \"valueAxes\": [{\n        \"maximum\": 80000,\n        \"minimum\": 0,\n        \"axisAlpha\": 0,\n        \"dashLength\": 4,\n        \"position\": \"left\"\n      }],\n      \"startDuration\": 1,\n      \"graphs\": [{\n        \"balloonText\": \"<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>\",\n        \"bulletOffset\": 10,\n        \"bulletSize\": 52,\n        \"colorField\": \"color\",\n        \"cornerRadiusTop\": 8,\n        \"customBulletField\": \"bullet\",\n        \"fillAlphas\": 0.8,\n        \"lineAlpha\": 0,\n        \"type\": \"column\",\n        \"valueField\": \"points\"\n      }],\n      \"marginTop\": 0,\n      \"marginRight\": 0,\n      \"marginLeft\": 0,\n      \"marginBottom\": 0,\n      \"autoMargins\": false,\n      \"categoryField\": \"name\",\n      \"categoryAxis\": {\n        \"axisAlpha\": 0,\n        \"gridAlpha\": 0,\n        \"inside\": true,\n        \"tickLength\": 0\n      },\n      \"export\": {\n        \"enabled\": true\n      }\n    });\n\n  /*************************************/\n  /*************************************/\n\n  /**\n  * Define data for each year\n  */\n  var chartData2 = {\n    \"1997\": [\n      { \"sector\": \"Green Life\", \"size\": 6.1 },\n      { \"sector\": \"Citra Trip\", \"size\": 20.9 },\n      { \"sector\": \"Paradise Dream\", \"size\": 1.8 },\n      { \"sector\": \"Yellow Rolling\", \"size\": 4.2 }],\n    \"1998\": [\n      { \"sector\": \"Green Life\", \"size\": 6.2 },\n      { \"sector\": \"Citra Trip\", \"size\": 21.4 },\n      { \"sector\": \"Paradise Dream\", \"size\": 1.9 },\n      { \"sector\": \"Yellow Rolling\", \"size\": 4.2 }],\n    \"1999\": [\n      { \"sector\": \"Green Life\", \"size\": 5.7 },\n      { \"sector\": \"Citra Trip\", \"size\": 20 },\n      { \"sector\": \"Paradise Dream\", \"size\": 1.8 },\n      { \"sector\": \"Yellow Rolling\", \"size\": 4.4 }]\n  };\n\n  var texto = {\n    \"1997\": \"Febrero\",\n    \"1998\": \"Marzo\",\n    \"1999\": \"Abril\"\n  }\n\n  /**\n  * Create the chart\n  */\n  //var currentYear = 1997;\n  var currentYear = 1997;\n  var chart2 = AmCharts.makeChart(\"chartdiv2\", {\n    \"type\": \"pie\",\n    \"theme\": \"light\",\n    \"labelText\": \"[[percents]]%\",\n    \"dataProvider\": [],\n    \"valueField\": \"size\",\n    \"titleField\": \"sector\",\n    \"startDuration\": 0,\n    \"innerRadius\": 60,\n    \"legend\": {\n      \"position\": \"bottom\"\n    },\n    \"titles\": [{\n      \"text\": \"Venta de productos\"\n    }],\n    \"allLabels\": [{\n      \"y\": \"50%\",\n      \"align\": \"center\",\n      \"size\": 20,\n      \"bold\": true,\n      \"text\": \"1995\",\n      \"color\": \"#555\"\n    },\n    {\n      \"y\": \"55%\",\n      \"align\": \"center\",\n      \"size\": 20,\n      \"bold\": true,\n      \"text\": \"2018\",\n      \"color\": \"#555\"\n    }],\n    \"listeners\": [{\n      \"event\": \"init\",\n      \"method\": function (e) {\n        var chart = e.chart;\n        function getCurrentData() {\n          var data = chartData2[currentYear];\n          currentYear++;\n          if (currentYear > 1999)\n            currentYear = 1997;\n          return data;\n        }\n\n        function loop() {\n          //chart.allLabels[0].text = currentYear;\n          chart.allLabels[0].text = texto[currentYear];\n          var data = getCurrentData();\n          chart.animateData(data, {\n            duration: 1000,\n            complete: function () {\n              setTimeout(loop, 2000);\n            }\n          });\n        }\n        loop();\n      }\n    }],\n    \"export\": {\n      \"enabled\": true\n    }\n  });\n\n</script>\n<div id=\"chartdiv\"></div>\n<br/>\n<div id=\"chartdiv2\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/front/reportes/reportes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesComponent; });
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

var ReportesComponent = /** @class */ (function () {
    function ReportesComponent() {
    }
    ReportesComponent.prototype.ngOnInit = function () {
    };
    ReportesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reportes',
            template: __webpack_require__("../../../../../src/app/components/front/reportes/reportes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/front/reportes/reportes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportesComponent);
    return ReportesComponent;
}());



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

module.exports = "<div class=\"slide-img cabezal\">\n  <a href=\"index.html\"><img src=\"/images/app/good-vibes-logo.jpg\"></a>\n</div>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\"  *ngIf=\"visible\">\n  <a class=\"navbar-brand\" href=\"#\">{{getName()}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/locales\">Locales</a>\n      </li>\n      <!--\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" routerLink=\"/reportes\">Reportes</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" routerLink=\"/mapa\">Mapas</a>\n      </li>\n    -->\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Admin\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"/admin/insumos\">Insumos</a>\n          <a class=\"dropdown-item\" routerLink=\"/admin/productos\">Productos</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" routerLink=\"/admin/puntos-de-venta\">Puntos de venta</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" routerLink=\"/recorridos\">Recorridos</a>\n        </div>\n      </li>\n      <!--\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" routerLink=\"/configs\">Configuraciones</a>\n      </li>\n    -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"  (click)=\"closeSession()\">Cerrar sesión</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
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
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\n\n.error{\n    color: #EF3B3A;\n}\n\n.errorMessage{\n    color: #EF3B3A;\n    font-weight: bold;\n    margin: 20px;\n}\n\n.login-page {\n  width: 360px;\n  padding: 8% 0 0;\n  margin: auto;\n}\n\n.form {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 360px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n          box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n\n.form input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 14px;\n}\n\n.form button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #4CAF50;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  -webkit-transition: all 0.3 ease;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n\n.form button:hover,.form button:active,.form button:focus {\n  background: #43A047;\n}\n\n.form .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n\n.form .message a {\n  color: #4CAF50;\n  text-decoration: none;\n}\n\n.form .register-form {\n  display: none;\n}\n\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto;\n}\n\n.container:before, .container:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.container .info {\n  margin: 50px auto;\n  text-align: center;\n}\n\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a;\n}\n\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n\n.container .info span a {\n  color: #000000;\n  text-decoration: none;\n}\n\n.container .info span .fa {\n  color: #EF3B3A;\n}\n\nbody {\n  background: #76b852; /* fallback for old browsers */\n  background: -webkit-gradient(linear, right top, left top, from(#76b852), to(#8DC26F));\n  background: linear-gradient(to left, #76b852, #8DC26F);\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;      \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n  <div class=\"form\">\n    <form novalidate [formGroup]=\"loginform\" class=\"login-form\">\n        <div class=\"errorMessage\" *ngIf=\"errorForm\">\n            Usuario o contraseña incorrecta        \n        </div>\n        <div class=\"form-group\">\n            <input type=\"text\" placeholder=\"Usuario\" class=\"form-control\" formControlName=\"username\">\n            <div class=\"form-control-feedback\" *ngIf=\"username.errors && (username.dirty || username.touched)\">\n                <p *ngIf=\"username.errors.required\" class=\"error\">Usuario requerido</p>                \n            </div>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"password\" placeholder=\"password\" class=\"form-control\" formControlName=\"password\">\n            <div class=\"form-control-feedback\" *ngIf=\"password.errors && (password.dirty || password.touched)\">\n                <p *ngIf=\"password.errors.required\" class=\"error\">Contraseña requerida</p>                \n            </div>\n        </div>\n        <button (click)=\"login()\">login</button>\n    </form>\n  </div>\n</div>"

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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_authenticate_service__["a" /* AuthenticateService */],
            __WEBPACK_IMPORTED_MODULE_4__services_token_service__["a" /* TokenService */]])
    ], LoginComponent);
    return LoginComponent;
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
    PointOfSaleService.prototype.addPointOfSale = function (name, address, tel, image, coords) {
        return this.http.post(this.pointOfSaleURL, { name: name, address: address, tel: tel, image: image, coords: coords });
    };
    PointOfSaleService.prototype.updatePointOfSale = function (idPointOfSale, name, address, tel, image, coord) {
        return this.http.put(this.pointOfSaleURL, { id: idPointOfSale, name: name, address: address, tel: tel, coord: coord, image: image });
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
    ProductsService.prototype.get = function () {
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
    ViewingService.prototype.addViewing = function (idPointOfSale, data) {
        return this.http.post(this.viewingsURL, { idPointOfSale: idPointOfSale, data: data });
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

module.exports = "<div>\n    <label for=\"files\" class=\"btn\">{{text}}</label>\n    <input id=\"files\" style=\"visibility:hidden;\" type=\"file\" (change)=\"onChange($event)\">\n</div>\n"

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