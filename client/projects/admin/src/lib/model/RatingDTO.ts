import {User} from "../../../../../src/model/User";
import {Reservation} from "../../../../../src/model/Reservation";
import {Accommodation} from "../../../../agents/src/lib/model/Accommodation";

export class RatingDTO {

  id: number;
  ratingValue: number;
  comment: string;
  date: string;
  adminApproved: boolean;
  userDTO: User;
  reservationDTO: Reservation;
  accommodationDTO: Accommodation;
}
