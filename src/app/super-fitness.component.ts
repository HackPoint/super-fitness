import {Component} from '@angular/core';
import {MdIcon} from "@angular2-material/icon/icon";
import {MATERIAL_DIRECTIVES} from "ng2-material";
import {MdToolbar} from '@angular2-material/toolbar';

// custom
import {SideNavComponent, ParallaxContainerComponent} from './shared/components/index';

@Component({
    moduleId: module.id,
    selector: 'super-fitness-app',
    templateUrl: 'super-fitness.component.html',
    directives: [SideNavComponent, ParallaxContainerComponent]
})
export class SuperFitnessAppComponent {
    title = 'Super Fitness';
}
