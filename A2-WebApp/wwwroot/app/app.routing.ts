import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { DashboardRouting } from './dashboard/dashboard.routing';
import { ContactsRoutes } from './contacts/contacts.routing';


const appRoutes: Routes = [  
    ...DashboardRouting,
    ...ContactsRoutes    
];




export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

