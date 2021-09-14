import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunSlideToggleComponent } from './slide-toggle.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SunSlideToggleComponent],
  exports: [SunSlideToggleComponent],
  providers: []
})
export class SunSlideToggleModule {}
