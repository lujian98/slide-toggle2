import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import {
  SunNavbarModule,
  SunDropdownModule,
  SunMenuModule,
  SunSearchModule,
  SunOverlayModule,
  SunDialogModule,
  SunThemeModule,
  SunLayoutModule,
  SunIconModule,
  SunAuthModule,
  SunTooltipModule
} from 'sunbird-seven-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';

import { SunBaseGridExampleModule } from './sun-base-grid-example/sun-base-grid-example.module';

/*
import { SimpleDateModule } from './simple-date/simple-date.module';
import { Example1Module } from './example1/example1.module';
import { Example2Module } from './example2/example2.module';

import { SettingsModule } from './settings/settings.module';

import { SunTabbedViewExampleModule } from './tabbed-view/sun-tabbed-view-example.module';
*/

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SunDropdownModule,
    SunIconModule,
    SunMenuModule,
    SunNavbarModule,
    SunBaseGridExampleModule,
    // SunTabbedViewExampleModule,
    // SimpleDateModule,
    SunSearchModule,
    // Example1Module,
    // Example2Module,
    AppRoutingModule,
    SunLayoutModule,
    SunAuthModule.forRoot({ baseEndpoint: 'http://localhost:3000/' }),
    SunOverlayModule.forRoot(),
    SunThemeModule.forRoot(),
    SunDialogModule.forRoot(),
    TranslateModule.forRoot(),
    // SettingsModule,
    SunTooltipModule
  ],
  providers: [AppService, SunMenuModule.forRoot().providers],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['en-US', 'fr']);
    this.translateService.setDefaultLang('en-US');
  }
}
