import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolbarShowcaseComponent } from './toolbar-showcase/toolbar-showcase.component';

const routes: Routes = [{ path: '', component: ToolbarShowcaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolbarRoutingModule {}
