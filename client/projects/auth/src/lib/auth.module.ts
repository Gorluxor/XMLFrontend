import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from '../../../admin/src/lib/admin.component';
import {NewAgentComponent} from '../../../admin/src/lib/component/new-agent/new-agent.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AccommmodationTypeComponent } from './component/accommmodation-type/accommmodation-type.component';

const authRoutes: Routes = [
  {
    path: 'auth', component: AuthComponent, children: [
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent}
    ]
  },
];

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, AccommmodationTypeComponent],
  imports: [
    RouterModule.forRoot(authRoutes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
