import {UnitType} from './UnitType';
import {ExtraService} from './ExtraService';

export class AccomodationUnit{
  id: number;
  capacity: number;
  size: number;
  nameOfUnit: string;
  unitTypeDTO: UnitType;
  cancelationDays: number;
  lastChangedDate: Date;
  extraServiceDTO: ExtraService[];
}
