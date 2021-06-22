import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabNavBarShowcaseComponent } from './tab-nav-bar-showcase/tab-nav-bar-showcase.component';

const routes: Routes = [{ path: '', component: TabNavBarShowcaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule {}
