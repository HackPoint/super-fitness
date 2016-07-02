import { enableProdMode } from '@angular/core';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {HTTP_PROVIDERS} from '@angular/http';
import {provide} from '@angular/core';
import {Renderer} from '@angular/core';
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {OVERLAY_CONTAINER_TOKEN} from '@angular2-material/core/overlay/overlay';
import {MdLiveAnnouncer} from "@angular2-material/core/live-announcer/live-announcer";
import {createOverlayContainer} from '@angular2-material/core/overlay/overlay-container';
import {MdGestureConfig} from '@angular2-material/core/gestures/MdGestureConfig';
import {MdIconRegistry} from '@angular2-material/icon/icon-registry';

import { SuperFitnessAppComponent, environment } from './app/';
import { bootstrap }    from '@angular/platform-browser-dynamic';


if (environment.production) {
  enableProdMode();
}

bootstrap(SuperFitnessAppComponent, [
    ROUTER_PROVIDERS,
    MdLiveAnnouncer,
    provide(OVERLAY_CONTAINER_TOKEN, {useValue: createOverlayContainer()}),
    HTTP_PROVIDERS,
    MdIconRegistry,
    Renderer,
    provide(HAMMER_GESTURE_CONFIG, {useClass: MdGestureConfig})
]).catch(err => console.error(err));

