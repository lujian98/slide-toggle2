import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import {
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import {
  SunGridModule,
  SunMenuModule,
  SunToolBarModule,
  SunDialogModule,
  SunPanelModule,
  SunCheckboxModule
} from 'sunbird-seven-ui';
import { SunBaseGridExampleDataService } from './sun-base-grid-example-data.service';
import { SunBaseGridExampleComponent } from './sun-base-grid-example.component';

import { SunBaseGridExampleColumnFilterService } from './sun-base-grid-example-column-filter.service';
import { SunOverrideTextFilterComponent } from './text/override-text-filter.component';

import { SunCellRendererService } from 'sunbird-seven-ui';
import { CustomRightMenuComponent } from './dialogs/custom-right-menu.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [{ prefix: './assets/i18n/shared/', suffix: '.json' }]);
}

import { SunBaseGridExampleRoutingModule } from './sun-base-grid-example-routing.module';

@NgModule({
  declarations: [SunBaseGridExampleComponent, SunOverrideTextFilterComponent, CustomRightMenuComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    SunGridModule,
    SunMenuModule,
    SunToolBarModule,
    SunDialogModule,
    SunPanelModule,
    SunCheckboxModule,
    SunBaseGridExampleRoutingModule
  ],
  exports: [SunBaseGridExampleComponent, SunOverrideTextFilterComponent, CustomRightMenuComponent],
  entryComponents: [SunOverrideTextFilterComponent, CustomRightMenuComponent],
  providers: [
    SunBaseGridExampleDataService,
    SunBaseGridExampleColumnFilterService,
    SunCellRendererService,
    TranslateService
  ]
})
export class SunBaseGridExampleModule {
  constructor(private translate: TranslateService) {
    // translate.addLangs(['en', 'ja', 'de', 'zh', 'fr']);
    // translate.setDefaultLang('en');
    // translate.use('en');
  }
}
