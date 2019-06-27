import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AgentsComponent} from '../../projects/agents/src/lib/agents.component';
import {RouterModule, Routes} from '@angular/router';
import {AgentsModule} from '../../projects/agents/src/lib/agents.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {HttpClientModule} from '@angular/common/http';
import {AdminModule} from '../../projects/admin/src/lib/admin.module';

const appRoutes: Routes = [
 // { path: 'agent', component: AgentsComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgentsModule,
    AdminModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
 //     {enableTracing: true}
    )
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
