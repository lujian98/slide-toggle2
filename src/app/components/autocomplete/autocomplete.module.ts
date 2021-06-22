import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  SunPageHeaderModule,
  SunPanelModule,
  SunIconModule,
  SunToolbarModule,
  SunDynamicFormModule,
  SunSelectModule,
  SunFormFieldModule,
  SunOptionModule,
  SunAutocompleteModule,
  SunInputModule,
  SunPipesModule
} from 'sunbird-seven-ui';

import { AutocompleteRoutingModule } from './autocomplete-routing.module';
import { AutocompleteShowcaseComponent } from './autocomplete-showcase/autocomplete-showcase.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [AutocompleteShowcaseComponent, FilterPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SunFormFieldModule,
    SunAutocompleteModule,
    SunDynamicFormModule,
    SunSelectModule,
    SunPageHeaderModule,
    SunPanelModule,
    SunToolbarModule,
    SunOptionModule,
    SunInputModule,
    SunIconModule,
    SunPipesModule,
    AutocompleteRoutingModule
  ]
})
export class AutocompleteModule {}
