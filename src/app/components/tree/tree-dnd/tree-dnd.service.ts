import { Injectable } from '@angular/core';
import { SunTreeNode, SunTreeNodeDnDService, SunDropPosition } from 'sunbird-seven-ui';

@Injectable()
export class SunNodeDnDService extends SunTreeNodeDnDService {
  isNodeDroppable(node: SunTreeNode, target: SunTreeNode, position: SunDropPosition): boolean {
    // allow custom node dropable
    if (target.name === 'Banana') {
      this.clearDragInfo();
      return false;
    } else {
      return super.isNodeDroppable(node, target, position);
    }
  }
}
