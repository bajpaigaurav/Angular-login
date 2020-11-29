import { LoggedInRoutingModule } from './logggedin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedInComponentComponent } from './logged-in-component/logged-in-component.component';



@NgModule({
  declarations: [LoggedInComponentComponent],
  imports: [
    LoggedInRoutingModule,
    CommonModule
  ]
})
export class LoggedInModule { }
