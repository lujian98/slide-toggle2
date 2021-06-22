import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunPageHeaderModule, SunPanelModule, SunToolbarModule } from 'sunbird-seven-ui';

import { ToolbarRoutingModule } from './toolbar-routing.module';
import { ToolbarShowcaseComponent } from './toolbar-showcase/toolbar-showcase.component';

@NgModule({
  declarations: [ToolbarShowcaseComponent],
  imports: [CommonModule, SunPageHeaderModule, SunPanelModule, SunToolbarModule, ToolbarRoutingModule]
})
export class ToolbarModule {}
