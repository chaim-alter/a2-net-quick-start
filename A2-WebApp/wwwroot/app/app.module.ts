import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { NavbarSideMdl } from './components/navbar-side/navbar-side.mdl';
import { NavbarTopModule } from './components/navbar-top/navbar-top.mdl';
import { PageHeadingModule } from './components/page-heading/page-heading.mdl';

import { DashboardMdl } from './dashboard/dashboard.mdl';
import { ContactsMdl } from './contacts/contacts.mdl';

@NgModule({
    imports: [
        BrowserModule, CommonModule, HttpModule, 
        routing,
        NavbarSideMdl, NavbarTopModule, PageHeadingModule,
        DashboardMdl,
        ContactsMdl
        
    ],
    declarations: [AppComponent],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule { }
