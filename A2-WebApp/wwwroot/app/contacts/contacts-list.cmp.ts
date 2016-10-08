import { Component, OnInit } from '@angular/core';
import { ContactsData } from './contacts.data';
import { Contact } from './contact';

@Component({
	moduleId: module.id,
	selector: 'contacts-list',
	templateUrl: 'contacts-list.tmpl.html'
})
export class ContactsList implements OnInit {
	constructor(
		private contactsData: ContactsData
		) {
	}
	public contacts: Contact[];
    public getContacts(): void {
		this.contactsData.getList().subscribe(
			c => this.contacts = c,
			error => { });
	}

	ngOnInit(): void {
		this.getContacts();
	}
}