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
      title: 'Autocomplete',
      link: 'autocomplete'
    },
    {
      title: 'Popover',
      link: 'popover'
    },
    {
      title: 'Select',
      link: 'select'
    },
    {
      title: 'Ldap',
      link: 'ldap'
    },
    {
      title: 'Grid Example',
      link: 'gridexample'
    },
    {
      title: 'Tree',
      link: '/components/tree/showcase'
    },
    {
      title: 'Tree DnD',
      link: '/components/tree/dnd'
    }
  ];
}
