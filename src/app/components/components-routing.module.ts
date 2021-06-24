import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { AppComponentComponent } from './component.component';
import { TreeModule } from './tree/tree.module';

const routes: Route[] = [
  {
    path: '',
    component: AppComponentComponent,
    children: [
      {
        path: 'autocomplete',
        loadChildren: () => AutocompleteModule
      },
      {
        path: 'ldap',
        loadChildren: './ldap/ldap.module#LdapModule',
      },
      {
        path: 'gridexample',
        loadChildren: '../sun-base-grid-example/sun-base-grid-example.module#SunBaseGridExampleModule',
      },
      {
        path: 'grid-demo',
        // loadChildren: './grid-demo/grid-demo.module#GridDemoModule',
      },
      {
        path: 'tree',
        loadChildren: () => TreeModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
