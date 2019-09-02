import {Role} from './Role';

export class Registration{
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
  country: string;
  birthday: Date;
  phoneNumber: string;
  pib: string;
  activatedUser: boolean;
  lastChangedDate: Date;
  roleDTO: Role;
}
