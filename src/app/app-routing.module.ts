import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { SunBaseGridExampleComponent } from './sun-base-grid-example/sun-base-grid-example.component';

const routes: Routes = [
  { path: 'sun-base-grid-example', component: SunBaseGridExampleComponent },
  {
    path: 'components',
    // loadChildren: () => ComponentsModule
    loadChildren: './components/components.module#ComponentsModule',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
