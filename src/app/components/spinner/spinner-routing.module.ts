import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpinnerShowcaseComponent } from '../spinner-showcase/spinner-showcase.component';

const routes: Routes = [{ path: '', component: SpinnerShowcaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpinnerRoutingModule {}
