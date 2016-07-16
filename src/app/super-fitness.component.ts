import {Component} from '@angular/core';
import {MdIcon} from "@angular2-material/icon/icon";
import {MdToolbar} from '@angular2-material/toolbar';

// custom
import {SpinnerComponent} from './shared/components/spinner';

@Component({
    moduleId: module.id,
    selector: 'super-fitness-app',
    templateUrl: 'super-fitness.component.html',
    directives: [MdIcon, MdToolbar, SpinnerComponent]
})
export class SuperFitnessAppComponent {
    title = 'Super Fitness';
}
