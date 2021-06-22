import { Component, ViewChild } from '@angular/core';
import { SunPopoverDirective, SunMenuItem, SunMenuPanelComponent } from 'sunbird-seven-ui';
import { PopoverComponentTemplateComponent } from './popover-component-template/popover-component-template.component';

@Component({
  selector: 'app-popover-dynamic',
  template: `
    Custom component: {{ text }}
  `
})
export class PopoverDynamicComponent {
  text: {};
}

@Component({
  selector: 'app-popover-showcase',
  templateUrl: './popover-showcase.component.html',
  styleUrls: ['./popover-showcase.component.scss']
})
export class PopoverShowcaseComponent {
  dynamicComponent = PopoverDynamicComponent;
  @ViewChild('popover', { static: true }) popover: SunPopoverDirective;
  popoverComponentTemplate = PopoverComponentTemplateComponent;
  menuPanelComponent = SunMenuPanelComponent;

  items: SunMenuItem[] = [
    { title: 'About', icon: 'question-circle', link: '/settings' },
    { title: 'Add New Device', icon: 'cog', link: '/settings' },
    { separator: true },
    {
      title: 'Edit Device',
      icon: 'cog',
      children: [
        {
          title: 'Edit Device1',
          icon: 'cog',
          link: '/settings'
        },
        {
          separator: true
        },
        {
          title: 'Edit Device2',
          icon: 'cog',
          link: '/settings'
        }
      ]
    },
    {
      title: 'Delete Device',
      icon: 'cog',
      children: [
        {
          title: 'Edit Device3',
          icon: 'cog',
          link: '/settings'
        },
        {
          separator: true
        },
        {
          title: 'Edit Device4',
          icon: 'cog',
          link: '/settings'
        }
      ]
    }
  ];

  show() {
    this.popover.show();
  }
}
