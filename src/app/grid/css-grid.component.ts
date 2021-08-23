import {
  Component,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDragStart, CdkDrag,
  CdkDropList,
  // CdkDrop,
} from '@angular/cdk/drag-drop';

import { keys, values } from 'lodash';

import { Mapping, MapItem } from '../types';
import { getAvailableKeys, toMapItem } from '../utils';

@Component({
  selector: 'app-css-grid',
  templateUrl: './css-grid.component.html',
  styleUrls: ['./css-grid.component.scss']
})
export class CssGridComponent implements OnInit {
  sensorMapKeys: MapItem[] = [];
  sensorMapList: MapItem[][] = [];
  availableSensors: MapItem[] = [];
  sensorDropConnections: CdkDropList<MapItem>[][] = [];
  availableConnections: CdkDropList<MapItem>[] = [];
  mappingPlaceholder: boolean[] = [];

  isDragStat = false;
  sensorMapping: Mapping = {
    Door: null,
    Handle: 'Contact Handle 1',
    Lock: null
  };

  @ViewChildren('sensorMapDropList') sensorMapDropList: QueryList<CdkDropList<MapItem>>;
  @ViewChild('availableDropList', { static: true }) availableDropList: CdkDropList<MapItem>;

  ngOnInit() {
    this.initProps();
    this.emitMapping();

  }

  connectDropsites() {
    const naArr = this.sensorMapDropList.toArray();
    this.availableConnections = naArr.filter((_na, idx) => this.sensorMapList[idx].length === 0);
    this.sensorDropConnections = naArr.map((_cd, idx) => {
      const conns = naArr.filter((_na, naIdx) => naIdx !== idx
        && this.sensorMapList[naIdx].length === 0);
      conns.push(this.availableDropList);
      return conns;
    });

    console.log(`sensorMapKeys=`, this.sensorMapKeys)
    console.log(`sensorMapList=`, this.sensorMapList)
    console.log(`available=`, this.availableSensors)

    console.log(`sensorDropConnections=`,this.sensorDropConnections)
    console.log(`availableConnections=`, this.availableConnections)
    console.log(`mappingPlaceholder=`, this.mappingPlaceholder)
  }

  emitMapping() {
    const mapping: Mapping = {};
    this.sensorMapList.forEach((v, idx) => {
      mapping[this.sensorMapKeys[idx].key] = (v.length > 0) ? v[0].key : null;
    });
    // this.mapping.emit(mapping);
  }

  initProps() {
    this.sensorMapKeys = keys(this.sensorMapping).map(toMapItem);
    this.availableSensors = getAvailableKeys(this.sensorMapping).map(toMapItem);
    this.availableSensors.push({
      key: "E", displayName: "E"
    },{
      key: "F", displayName: "F"
    });
    const vals = values(this.sensorMapping);
    this.sensorMapList = vals.map(v => v ? [toMapItem(v)] : []);
    this.mappingPlaceholder = vals.map(v => !v);
  }

  /**
   * Calls initializer method(s) that use the @ViewChild and @ViewChildren properties.
   */
  ngAfterViewInit() {
    // Change template data bindings after current event loop tick as per
    // https://angular.io/guide/component-interaction#parent-calls-an-viewchild
    setTimeout(() => this.connectDropsites());
  }

  /**
   * Performs all the backing changes that must happen when a draggable item is dropped into
   * a dropsite.
   *
   * Specifically: Rearrange the items when an item is dropped within the same dropsite, else:
   * 1. Move the item to the new dropsite's backing array,
   * 2. Update the dropsites' sensorDropConnections to each other, and
   * 3. Emit the new item map via the mapping @Output.
   *
   * @param event Event from cdk-drop's "dropped" event.
   */
  cdkDragDrop(event: CdkDragDrop<MapItem[]>, idx: number) {
    console.log( ' dropped=', event)
    this.isDragStat = false;
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.mappingPlaceholder[idx] = false;
      this.connectDropsites();
      this.emitMapping();
    }
  }

  /**
   * Sets whether the "Drag and drop here to assign" message is displayed in one of the
   * dropsites in the "New Assignments" column.
   *
   * @param idx Index of the dropsite in the "New Assignments" column.
   * @param show Whether the placeholder should be shown in that dropsite.
   */
  setMapPlaceholder(idx: number, show: boolean) {

    // this.mappingPlaceholder[idx] = show;
    console.log(`mappingPlaceholder=`, this.mappingPlaceholder)
  }

  cdkDragMoved() {
   console.log('drag move')
   this.isDragStat = true;
    // this.mappingPlaceholder[0] = false;
  }

  cdkDragEnded() {
    console.log('cdkDragExited not working')
    this.isDragStat = false;
  }

  cdkDropListDropped() {
    // this.isDragStat = false;
  }

  CdkDragEnter() {
    console.log('drag enter')
  }

}
