import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import {RouterModule, Routes} from '@angular/router';
import {AgentsComponent} from '../../../agents/src/lib/agents.component';
import {NewUnitComponent} from '../../../agents/src/lib/component/new-unit/new-unit.component';
import {ConfirmReservationComponent} from '../../../agents/src/lib/component/confirm-reservation/confirm-reservation.component';
import {RespondMessageComponent} from '../../../agents/src/lib/component/respond-message/respond-message.component';
import { NewAgentComponent } from './component/new-agent/new-agent.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { ManageUsersComponent } from './component/manage-users/manage-users.component';
import { ManageExtraServicesComponent } from './component/manage-extra-services/manage-extra-services.component';
import { ManageAccTypeComponent } from './component/manage-acc-type/manage-acc-type.component';

const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'new-agent', component: NewAgentComponent},
      { path: 'users', component: ManageUsersComponent},
      { path: 'accTypes', component: ManageAccTypeComponent},
      { path: 'extraServices', component: ManageExtraServicesComponent}


    ]
  },
];
@NgModule({
  declarations: [AdminComponent, NewAgentComponent, ManageUsersComponent, ManageExtraServicesComponent, ManageAccTypeComponent],
  imports: [
    RouterModule.forRoot(adminRoutes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
