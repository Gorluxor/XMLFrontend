import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import {RouterModule, Routes} from '@angular/router';
import {AgentsComponent} from '../../../agents/src/lib/agents.component';
import {NewUnitComponent} from '../../../agents/src/lib/component/new-unit/new-unit.component';
import {ConfirmReservationComponent} from '../../../agents/src/lib/component/confirm-reservation/confirm-reservation.component';
import {RespondMessageComponent} from '../../../agents/src/lib/component/respond-message/respond-message.component';
import {InboxComponent} from '../../../agents/src/lib/component/inbox/inbox.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { SearchComponent } from './component/search/search.component';

const userRoutes: Routes = [
  {
    path: 'user', component: UserComponent, children: [
      { path: 'search', component: SearchComponent},
    ]
  },
];

@NgModule({
  declarations: [UserComponent, SearchComponent],
  imports: [
    RouterModule.forRoot(userRoutes),
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports: [UserComponent]
})
export class UserModule { }
