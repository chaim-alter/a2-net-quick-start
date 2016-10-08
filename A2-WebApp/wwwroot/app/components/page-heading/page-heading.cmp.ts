import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

import { PageHeadingService } from './page-heading.svc';

@Component({
    moduleId: module.id,
    selector: 'page-heading',
    templateUrl: 'page-heading.tmpl.html'
})
export class PageHeadingComponent implements OnInit {
    constructor(
        private pageHeadingService: PageHeadingService,
        private router: Router
    ) { }

    private _title: string;

    get title(): string {
        if (this.pageHeadingService && this.pageHeadingService.title) {
            return this.pageHeadingService.title;
        } else {
            return this._title;
        }
    }

    ngOnInit() {
        this.router.events.subscribe((data) => {
            if (data instanceof RoutesRecognized) {
                let titleResult = '';

                let r = data.state.root;
                while (r) {
                    if (r.data && r.data.title){
                        titleResult = r.data.title;
                    }

                    r = r.firstChild;
                }
                this._title = titleResult;
            }

        });
    }
}