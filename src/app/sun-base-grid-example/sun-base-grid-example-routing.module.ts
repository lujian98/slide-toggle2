import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SunBaseGridExampleComponent } from './sun-base-grid-example.component';

const routes: Routes = [{ path: '', component: SunBaseGridExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SunBaseGridExampleRoutingModule {}
