import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ContactsData } from './contacts.data';
import { Contact } from './contact';

@Component({
    moduleId: module.id,
    selector: 'contacts-edit',
    templateUrl: 'contacts-edit.tmpl.html'
})

export class ContactsEdit implements OnInit {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private contactsData: ContactsData
        ) {
    }

    contact: Contact;
    id: number;

    public load(): void {
        this.contactsData.get(this.id)
            .subscribe(c => this.contact = c);
    }

    public save(): void {
        this.contactsData.update(this.contact)
            .then(b =>
                this.router.navigate([`../../${this.contact.contactID}`], {relativeTo: this.activatedRoute})

            )
            .catch();
    }

    ngOnInit() {
		this.activatedRoute.params.forEach((params: Params) => {
    		this.id = +params['id'];
			this.load();
		});
    }
}
