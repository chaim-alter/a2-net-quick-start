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
var http_1 = require('@angular/http');
require('rxjs/rx');
var Observable_1 = require('rxjs/Observable');
var ContactsData = (function () {
    function ContactsData(http) {
        this.http = http;
        this.url = 'api/contacts';
    }
    ContactsData.prototype.getList = function () {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ContactsData.prototype.get = function (id) {
        return this.http.get(this.url + "/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ContactsData.prototype.update = function (contact) {
        console.log('save clicked!', contact);
        return this.http.put(this.url + "/" + contact.contactID, contact)
            .toPromise()
            .then(function (c) { return true; })
            .catch(this.handleError);
    };
    ContactsData.prototype.add = function (contact) {
        return this.http.post(this.url, contact)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ContactsData.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ContactsData.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
        // console.error('An error occurred', error); // for demo purposes only
        // return Promise.reject(error.message || error);
    };
    ContactsData = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContactsData);
    return ContactsData;
}());
exports.ContactsData = ContactsData;
//# sourceMappingURL=contacts.data.js.map