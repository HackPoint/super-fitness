/// <reference path="headroom.d.ts" />

import {Directive, OnDestroy, ElementRef} from '@angular/core';
import {JQueryBase} from "../../common/jquery.base";

@Directive({
  selector: '[headroom]'
})
export class HeadroomDirective extends JQueryBase implements OnDestroy {

  private headroom:Headroom;

  constructor(private el:ElementRef) {
    super();
  }

  ngAfterViewInit() {
    this.headroom = new Headroom(this.el.nativeElement, {
      tolerance: 0,
      offset: 205,
      classes: {
        initial: "headroom",
        pinned: "slideDown",
        unpinned: "slideUp"
      }
    });
    this.headroom.init();
    return true;
  }

  ngOnDestroy():any {
    this.headroom.destroy();
    return true;
  }
}
