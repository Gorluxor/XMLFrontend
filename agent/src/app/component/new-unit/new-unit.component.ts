import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ExtraService} from '../../model/ExtraService';
import {UnitType} from '../../model/UnitType';
import {AccommodationUnit} from '../../model/AccommodationUnit';
import {ImageDTO} from '../../model/ImageDTO';
import {AgentsService} from '../../service/agents.service';
import {LocationDTO} from '../../model/LocationDTO';
import {PricingDTO} from '../../model/PricingDTO';

@Component({
  selector: 'app-new-unit',
  templateUrl: './new-unit.component.html',
  styleUrls: ['./new-unit.component.css']
})
export class NewUnitComponent implements OnInit {

  accId: number;
  form: FormGroup;
  cena18: number;
  cena19: number;
  
  pr: PricingDTO;
  prr: PricingDTO;



  unitTypes: UnitType[];
  extraServices: ExtraService[];
  allExtraServices: ExtraService[];
  accommodationUnit: AccommodationUnit;

  constructor(private route: ActivatedRoute, private agentService: AgentsService) {
    this.form = new FormGroup({
      nameOfUnit: new FormControl('', Validators.required ),
      latitude: new FormControl('', Validators.required ),
      longitude: new FormControl('', Validators.required ),
      imageUrl: new FormControl('', Validators.required ),
      imageTitle: new FormControl('', Validators.required ),
      type: new FormControl('', Validators.required ),
      capacity: new FormControl('', Validators.required),
      cancelationDays: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      extraServices: new FormControl(),
    });
  }

  ngOnInit() {
    this.accId = +this.route.snapshot.paramMap.get('id');
    console.log(this.accId);
    this.extraServices = [];
    this.allExtraServices = [];
    this.unitTypes = [];

    this.onChangeType();

    this.agentService.getAllUnitTypes().subscribe(data => {
      this.unitTypes = data.unitTypeDTO;
      console.log(this.unitTypes);
    });

    this.agentService.getAllExtraServices().subscribe(data => {
      console.log('Get All Services');
      this.allExtraServices = data.extraServiceDTO;
      console.log(data);
    });
  }
  onSubmit() {
    console.log('submit');


    this.accommodationUnit = new AccommodationUnit();
    this.accommodationUnit.locationDTO = new LocationDTO();
    this.accommodationUnit.cancelationDays = this.form.get('cancelationDays').value;
    this.accommodationUnit.nameOfUnit = this.form.get('nameOfUnit').value;

    /* this.accommodationUnit.locationDTO.country = this.form.get('country').value;
     this.accommodationUnit.locationDTO.city = this.form.get('city').value;
     this.accommodationUnit.locationDTO.street = this.form.get('street').value;
     this.accommodationUnit.locationDTO.number = this.form.get('number').value;
          this.accommodationUnit.locationDTO.postalCode = this.form.get('postalCode').value;*/

    this.cena18 = this.form.get('latitude').value;
    this.cena19 = this.form.get('longitude').value;
    this.accommodationUnit.nameOfUnit = this.form.get('description').value;
    this.accommodationUnit.capacity = this.form.get('capacity').value;
    this.accommodationUnit.extraServiceDTO = [];

    this.accommodationUnit.pricingDTO = [];
    
    this.pr = new PricingDTO();
    this.prr = new PricingDTO();

    this.pr.price = this.cena18;
    this.pr.startDate= new Date();
    this.prr.price = this.cena19;
    this.prr.startDate = new Date();
    this.prr.startDate.setFullYear(2020);
    
    this.accommodationUnit.pricingDTO.push(this.pr);
    this.accommodationUnit.pricingDTO.push(this.prr);

    for ( const s of this.form.get('extraServices').value) {

      for ( const as of this.allExtraServices) {
        console.log(s);
        console.log(as);
        console.log(as.id);
        if ( s === as.id.toString()) {
          this.accommodationUnit.extraServiceDTO.push(as);
        }
      }

    }
  //  this.accommodationUnit.extraServiceDTO = this.form.get('extraServices').value;
    const pom = this.form.get('type').value;
    for ( const t of this.unitTypes) {
      console.log(t);
      console.log(t.id);

      console.log(pom);
      if ( t.id.toString() === pom) {
        this.accommodationUnit.unitTypeDTO = t;
      }
    }

    this.accommodationUnit.imageDTO = [];
    const i = new ImageDTO();
    i.title = this.form.get('imageTitle').value;
    i.uri = this.form.get('imageUrl').value;
    this.accommodationUnit.imageDTO.push(i);
    // this.accommodationUnit.imageDTO.title = this.form.get('imageTitle').value;
    // this.accommodationUnit.imageDTO.uri = this.form.get('imageUrl').value;

    console.log(this.accommodationUnit);

    this.agentService.createUnit( this.accId, this.accommodationUnit).subscribe( data => {
      console.log('created Unit');
      console.log(data);

      window.location.href = './accommodations'
    });

  }
  onChangeType() {
    console.log(this.form.get('type').value);
  }
}
