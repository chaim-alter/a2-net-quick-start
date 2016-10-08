import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'panel-box',
    templateUrl: 'panel-box.tmpl.html'
})
export class PanelBoxComponent implements OnInit {
    constructor(private el: ElementRef) { }

    @Input() title: string;
    @Input() showClose: boolean = true;
    @Input() showCollapse: boolean = true;

    ngOnInit() { }

    collapse() {
        console.log(this.el);
        // var ibox = this.el.nativeElement.closest('div.ibox');
        // var button = this.el.nativeElement.find('i');
        // var content = ibox.find('div.ibox-content');
        // content.slideToggle(200);
        // button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        // ibox.toggleClass('').toggleClass('border-bottom');
        // setTimeout(function () {
        //     ibox.resize();
        //     ibox.find('[id^=map-]').resize();
        // }, 50);
    }

    close() {
        this.el.nativeElement.remove();
    }
}
