import {Component} from '@angular/core';
import {JQueryBase} from "../../common/jquery.base";

@Component({
  selector: 'navbar',
  template: `
    <div class="navbar-fixed">
     <nav>
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo">Logo</a>
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
      </div>
    </nav>
    </div>
  `
})
export class NavbarComponent extends JQueryBase {
  ngAfterViewInit():any {
    this.jQuery('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'right',
      closeOnClick: true
    });
    return null;
  }

}
