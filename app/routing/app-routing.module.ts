import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent }  from '../module-first/first.component';
import { SecondComponent }  from '../module-second/second.component';

const routes: Routes = [
  { path: '', redirectTo: '/first-component', pathMatch: 'full' },
  { path: 'first-component',  component: FirstComponent },
  { path: 'second-component',  component: SecondComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}