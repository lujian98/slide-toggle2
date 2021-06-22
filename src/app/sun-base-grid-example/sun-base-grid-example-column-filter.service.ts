import { Injectable } from '@angular/core';
import { SunColumnFilterService } from 'sunbird-seven-ui';
import { SunOverrideTextFilterComponent } from './text/override-text-filter.component';

@Injectable({
  providedIn: 'root'
})
export class SunBaseGridExampleColumnFilterService extends SunColumnFilterService {
  constructor(
  ) {
    super();
    // this.componentMapper['text'] = SunOverrideTextFilterComponent;
  }
}
