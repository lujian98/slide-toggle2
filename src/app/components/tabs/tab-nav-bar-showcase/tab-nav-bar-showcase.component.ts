import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-nav-bar-showcase',
  templateUrl: './tab-nav-bar-showcase.component.html',
  styleUrls: ['./tab-nav-bar-showcase.component.scss']
})
export class TabNavBarShowcaseComponent {
  links = ['One', 'Two', 'Three'];
  activeLink = this.links[0];
}
