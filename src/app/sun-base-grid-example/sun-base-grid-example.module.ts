import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

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

import { SunCellRendererService } from 'sunbird-seven-ui';
import { CustomRightMenuComponent } from './dialogs/custom-right-menu.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [{ prefix: './assets/i18n/shared/', suffix: '.json' }]);
}

import { SunBaseGridExampleRoutingModule } from './sun-base-grid-example-routing.module';

@NgModule({
  declarations: [SunBaseGridExampleComponent, CustomRightMenuComponent],
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
    SunGridModule,
    SunMenuModule,
    SunToolBarModule,
    SunDialogModule,
    SunPanelModule,
    SunCheckboxModule,
    SunBaseGridExampleRoutingModule
  ],
  exports: [SunBaseGridExampleComponent, CustomRightMenuComponent],
  entryComponents: [CustomRightMenuComponent],
  providers: [
    SunBaseGridExampleDataService,
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
