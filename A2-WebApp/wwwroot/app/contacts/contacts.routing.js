"use strict";
var contacts_list_cmp_1 = require('./contacts-list.cmp');
var contacts_edit_cmp_1 = require('./contacts-edit.cmp');
var contacts_details_cmp_1 = require('./contacts-details.cmp');
exports.ContactsRoutes = [
    {
        path: 'contacts', data: { title: 'אנשי קשר' }, children: [
            { path: '', component: contacts_list_cmp_1.ContactsList, data: { title: 'אנשי קשר' } },
            { path: ':id', component: contacts_details_cmp_1.ContactsDetails, data: { title: 'פרטי איש קשר' } },
            { path: 'edit/:id', component: contacts_edit_cmp_1.ContactsEdit, data: { title: 'ערוך איש קשר' } },
        ]
    }
];
exports.appRoutingProviders = [];
//# sourceMappingURL=contacts.routing.js.map