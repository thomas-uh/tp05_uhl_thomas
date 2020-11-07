"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var home_component_1 = require("./home/home.component");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var routes = [
    {
        path: 'account',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./modules/account/account.module'); }).then(function (m) { return m.AccountModule; });
        }
    },
    {
        path: 'product',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./modules/product-catalogue/product.module'); }).then(function (m) { return m.ProductModule; });
        }
    },
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: '**',
        component: home_component_1.HomeComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
