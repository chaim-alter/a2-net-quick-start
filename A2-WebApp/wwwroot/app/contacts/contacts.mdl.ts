import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {PageHeadingModule} from '../components/page-heading/page-heading.mdl';
import {PanelBoxModule} from '../components/panel-box/panel-box.mdl';

import { ContactsData } from './contacts.data';
import { ContactsList } from './contacts-list.cmp';
import { ContactsEdit } from './contacts-edit.cmp';
import { ContactsDetails } from './contacts-details.cmp';

@NgModule({
	imports: [CommonModule, HttpModule, RouterModule, FormsModule, 
		PageHeadingModule, PanelBoxModule],
    declarations: [ContactsList, ContactsEdit, ContactsDetails],
	exports: [ContactsList, ContactsEdit, ContactsDetails],
	providers: [ContactsData]
})
export class ContactsMdl { }

