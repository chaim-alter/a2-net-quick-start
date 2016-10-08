import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'panel-box-btn',
    templateUrl: 'panel-box-btn.tmpl.html'
})
export class PanelBoxBtnComponent {
    constructor() { }

    @Input() icon: string;
    @Output() btnClick = new EventEmitter();
    
    btnClicked() {
        this.btnClick.emit();
    }
}