import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutocompleteShowcaseComponent } from './autocomplete-showcase/autocomplete-showcase.component';

const routes: Routes = [{ path: '', component: AutocompleteShowcaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutocompleteRoutingModule {}
