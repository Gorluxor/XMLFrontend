import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AgentsComponent} from '../../projects/agents/src/lib/agents.component';
import {RouterModule, Routes} from '@angular/router';
import {AgentsModule} from '../../projects/agents/src/lib/agents.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AdminModule} from '../../projects/admin/src/lib/admin.module';
import {UserModule} from '../../projects/user/src/lib/user.module';
import {AuthModule} from '../../projects/auth/src/lib/auth.module';
import {TokenInterceptor} from '../../projects/agents/src/lib/token-interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
 // { path: 'agent', component: AgentsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AgentsModule,
    AdminModule,
    UserModule,
    AuthModule,
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
