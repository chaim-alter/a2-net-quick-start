import { NgModule } from '@angular/core';

import { PanelBoxComponent }   from './panel-box.cmp';
import { PanelBoxBtnComponent }   from './panel-box-btn.cmp';

@NgModule({
    imports: [],
    exports: [PanelBoxComponent, PanelBoxBtnComponent],
    declarations: [PanelBoxComponent, PanelBoxBtnComponent],
    providers: [],
})
export class PanelBoxModule { }
