import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { SunNestedTreeDataSource, SunTreeNode } from 'sunbird-seven-ui';

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
  selector: 'app-tree-showcase',
  templateUrl: './tree-showcase.component.html',
  styleUrls: ['./tree-showcase.component.scss']
})
export class TreeShowcaseComponent implements OnInit {
  treeControl = new NestedTreeControl<SunTreeNode>(node => node.children);
  dataSource: SunNestedTreeDataSource;
  data: SunTreeNode[] = TREE_DATA;
  selection: SelectionModel<SunTreeNode>;

  hasChild = (_: number, node: SunTreeNode) => !!node.children && node.children.length > 0;

  ngOnInit() {
    this.selection = new SelectionModel();
    this.dataSource = new SunNestedTreeDataSource(this.treeControl);
    this.dataSource.data = this.data;
  }
}
