import { NgModule } from '@angular/core';
import { AgentsComponent } from './agents.component';
import {RouterModule, Routes} from '@angular/router';
import { NewUnitComponent } from './component/new-unit/new-unit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {AgentsService} from './agents.service';
import {HttpClientModule} from '@angular/common/http';
import { ConfirmReservationComponent } from './component/confirm-reservation/confirm-reservation.component';
import { RespondMessageComponent } from './component/respond-message/respond-message.component';

const agentRoutes: Routes = [
  {
    path: 'agent', component: AgentsComponent, children: [
      { path: 'new-unit/:id', component: NewUnitComponent},
      { path: 'confirm-rsv/:id', component: ConfirmReservationComponent},
      { path: 'respond-messages', component: RespondMessageComponent},
    ]
  },
];

@NgModule({
  declarations: [AgentsComponent, NewUnitComponent, ConfirmReservationComponent, RespondMessageComponent],
  imports: [
    RouterModule.forRoot(agentRoutes),
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports: [AgentsComponent],
  providers: [
    AgentsService
  ]
})
export class AgentsModule { }
