import {Component} from '@angular/core';

// custom
import {NavbarComponent} from './shared/components/index';
import {HeadroomDirective} from "./shared/directives/index";

@Component({
    moduleId: module.id,
    selector: 'super-fitness-app',
    templateUrl: 'super-fitness.component.html',
    directives: [NavbarComponent, HeadroomDirective]
})
export class SuperFitnessAppComponent {
    title = 'Super Fitness';
}
