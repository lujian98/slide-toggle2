import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunPageHeaderModule, SunPanelModule, SunTabsModule } from 'sunbird-seven-ui';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabNavBarShowcaseComponent } from './tab-nav-bar-showcase/tab-nav-bar-showcase.component';

@NgModule({
  declarations: [TabNavBarShowcaseComponent],
  imports: [CommonModule, SunPageHeaderModule, SunPanelModule, SunTabsModule, TabsRoutingModule]
})
export class TabsModule {}
