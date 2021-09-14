import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SunSlideToggleModule } from './slide-toggle/slide-toggle.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SunSlideToggleModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}

