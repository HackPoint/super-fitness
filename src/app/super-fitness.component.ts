import {Component} from '@angular/core';

// custom
import {NavbarComponent} from './shared/components/index';


@Component({
    moduleId: module.id,
    selector: 'super-fitness-app',
    templateUrl: 'super-fitness.component.html',
    directives: [NavbarComponent]
})
export class SuperFitnessAppComponent {
    title = 'Super Fitness';
}
