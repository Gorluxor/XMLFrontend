
import {User} from './User';
import {AccommodationUnit} from "./AccommodationUnit";

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
