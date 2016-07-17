import {AfterViewInit} from "@angular/core";
declare var $:any;

export abstract class JQueryBase implements AfterViewInit {
  protected jQuery:any = $;

  public abstract ngAfterViewInit();
}
