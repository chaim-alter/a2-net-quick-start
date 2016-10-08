import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarSideComponent }   from './navbar-side.cmp';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [NavbarSideComponent],
    declarations: [NavbarSideComponent]
    //providers: [],
})
export class NavbarSideMdl { }
