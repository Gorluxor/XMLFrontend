import {UnitType} from './UnitType';
import {ExtraService} from './ExtraService';
import {ImageDTO} from './ImageDTO';
import {LocationDTO} from "./LocationDTO";
import {PricingDTO} from './PricingDTO';


export class AccommodationUnit {
  id: number;
  capacity: number;
  size: number;
  nameOfUnit: string;
  unitTypeDTO: UnitType;
  cancelationDays: number;
  lastChangedDate: Date;
  pricingDTO : PricingDTO[];
  extraServiceDTO: ExtraService[];
  locationDTO: LocationDTO;
  imageDTO: ImageDTO[];
}
