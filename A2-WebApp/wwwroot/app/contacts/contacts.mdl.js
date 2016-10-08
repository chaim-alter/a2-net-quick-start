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
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var page_heading_mdl_1 = require('../components/page-heading/page-heading.mdl');
var panel_box_mdl_1 = require('../components/panel-box/panel-box.mdl');
var contacts_data_1 = require('./contacts.data');
var contacts_list_cmp_1 = require('./contacts-list.cmp');
var contacts_edit_cmp_1 = require('./contacts-edit.cmp');
var contacts_details_cmp_1 = require('./contacts-details.cmp');
var ContactsMdl = (function () {
    function ContactsMdl() {
    }
    ContactsMdl = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, http_1.HttpModule, router_1.RouterModule, forms_1.FormsModule,
                page_heading_mdl_1.PageHeadingModule, panel_box_mdl_1.PanelBoxModule],
            declarations: [contacts_list_cmp_1.ContactsList, contacts_edit_cmp_1.ContactsEdit, contacts_details_cmp_1.ContactsDetails],
            exports: [contacts_list_cmp_1.ContactsList, contacts_edit_cmp_1.ContactsEdit, contacts_details_cmp_1.ContactsDetails],
            providers: [contacts_data_1.ContactsData]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactsMdl);
    return ContactsMdl;
}());
exports.ContactsMdl = ContactsMdl;
//# sourceMappingURL=contacts.mdl.js.map