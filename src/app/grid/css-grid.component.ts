import {
  Component,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ViewChild,
  Inject,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import {
  CdkDragDrop,
} from '@angular/cdk/drag-drop';

export interface SensorMapKey {
  key: string;
  label: string;
}

export interface SensorMapItem {
  id: string;
  name: string;
  type: string;
  status: string;
  pdu: string;
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
  sensorMapList: SensorMapItem[];
  mappingPlaceholder: boolean[] = [];

  sensorMapIndex: string;
  mappedOverRemove: string;
  isDragStat = false;
  dragType: string;

  constructor(@Inject(DOCUMENT) private document) { }

  initData() {
    this.sensorMapList = [
      null,
      { id: '12', type: 'Contact', name: 'Contact Handle2', status: 'closed', pdu: '192.168.1.12'  },
      null
    ];

    this.availableSensors = [
      // { id: '12', type: "Contact", name: "Contact Handle2", status: 'closed', pdu: '192.168.1.12' },
      { id: '13', type: "Handle", name: "Handle", status: 'open', pdu: '192.168.1.13' },
      { id: '14', type: "Lock", name: "Lock", status: 'locked', pdu: '192.168.1.14' },
      { id: '15', type: "Temperature", name: "E", status: 'closed', pdu: '192.168.1.15' },
      { id: '17', type: "Door", name: "Door1", status: 'closed', pdu: '192.168.1.17' },
      { id: '18', type: "Door", name: "Door2", status: 'closed', pdu: '192.168.1.18' },
      { id: '19', type: "Door", name: "Door3", status: 'closed', pdu: '192.168.1.19' },
      { id: '20', type: "Door", name: "Door4", status: 'closed', pdu: '192.168.1.20' },
      { id: '16', type: "Door", name: "Door5", status: 'closed', pdu: '192.168.1.16' },
    ];
  }

  ngOnInit() {
    this.initData();
    this.setPlaceHolders()
  }

  private setPlaceHolders() {
    const mapIds = this.sensorMapList.map((v) => v ? v.id : null);
    this.availableSensors = this.availableSensors.filter((data) => {
      return mapIds.filter((id) => id && id === data.id).length === 0;
    });
    this.mappingPlaceholder = this.sensorMapList.map((v) => !v);
  }

  cdkDragMoved(event, type) {
    this.dragType = type;
    this.sensorMapIndex = null;
    this.mappedOverRemove = null;
    this.isDragStat = true;
    const e = this.document.elementFromPoint(event.pointerPosition.x, event.pointerPosition.y);
    if (!e) {
      return;
    }
    const container = e.classList.contains('drag-drop-over') ? e : e.closest('.drag-drop-over');
    if (!container) {
      return;
    }
    this.sensorMapIndex = container.getAttribute('sensor-map-index');
    this.mappedOverRemove = container.getAttribute('sensor-map-remove');
  }

  cdkDragDrop(event: CdkDragDrop<SensorMapItem[]>, type: string) {
    this.dragType = '';
    this.isDragStat = false;
    if (type === 'add' && this.sensorMapIndex !== null) {
      if (this.sensorMapList[this.sensorMapIndex]) {
        this.availableSensors.push(this.sensorMapList[this.sensorMapIndex]);
      }
      this.sensorMapList[this.sensorMapIndex] = event.item.data;
    } else if (type === 'remove' && this.mappedOverRemove !== null) {
      const findIndex = this.sensorMapList.findIndex((data) => data && data.id === event.item.data.id);
      if (findIndex !== -1) {
        this.availableSensors.push(this.sensorMapList[findIndex]);
        this.sensorMapList[findIndex] = null;
      }
    }
    this.setPlaceHolders();
  }

  emitMapping() { // TODO for save data
    // const mapping: Mapping = {};
    this.sensorMapList.forEach((v, idx) => {
      // mapping[this.sensorMapKeys[idx].key] = (v.length > 0) ? v[0].key : null;
    });
    // this.mapping.emit(mapping);
  }
}
