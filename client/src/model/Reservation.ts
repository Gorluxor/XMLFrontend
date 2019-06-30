import {AccommodationUnit} from '../../projects/agents/src/lib/model/AccommodationUnit';
import {User} from './User';

export class Reservation {
  id: number;
  arrivalDate: Date;
  departureDate: Date;

  stayRealized: boolean;
  reservationPrice: number;
  lastChangedDate: Date;
  userDTO: User;
  accommodationUnitDTO: AccommodationUnit[];
}
