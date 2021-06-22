import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunSpinnerModule, SunPanelModule, SunButtonModule, SunPageHeaderModule } from 'sunbird-seven-ui';

import { SpinnerRoutingModule } from './spinner-routing.module';
import { SpinnerShowcaseComponent } from '../spinner-showcase/spinner-showcase.component';

@NgModule({
  declarations: [SpinnerShowcaseComponent],
  imports: [CommonModule, SunButtonModule, SunPanelModule, SunSpinnerModule, SunPageHeaderModule, SpinnerRoutingModule]
})
export class SpinnerModule {}
