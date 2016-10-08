"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var navbar_side_mdl_1 = require('./components/navbar-side/navbar-side.mdl');
var navbar_top_mdl_1 = require('./components/navbar-top/navbar-top.mdl');
var page_heading_mdl_1 = require('./components/page-heading/page-heading.mdl');
var dashboard_mdl_1 = require('./dashboard/dashboard.mdl');
var contacts_mdl_1 = require('./contacts/contacts.mdl');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, common_1.CommonModule, http_1.HttpModule,
                app_routing_1.routing,
                navbar_side_mdl_1.NavbarSideMdl, navbar_top_mdl_1.NavbarTopModule, page_heading_mdl_1.PageHeadingModule,
                dashboard_mdl_1.DashboardMdl,
                contacts_mdl_1.ContactsMdl
            ],
            declarations: [app_component_1.AppComponent],
            providers: [app_routing_1.appRoutingProviders],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map