import {Rolee} from './Rolee';

export class TokenPayload {
  sub: string;
  auth: Rolee[];

  constructor(sub: string, auth: Rolee[]) {
    this.sub = sub;
    this.auth = auth;
  }
}
