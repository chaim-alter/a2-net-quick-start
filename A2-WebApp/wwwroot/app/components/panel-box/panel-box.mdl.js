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
var panel_box_cmp_1 = require('./panel-box.cmp');
var panel_box_btn_cmp_1 = require('./panel-box-btn.cmp');
var PanelBoxModule = (function () {
    function PanelBoxModule() {
    }
    PanelBoxModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: [panel_box_cmp_1.PanelBoxComponent, panel_box_btn_cmp_1.PanelBoxBtnComponent],
            declarations: [panel_box_cmp_1.PanelBoxComponent, panel_box_btn_cmp_1.PanelBoxBtnComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], PanelBoxModule);
    return PanelBoxModule;
}());
exports.PanelBoxModule = PanelBoxModule;
//# sourceMappingURL=panel-box.mdl.js.map