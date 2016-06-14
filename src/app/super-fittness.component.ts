import {Component} from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {HomeComponent} from './+home';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'super-fittness-app',
    templateUrl: 'super-fittness.component.html',
    directives: [ROUTER_DIRECTIVES, MdButton],
    providers: [ROUTER_PROVIDERS],
    styleUrls: ['../assets/layout.d.css']
})
@Routes([
    {path: '/home', component: HomeComponent}
])
export class SuperFittnessAppComponent {
    title = 'super-fittness works!';
}
