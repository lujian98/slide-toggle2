

To use this basic shard grid components: (see example: app/table/sun-base-grid-example)

1: define columns in the sun-base-grid-example.component

import { SunBaseGridComponent } from 'sunbird-seven-ui';
export class SunBaseGridExampleComponent extends SunBaseGridComponent implements OnInit {

  ngOnInit() {
    this.columns = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
    super.ngOnInit();
  }


2: provide initalDataSource in the sun-base-grid-example.component which extend the GridComponent class.

import { SunBaseGridExampleDataService } from './sun-base-grid-example-data.service';

  constructor(
      protected dataSourceService: SunBaseGridExampleDataService,
    ) {
        super();
  }

  protected initalDataSource() {
    this.dataSourceService.getAllData()
    .subscribe(
      (data: any[]) => {
          this.dataSource.data = data['data'];
      },
      (err: any) => console.log(err)
    );
  }

3: add data source service sun-base-grid-example-data.service for initalDataSource

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SunBaseGridExampleDataService {
  constructor(
    private http: HttpClient,
  ) {
  }
  getAllData(): Observable<any[]> {
    return this.http.get<any[]>('./assets/data/cars-huge.json');
  }
}



4: Use grid template view selector to display the grid view:

<sun-grid-view
  [columns]="columns"
  [dataSource]="dataSource">
</sun-grid-view>

5: Create the sun-base-grid-example.module to be used in the App.

import { NgModule } from '@angular/core';

import { SunGridModule } from 'sunbird-seven-ui';

import { SunBaseGridExampleComponent } from './sun-base-grid-example.component';
import { SunBaseGridExampleDataService } from './sun-base-grid-example-data.service';

@NgModule({
  declarations: [
    SunBaseGridExampleComponent,
  ],
  imports: [
    SunGridModule,
  ],
  exports: [
    SunBaseGridExampleComponent,
  ],
  providers: [
    SunBaseGridExampleDataService
  ]
})
export class SunBaseGridExampleModule {}


