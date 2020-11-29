import { ApiEndpointsService } from './api-endpoints.service';
import { ApiHttpService } from './api-http.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { Constants } from '../constants/Constants';

@NgModule({
  providers: [Constants,ApiHttpService, ApiEndpointsService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}