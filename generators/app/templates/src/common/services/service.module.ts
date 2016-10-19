import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { DialogService } from './dialog.service';
import { RestoreService } from './restore.service';

@NgModule({
  providers: [
    ApiService,
    DialogService,
    RestoreService,
  ],
})
export class ServiceModule {
}