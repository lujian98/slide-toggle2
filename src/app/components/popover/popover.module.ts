import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SunButtonModule,
  SunPopoverModule,
  SunPanelModule,
  SunMenuModule,
  SunPageHeaderModule
} from 'sunbird-seven-ui';

import { PopoverRoutingModule } from './popover-routing.module';
import { PopoverShowcaseComponent, PopoverDynamicComponent } from './popover-showcase/popover-showcase.component';
import { PopoverComponentTemplateComponent } from './popover-showcase/popover-component-template/popover-component-template.component';

@NgModule({
  declarations: [PopoverShowcaseComponent, PopoverDynamicComponent, PopoverComponentTemplateComponent],
  imports: [
    CommonModule,
    SunButtonModule,
    SunPanelModule,
    SunPopoverModule,
    SunMenuModule,
    SunPageHeaderModule,
    PopoverRoutingModule
  ],
  entryComponents: [PopoverDynamicComponent, PopoverComponentTemplateComponent]
})
export class PopoverModule {}
