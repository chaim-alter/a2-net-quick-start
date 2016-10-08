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
var PanelBoxComponent = (function () {
    function PanelBoxComponent(el) {
        this.el = el;
        this.showClose = true;
        this.showCollapse = true;
    }
    PanelBoxComponent.prototype.ngOnInit = function () { };
    PanelBoxComponent.prototype.collapse = function () {
        console.log(this.el);
        // var ibox = this.el.nativeElement.closest('div.ibox');
        // var button = this.el.nativeElement.find('i');
        // var content = ibox.find('div.ibox-content');
        // content.slideToggle(200);
        // button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        // ibox.toggleClass('').toggleClass('border-bottom');
        // setTimeout(function () {
        //     ibox.resize();
        //     ibox.find('[id^=map-]').resize();
        // }, 50);
    };
    PanelBoxComponent.prototype.close = function () {
        this.el.nativeElement.remove();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PanelBoxComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PanelBoxComponent.prototype, "showClose", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PanelBoxComponent.prototype, "showCollapse", void 0);
    PanelBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'panel-box',
            templateUrl: 'panel-box.tmpl.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], PanelBoxComponent);
    return PanelBoxComponent;
}());
exports.PanelBoxComponent = PanelBoxComponent;
//# sourceMappingURL=panel-box.cmp.js.map