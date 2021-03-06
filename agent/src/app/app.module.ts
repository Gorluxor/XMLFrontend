import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {NewUnitComponent} from './component/new-unit/new-unit.component';
import {ConfirmReservationComponent} from './component/confirm-reservation/confirm-reservation.component';
import {RespondMessageComponent} from './component/respond-message/respond-message.component';
import {InboxComponent} from './component/inbox/inbox.component';
import {AgentReservationsComponent} from './component/agent-reservations/agent-reservations.component';
import {OccupyUnitComponent} from './component/occupy-unit/occupy-unit.component';
import {AccommodationsComponent} from './component/accommodations/accommodations.component';
import {AccommmodationTypeComponent} from './component/accommmodation-type/accommmodation-type.component';
import {AccommodationComponent} from '../../../client/projects/user/src/lib/component/accommodation/accommodation.component';
import {AddAgentComponent} from './component/add-agent/add-agent.component';
import {ExtraServiceComponent} from './component/extra-service/extra-service.component';
import {UnitTypeComponent} from './component/unit-type/unit-type.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import {TokenInterceptor} from './token-interceptor';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';





const agentRoutes: Routes = [

      { path: 'new-unit/:id', component: NewUnitComponent},
      { path: 'confirm-rsv/:id', component: ConfirmReservationComponent},
      { path: 'messages', component: RespondMessageComponent},
      { path: 'inbox', component: InboxComponent},
      { path: 'occupy', component: OccupyUnitComponent},
      { path: 'accommodations', component: AccommodationsComponent},
      {path: 'acc-types', component: AccommmodationTypeComponent},
  { path: 'reserve', component: AgentReservationsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent, AccommodationsComponent,
    AccommmodationTypeComponent,
    AccommodationComponent,
    AddAgentComponent,
    AgentReservationsComponent,
    ConfirmReservationComponent,
    ExtraServiceComponent,
    InboxComponent,
    NewUnitComponent,
    OccupyUnitComponent,
    RespondMessageComponent,
    UnitTypeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,

  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      agentRoutes,
      //     {enableTracing: true}
    ),
    BrowserModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
