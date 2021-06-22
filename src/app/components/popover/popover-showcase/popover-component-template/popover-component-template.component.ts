import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sun-popover-component-template',
  templateUrl: './popover-component-template.component.html',
  styleUrls: ['./popover-component-template.component.scss']
})
export class PopoverComponentTemplateComponent implements OnInit {
  @Input() close: any;
  constructor() {}

  ngOnInit() {}
}
