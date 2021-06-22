import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SunGridState, SunInMemoryDataService, SunLoadRecordParams } from 'sunbird-seven-ui';
import { Car } from './sun-base-grid-example.datasource';

@Injectable({
  providedIn: 'root'
})
export class SunBaseGridExampleDataService extends SunInMemoryDataService<Car> {
  dataSourceUrl = './assets/data/cars-huge.json';
  dataSourceKey = 'data';
  gridStatesDemo: SunGridState;

  constructor(protected httpClient: HttpClient) {
    super();
  }

  callRequestService(loadParams: SunLoadRecordParams): Observable<Car[]> {
    if (this.queuedData.length === 0) {
      return this.httpClient.get<Car[]>(this.dataSourceUrl, {}).pipe(
        map(response => {
          if (this.dataSourceKey) {
            response = response[this.dataSourceKey];
          }
          this.queuedData = response;
          this.addDataIndex();
          this.totalRecords = this.queuedData.length;
          return this.getProcessedData(this.queuedData, loadParams);
        })
      );
    } else {
      return super.callRequestService(loadParams);
    }
  }

  private addDataIndex() {
    this.queuedData.forEach((item, index) => {
      item['index'] = index + 1;
      item['createdate'] = this.randomDate(new Date(2000, 0, 1), new Date());
      let value = Math.floor(Math.random() * 1000) - 500;
      if (value < -450) {
        value = null;
      }
      item['rvalue'] = value;
    });
  }

  private randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  onSaveGridStates(gridTableID: string, states: SunGridState): void {
    console.log('save grid states demo');
    console.log(states);
    this.gridStatesDemo = states;
  }

  getGridStates(gridTableID: string): Observable<SunGridState> {
    if (this.gridStatesDemo) {
      console.log('get grid states demo');
      console.log(this.gridStatesDemo);
      return of(this.gridStatesDemo);
    } else {
      return super.getGridStates(gridTableID);
    }
  }
}
