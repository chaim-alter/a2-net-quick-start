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
var router_1 = require('@angular/router');
var page_heading_svc_1 = require('./page-heading.svc');
var PageHeadingComponent = (function () {
    function PageHeadingComponent(pageHeadingService, router) {
        this.pageHeadingService = pageHeadingService;
        this.router = router;
    }
    Object.defineProperty(PageHeadingComponent.prototype, "title", {
        get: function () {
            if (this.pageHeadingService && this.pageHeadingService.title) {
                return this.pageHeadingService.title;
            }
            else {
                return this._title;
            }
        },
        enumerable: true,
        configurable: true
    });
    PageHeadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (data) {
            if (data instanceof router_1.RoutesRecognized) {
                var titleResult = '';
                var r = data.state.root;
                while (r) {
                    if (r.data && r.data.title) {
                        titleResult = r.data.title;
                    }
                    r = r.firstChild;
                }
                _this._title = titleResult;
            }
        });
    };
    PageHeadingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'page-heading',
            templateUrl: 'page-heading.tmpl.html'
        }), 
        __metadata('design:paramtypes', [page_heading_svc_1.PageHeadingService, router_1.Router])
    ], PageHeadingComponent);
    return PageHeadingComponent;
}());
exports.PageHeadingComponent = PageHeadingComponent;
//# sourceMappingURL=page-heading.cmp.js.map