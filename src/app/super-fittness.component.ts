import {Component} from '@angular/core';
import {HomeComponent} from './+home';
import {CORE_DIRECTIVES} from '@angular/common';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'super-fittness-app',
    templateUrl: 'super-fittness.component.html',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
    styleUrls: ['../assets/layout.d.css']
})
@Routes([
    {path: '/home', component: HomeComponent}
])
export class SuperFittnessAppComponent {
}
