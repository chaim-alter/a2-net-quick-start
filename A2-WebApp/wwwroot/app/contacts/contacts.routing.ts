import { Routes } from '@angular/router';
import { ContactsList } from './contacts-list.cmp';
import { ContactsEdit } from './contacts-edit.cmp';
import { ContactsDetails } from './contacts-details.cmp';

export const ContactsRoutes: Routes = [
    {
        path: 'contacts', data: {title: 'אנשי קשר'}, children: [
            { path: '', component: ContactsList, data: { title: 'אנשי קשר' } },
            { path: ':id', component: ContactsDetails, data: { title: 'פרטי איש קשר' } },
            { path: 'edit/:id', component: ContactsEdit, data: { title: 'ערוך איש קשר' } },
            ]
    }
];

export const appRoutingProviders: any[] = [];
