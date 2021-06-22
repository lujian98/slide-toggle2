import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponentComponent } from './component.component';
import { SpinnerModule } from './spinner/spinner.module';
import { PopoverModule } from './popover/popover.module';
import { TreeModule } from './tree/tree.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { TabsModule } from './tabs/tabs.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { LdapModule } from './ldap/ldap.module';

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
export class ComponentsRoutingModule {}
