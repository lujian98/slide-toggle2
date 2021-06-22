import { Component, ElementRef, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { SelectionModel } from '@angular/cdk/collections';
import { take } from 'rxjs/operators';
import { SunNestedTreeDataSource, SunTreeNode } from 'sunbird-seven-ui';
import { SunNodeDnDService } from './tree-dnd.service';

const TREE_DATA: SunTreeNode[] = [
  {
    name: 'Fruit',
    icon: 'bell',
    contextMenu: [
      { title: 'About', icon: 'question-circle' },
      { title: 'Rename', icon: 'question-circle' }
    ],
    children: [
      {
        name: 'Apple',
        icon: 'user'
      },
      {
        name: 'Banana',
        icon: 'user',
        readonly: true
      },
      {
        name: 'Fruit loops',
        icon: 'user'
      }
    ]
  },
  {
    name: 'Vegetables',
    icon: 'wrench',
    contextMenu: [
      { title: 'About2', icon: 'question-circle' },
      { title: 'Rename', icon: 'question-circle' }
    ],
    children: [
      {
        name: 'Green',
        icon: 'user',
        readonly: true,
        children: [
          {
            name: 'Broccoli',
            icon: 'trash'
          },
          {
            name: 'Brussels sprouts',
            icon: 'trash'
          }
        ]
      },
      {
        name: 'Orange',
        icon: 'user',
        contextMenu: [
          { title: 'About', icon: 'question-circle', link: '/settings' },
          { title: 'Rename', icon: 'question-circle' },
          { title: 'Add New Device', icon: 'cog', link: '/settings' },
          {
            title: 'Edit Device',
            icon: 'cog',
            children: [
              {
                title: 'Edit Device1',
                icon: 'cog'
              },
              {
                title: 'Rename',
                icon: 'cog'
              }
            ]
          },
          {
            title: 'Delete Device',
            icon: 'cog',
            children: [
              {
                title: 'Rename',
                icon: 'cog'
              },
              {
                title: 'Edit Device4',
                icon: 'cog'
              }
            ]
          }
        ],
        children: [
          {
            name: 'Pumpkins',
            icon: 'cog'
          },
          {
            name: 'Carrots',
            icon: 'cog'
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'app-tree-dnd',
  templateUrl: './tree-dnd.component.html',
  styleUrls: ['./tree-dnd.component.scss']
})
export class TreeDnDComponent implements OnInit {
  treeControl = new NestedTreeControl<SunTreeNode>(node => node.children);
  dataSource: SunNestedTreeDataSource;
  selection: SelectionModel<SunTreeNode>;

  get dragPreviewWidth(): number {
    return this.elementRef.nativeElement.parentElement.clientWidth;
  }

  constructor(private elementRef: ElementRef, private nodeDnDService: SunNodeDnDService) {}

  hasChild = (_: number, node: SunTreeNode) => !!node.children && node.children.length > 0;

  ngOnInit() {
    this.selection = new SelectionModel();
    this.dataSource = new SunNestedTreeDataSource(this.treeControl);
    this.dataSource.data = TREE_DATA;
    this.nodeDnDService.dataSource = this.dataSource;
  }

  dragStart(node: SunTreeNode) {
    this.selection.clear();
    this.nodeDnDService.dragStart(node);
  }

  dragMoved(event) {
    this.nodeDnDService.dragMoved(event);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (this.nodeDnDService.dropInfo) {
      this.nodeDnDService
        .drop(event)
        .pipe(take(1))
        .subscribe((res: boolean | SunTreeNode[]) => {
          console.log(' drop response=', res);
        });
    }
    this.nodeDnDService.clearDragInfo(true);
  }
}
