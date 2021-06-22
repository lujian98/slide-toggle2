import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTreeModule } from '@angular/cdk/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SunPanelModule, SunTreeModule, SunIconModule, SunPopoverModule, SunPageHeaderModule } from 'sunbird-seven-ui';

import { TreeRoutingModule } from './tree-routing.module';
import { TreeShowcaseComponent } from './tree-showcase/tree-showcase.component';
import { TreeDnDComponent } from './tree-dnd/tree-dnd.component';
import { AppTreeNodeNameComponent } from './node-name/node-name.component';
import { SunNodeDnDService } from './tree-dnd/tree-dnd.service';

@NgModule({
  declarations: [TreeShowcaseComponent, TreeDnDComponent, AppTreeNodeNameComponent],
  imports: [
    CommonModule,
    CdkTreeModule,
    DragDropModule,
    SunPanelModule,
    SunTreeModule,
    SunIconModule,
    SunPageHeaderModule,
    SunPopoverModule,
    TreeRoutingModule
  ],
  exports: [TreeShowcaseComponent, TreeDnDComponent, AppTreeNodeNameComponent],
  providers: [SunNodeDnDService]
})
export class TreeModule {}
