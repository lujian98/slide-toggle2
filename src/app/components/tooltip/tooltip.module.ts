import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SunButtonModule,
  SunPanelModule,
  SunMenuModule,
  SunPageHeaderModule,
  SunTooltipModule
} from 'sunbird-seven-ui';
import { TooltipShowcaseComponent } from './tooltip-showcase/tooltip-showcase.component';
import { TooltipRoutingModule } from './tooltip-routing.module';

@NgModule({
  declarations: [TooltipShowcaseComponent],
  imports: [
    CommonModule,
    SunButtonModule,
    SunPanelModule,
    SunMenuModule,
    SunPageHeaderModule,
    SunTooltipModule,
    TooltipRoutingModule
  ],
  entryComponents: [TooltipShowcaseComponent]
})
export class TooltipModule {}
