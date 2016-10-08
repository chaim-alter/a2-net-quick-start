import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'nvabar-side',
    templateUrl: 'nvabar-side.tmpl.html'
})
export class NavbarSideComponent implements OnInit {
    menuList: any[];

	ngOnInit(): void {
		this.menuList = [
			{ link: '', label: 'Home', icon: 'fa-th-large', exactActive: true },
			{ link: 'contacts', label: 'Contacts', icon: 'fa-user' }
		];
	}
}
