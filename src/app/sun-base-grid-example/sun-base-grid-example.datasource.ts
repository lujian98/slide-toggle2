import { SunBaseGridExampleDataService } from './sun-base-grid-example-data.service';
import { SunBaseGridDataSource } from 'sunbird-seven-ui';

// It is optonal to define custom data source.
// For the most cases, the defulat data source SunBaseGridDataSource can be used.

export interface Car {
  vin: string;
  year: number;
  brand: string;
  color: string;
}

export class SunBaseGridExampleDataSource extends SunBaseGridDataSource<Car> {
  constructor(
    private carService: SunBaseGridExampleDataService
  ) {
    super();
    this.dataService = carService;
  }
}
