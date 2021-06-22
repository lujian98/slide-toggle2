import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SunSidebarModule, SunMenuModule } from 'sunbird-seven-ui';

import { ComponentsRoutingModule } from './components-routing.module';
import { AppComponentComponent } from './component.component';

@NgModule({
  imports: [CommonModule, ComponentsRoutingModule, SunMenuModule, SunSidebarModule],
  declarations: [AppComponentComponent]
})
export class ComponentsModule {}
