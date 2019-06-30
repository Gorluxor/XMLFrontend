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
import { InboxComponent } from './component/inbox/inbox.component';
import {AccommmodationTypeComponent} from "./component/accommmodation-type/accommmodation-type.component";
import { UnitTypeComponent } from './component/unit-type/unit-type.component';
import { ExtraServiceComponent } from './component/extra-service/extra-service.component';
import { AddAgentComponent } from './component/add-agent/add-agent.component';

const agentRoutes: Routes = [
  {
    path: 'agent', component: AgentsComponent, children: [
      { path: 'new-unit/:id', component: NewUnitComponent},
      { path: 'confirm-rsv/:id', component: ConfirmReservationComponent},
      { path: 'messages/:id', component: RespondMessageComponent},
      { path: 'inbox', component: InboxComponent},
      {path:'acc-types',component:AccommmodationTypeComponent}
    ]
  },
];

@NgModule({
  declarations: [AgentsComponent, NewUnitComponent, ConfirmReservationComponent, RespondMessageComponent, InboxComponent, AccommmodationTypeComponent, UnitTypeComponent, ExtraServiceComponent, AddAgentComponent],
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
