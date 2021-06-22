import { Component } from '@angular/core';
import { SunColumnFilterComponent, SunTextField } from 'sunbird-seven-ui';

@Component({
  selector: 'app-text-filter',
  templateUrl: './override-text-filter.component.html'
})
export class SunOverrideTextFilterComponent<T> extends SunColumnFilterComponent<T> {
  column: SunTextField;

  constructor() {
    super();
  }
}
