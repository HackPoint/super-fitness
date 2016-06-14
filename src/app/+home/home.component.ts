import {Component,OnInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {AlertComponent} from 'ng2-bootstrap/components/alert';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html',
    directives: [CORE_DIRECTIVES, AlertComponent]
})
export class HomeComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
