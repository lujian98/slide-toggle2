import { Component } from '@angular/core';
import { SunMenuItem } from 'sunbird-seven-ui';

@Component({
  selector: 'app-component',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class AppComponentComponent {
  items: SunMenuItem[] = [
    {
      title: 'Ldap',
      link: 'ldap'
    },
    {
      title: 'Grid Example',
      link: 'gridexample'
    }
  ];
}
