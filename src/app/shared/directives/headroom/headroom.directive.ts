import {Directive, OnInit, OnDestroy, ElementRef} from '@angular/core';
import {JQueryBase} from "../../common/jquery.base";

@Directive({
  selector: '[headroom]'
})
export class HeadroomDirective extends JQueryBase {
  constructor(private el:ElementRef) {
    super();
  }

  ngAfterViewInit() {
   /* var headroom = new Headroom(this.el.nativeElement, {
      "offset": 305,
      "tolerance": 9,
      "classes": {
        "initial": "animated",
        "pinned": "slideDown",
        "unpinned": "slideUp"
      }
    });
    headroom.init();*/
    return null;
  }
}
