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
var contacts_data_1 = require('./contacts.data');
var ContactsEdit = (function () {
    function ContactsEdit(router, activatedRoute, contactsData) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.contactsData = contactsData;
    }
    ContactsEdit.prototype.load = function () {
        var _this = this;
        this.contactsData.get(this.id)
            .subscribe(function (c) { return _this.contact = c; });
    };
    ContactsEdit.prototype.save = function () {
        var _this = this;
        this.contactsData.update(this.contact)
            .then(function (b) {
            return _this.router.navigate([("../../" + _this.contact.contactID)], { relativeTo: _this.activatedRoute });
        })
            .catch();
    };
    ContactsEdit.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            _this.id = +params['id'];
            _this.load();
        });
    };
    ContactsEdit = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contacts-edit',
            templateUrl: 'contacts-edit.tmpl.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, contacts_data_1.ContactsData])
    ], ContactsEdit);
    return ContactsEdit;
}());
exports.ContactsEdit = ContactsEdit;
//# sourceMappingURL=contacts-edit.cmp.js.map