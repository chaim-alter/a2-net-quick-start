import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';

@Injectable()
export class PageHeadingService 
{
    public title: string;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { 
    }
}