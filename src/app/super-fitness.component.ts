import {Component} from '@angular/core';
import {MdIcon} from "@angular2-material/icon/icon";
import {MdToolbar} from '@angular2-material/toolbar';

// custom
import {SpinnerComponent, NavbarComponent} from './shared/components/index';

@Component({
    moduleId: module.id,
    selector: 'super-fitness-app',
    templateUrl: 'super-fitness.component.html',
    directives: [MdIcon, MdToolbar, SpinnerComponent, NavbarComponent]
})
export class SuperFitnessAppComponent {
    title = 'Super Fitness';
}
