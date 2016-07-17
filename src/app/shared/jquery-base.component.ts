import {AfterViewInit} from '@angular/core';
declare var $:any;

export abstract class JQueryBase implements AfterViewInit {
    public abstract ngAfterViewInit():any ;
    public $: any = $;
}
