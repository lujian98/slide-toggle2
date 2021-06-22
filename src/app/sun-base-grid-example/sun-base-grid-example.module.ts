import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import { SunGridModule } from 'sunbird-seven-ui';
import { SunBaseGridExampleDataService } from './sun-base-grid-example-data.service';
import { SunBaseGridExampleComponent } from './sun-base-grid-example.component';

import { SunCellRendererService } from 'sunbird-seven-ui';

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [{ prefix: './assets/i18n/shared/', suffix: '.json' }]);
}

import { SunBaseGridExampleRoutingModule } from './sun-base-grid-example-routing.module';

@NgModule({
  declarations: [SunBaseGridExampleComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SunGridModule,
    SunBaseGridExampleRoutingModule
  ],
  exports: [SunBaseGridExampleComponent],
  entryComponents: [],
  providers: [
    SunBaseGridExampleDataService,
    SunCellRendererService,
    TranslateService
  ]
})
export class SunBaseGridExampleModule {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ja', 'de', 'zh', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
