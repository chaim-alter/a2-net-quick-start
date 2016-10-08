import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageHeadingComponent }   from './page-heading.cmp';
import { PageHeadingService }   from './page-heading.svc';

@NgModule({
    imports: [RouterModule],
    exports: [PageHeadingComponent],
    declarations: [PageHeadingComponent],
    providers: [PageHeadingService],
})
export class PageHeadingModule { }
