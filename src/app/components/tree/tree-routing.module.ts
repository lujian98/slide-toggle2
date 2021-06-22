import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeShowcaseComponent } from './tree-showcase/tree-showcase.component';
import { TreeDnDComponent } from './tree-dnd/tree-dnd.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'showcase',
        component: TreeShowcaseComponent
      },
      {
        path: 'dnd',
        component: TreeDnDComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeRoutingModule {}
