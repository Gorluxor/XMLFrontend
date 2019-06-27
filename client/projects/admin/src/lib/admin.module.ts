import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import {RouterModule, Routes} from '@angular/router';
import {AgentsComponent} from '../../../agents/src/lib/agents.component';
import {NewUnitComponent} from '../../../agents/src/lib/component/new-unit/new-unit.component';
import {ConfirmReservationComponent} from '../../../agents/src/lib/component/confirm-reservation/confirm-reservation.component';
import {RespondMessageComponent} from '../../../agents/src/lib/component/respond-message/respond-message.component';
import { NewAgentComponent } from './component/new-agent/new-agent.component';

const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'new-agent', component: NewAgentComponent}
    ]
  },
];
@NgModule({
  declarations: [AdminComponent, NewAgentComponent],
  imports: [
    RouterModule.forRoot(adminRoutes)
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
