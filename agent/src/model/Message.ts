import {User} from './User';

export class Message{
  id: number;
  msg: string;
  timeStamp: Date;
  lastChangedDate: Date;
  sender: User;
  receiver: User;
}
