import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipShowcaseComponent } from './tooltip-showcase/tooltip-showcase.component';

const routes: Routes = [{ path: '', component: TooltipShowcaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TooltipRoutingModule {}
