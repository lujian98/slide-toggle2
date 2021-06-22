import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopoverShowcaseComponent } from './popover-showcase/popover-showcase.component';

const routes: Routes = [{ path: '', component: PopoverShowcaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopoverRoutingModule {}
