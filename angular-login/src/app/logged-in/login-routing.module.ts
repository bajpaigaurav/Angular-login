import { LoggedInComponentComponent } from './logged-in-component/logged-in-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path:'', component: LoggedInComponentComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class LoggedInRoutingModule { 
}
