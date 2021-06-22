import { NgModule } from '@angular/core';
import { SunLdapModule } from 'sunbird-seven-ui';

@NgModule({
  imports: [SunLdapModule.forRoot({ baseEndpoint: 'http://localhost:3000/ldapr/' })]
})
export class LdapModule {}
