import { SelectionModel } from '@angular/cdk/collections';
import { Component, HostBinding, HostListener, Input, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, take, takeWhile } from 'rxjs/operators';
import {
  SunTreeNode,
  SunMenuPanelComponent,
  SunMenuItem,
  SunMenuService,
  SunNestedTreeDataSource
} from 'sunbird-seven-ui';

@Component({
  selector: 'app-tree-node-name',
  templateUrl: './node-name.component.html',
  styleUrls: ['./node-name.component.scss']
})
export class AppTreeNodeNameComponent implements OnInit, OnDestroy {
  protected _value: string;
  protected _node: SunTreeNode;
  menuPanelComponent = SunMenuPanelComponent;
  private alive = true;
  selectionChanged$ = new Subject<boolean>();

  @Input()
  get node(): SunTreeNode {
    return this._node;
  }
  set node(node: SunTreeNode) {
    this.value = node.name;
    this._node = node;
  }

  @Input() dataSource: SunNestedTreeDataSource;
  @Input() selection: SelectionModel<SunTreeNode>;

  set value(val: string) {
    this._value = val;
  }

  get value(): string {
    return this._value;
  }

  @HostBinding('class.sun-tree-node-text')
  get treeNodeText() {
    return this.node.name;
  }
  @HostBinding('class.selected')
  get selected() {
    return this.selection && this.selection.isSelected(this.node);
  }

  @ViewChild('inputEl', { static: false }) inputEl: ElementRef;

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.selectionChanged$.next(true);
  }

  @HostListener('dblclick', ['$event'])
  onDblClick(event: MouseEvent) {
    this.selectionChanged$.next(true);
    this.nodeToggle(event);
  }

  constructor(private menuService: SunMenuService) {}

  ngOnInit() {
    this.selectionChanged$
      .pipe(
        debounceTime(300),
        takeWhile(() => this.alive)
      )
      .subscribe(() => this.setNodeSelected());
  }

  ngAfterViewInit(): void {
    this.menuService
      .onItemClick()
      .pipe(takeWhile(() => this.alive))
      .subscribe((item: SunMenuItem) => this.contextMenuClick(item));
  }

  hasChild = () => !!this.node.children && this.node.children.length > 0;

  isEditable = () => {
    if (!this.node.readonly) {
      if (this.node.isEditing && this.inputEl) {
        this.inputEl.nativeElement.focus();
        return true;
      }
      return this.selected;
    }
  };

  nodeToggle(event: MouseEvent) {
    event.stopPropagation();
    if (this.hasChild()) {
      this.dataSource.treeControl.toggle(this.node);
    }
  }

  selectNode() {
    this.selectionChanged$.next(true);
  }

  valueChanged(event: MouseEvent, value: string) {
    this.value = value;
  }

  isValueChanged(): boolean {
    return this.value !== this.node.name;
  }

  onBlur() {
    this.node.isEditing = false;
    if (this.isValueChanged()) {
      this.dataSource
        .treeRenameNode(this.node, this.node.name, this.value)
        .pipe(take(1))
        .subscribe((res: boolean) => {
          if (res) {
            this.node.name = this.value;
          } else {
            console.log(' name change failed!');
            this.value = this.node.name;
          }
        });
    }
  }

  nodeRightClick() {
    this.selectNode();
  }

  private setNodeSelected() {
    if (this.selection) {
      this.selection.select(this.node);
    }
  }

  private contextMenuClick(item) {
    if (item.title === 'Rename') {
      item.data.isEditing = true;
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
