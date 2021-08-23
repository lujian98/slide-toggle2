import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { RemappingComponent } from './remapping/remapping.component';
import { CdkDragDropConnectedSortingExample } from './drag-drop/cdk-drag-drop-connected-sorting-example';
import { CssGridComponent } from './grid/css-grid.component';

@NgModule({
  declarations: [AppComponent, RemappingComponent, CssGridComponent, CdkDragDropConnectedSortingExample],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}

