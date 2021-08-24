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

export interface SensorMapKey {
  key: string;
  label: string;
}

export interface SensorMapItem {
  id: string;
  name: string;
  key: string;
}

@Component({
  selector: 'app-css-grid',
  templateUrl: './css-grid.component.html',
  styleUrls: ['./css-grid.component.scss']
})
export class CssGridComponent implements OnInit {
  sensorMapKeys: SensorMapKey[] = [
    { key: "Door", label: "Door" },
    { key: "Handle", label: "Handle" },
    { key: "Lock", label: "Lock" }
  ];
  availableSensors: SensorMapItem[] = [];
  sensorMapList: SensorMapItem[][];

  sensorDropConnections: CdkDropList<SensorMapItem>[][] = [];
  availableConnections: CdkDropList<SensorMapItem>[] = [];
  mappingPlaceholder: boolean[] = [];

  isDragStat = false;

  @ViewChildren('sensorMapDropList') sensorMapDropList: QueryList<CdkDropList<SensorMapItem>>;
  @ViewChild('availableDropList', { static: true }) availableDropList: CdkDropList<SensorMapItem>;

  ngOnInit() {
    this.initProps();
    this.emitMapping();
  }

  connectDropsites() {
    const mapIds = this.sensorMapList.map((v) => v.length > 0 ? v[0].id : null);
    console.log(' mapIds=', mapIds);
    this.availableSensors = this.availableSensors.filter((data) => {
      return mapIds.filter((id) => id && id === data.id).length === 0;
    });

    const naArr = this.sensorMapDropList.toArray();
    this.availableConnections = naArr.filter((_na, idx) => this.sensorMapList[idx].length === 0);
    this.sensorDropConnections = naArr.map((_cd, idx) => {
      const conns = naArr.filter((_na, naIdx) => naIdx !== idx && this.sensorMapList[naIdx].length === 0);
      conns.push(this.availableDropList);
      return conns;
    });

    console.log(`sensorMapKeys=`, this.sensorMapKeys)
    console.log(`sensorMapList=`, this.sensorMapList)
    // console.log( ' newMapping xxx= ', this.newMapping)
    console.log(`available=`, this.availableSensors)

    console.log(`sensorDropConnections=`, this.sensorDropConnections)
    console.log(`availableConnections=`, this.availableConnections)
    this.mappingPlaceholder = this.sensorMapList.map((v) => v.length === 0);

    console.log(`mappingPlaceholder=`, this.mappingPlaceholder)
  }

  emitMapping() {
    // const mapping: Mapping = {};
    this.sensorMapList.forEach((v, idx) => {
      // mapping[this.sensorMapKeys[idx].key] = (v.length > 0) ? v[0].key : null;
    });
    // this.mapping.emit(mapping);
  }

  initProps() {
    this.sensorMapList = [
      [],
      [{ id: '12', key: 'Handle', name: 'Contact Handle2' }],
      []
    ];

    this.availableSensors = [
      { id: '12', key: "Door", name: "Contact Handle2" },
      { id: '13', key: "Handle", name: "Handle" },
      { id: '14', key: "Lock", name: "Lock" },
      { id: '15', key: "E", name: "E" },
      { id: '16', key: "F", name: "F" }
    ];
  }


  ngAfterViewInit() {
    // Change template data bindings after current event loop tick as per
    // https://angular.io/guide/component-interaction#parent-calls-an-viewchild
    setTimeout(() => this.connectDropsites());
  }


  cdkDragDrop(event: CdkDragDrop<SensorMapItem[]>, idx: number) {
    console.log(' dropped=', event)
    this.isDragStat = false;
    if (event.previousContainer === event.container) {
      console.log(' 111111111111111 dropped=', event)
/*
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      */
    } else {
      console.log(' 22222222222 dropped=', event)
      console.log(' event.previousContainer.data=', event.previousContainer.data)
      console.log(' event.container.data=', event.container.data)
      console.log('event.previousIndex=', event.previousIndex)
      console.log(' event.currentIndex=', event.currentIndex)
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.connectDropsites();
      // this.emitMapping();
    }
  }


  setMapPlaceholder(event, idx: number, show: boolean) {

    // this.mappingPlaceholder[idx] = show;
    console.log(`mappingPlaceholder=`, event)
  }

  cdkDropListEnterPredicate(mappedItem) {
    // console.log(' qqqqqqqqqqq cdkDropListEnterPredicate=', mappedItem)
    return (drag: CdkDrag<number>): boolean => {
     //  console.log(' qqqqqqqqqqq drag=', drag)

      return true;
    };
  }

  cdkDragMoved(event) {
    console.log('drag move =', event)
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
