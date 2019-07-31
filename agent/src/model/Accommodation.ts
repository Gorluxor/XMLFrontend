import {AccommodationType} from './AccommodationType';
import {AccommodationUnit} from './AccommodationUnit';

export class Accommodation{
  id : number;
  name: string;
  description: string;
  accommodationType: AccommodationType;
  lastChangedDate: Date;
  accommodationUnitDTO: AccommodationUnit[];
}
