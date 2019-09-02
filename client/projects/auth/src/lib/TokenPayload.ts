import {Role} from './Role';

export class TokenPayload {
  sub: string;
  auth: Role[];

  constructor(sub: string, auth: Role[]) {
    this.sub = sub;
    this.auth = auth;
  }
}
