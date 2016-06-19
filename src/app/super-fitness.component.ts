import {Component} from '@angular/core';
import {MdIcon} from "@angular2-material/icon/icon";
import {MATERIAL_DIRECTIVES} from "ng2-material";
import {MdToolbar} from '@angular2-material/toolbar';


@Component({
    moduleId: module.id,
    selector: 'super-fitness-app',
    templateUrl: 'super-fitness.component.html',
    directives: [MATERIAL_DIRECTIVES, MdIcon, MdToolbar]
})
export class SuperFitnessAppComponent {
    title = 'Super Fitness';
}
