import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ContactsData } from './contacts.data';
import { Contact } from './contact';

@Component({
    moduleId: module.id,
    selector: 'contacts-details',
    templateUrl: 'contacts-details.tmpl.html'
})

export class ContactsDetails implements OnInit {
	constructor(
		private contactsData: ContactsData,
		private activatedRoute: ActivatedRoute
	) {
	}

	public contact: Contact;
	private id: number;

	public loadContact(): void {
		this.contactsData.get(this.id)
			.subscribe(c => this.contact = c);
    }

	ngOnInit(): void {
		this.activatedRoute.params.forEach((params: Params) => {
    		this.id = +params['id'];
			this.loadContact();
		});
	}
}
