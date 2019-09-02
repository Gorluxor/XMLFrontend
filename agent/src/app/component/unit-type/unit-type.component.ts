import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UnitType} from '../../model/UnitType';
import {AgentServis} from '../../service/agentServis';



@Component({
  selector: 'app-unit-type',
  templateUrl: './unit-type.component.html',
  styleUrls: ['./unit-type.component.css']
})
export class UnitTypeComponent implements OnInit {

  types: Array<UnitType>;
  form: FormGroup;
  formI: FormGroup;
  type: UnitType;
  typei: UnitType;
  idIzmena: number;
  izmeniForm: boolean;
  dodajForm: boolean;


  constructor(private agentService: AgentServis) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]+$')]),
      datum: new FormControl('', Validators.required)
    });

    this.formI = new FormGroup({
      nameI: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]+$')]),
      datumI: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.izmeniForm = false;
    this.dodajForm = true;

    this.agentService.getAllUnitTypes().subscribe(data => {
        this.types = data;
        console.log('Successfull type');
      }
    );

  }

  onSubmit() {
    this.type = new UnitType();
    this.type.nameOfUnitType = this.form.get('name').value;
    this.type.lastChangedDate = this.form.get('datum').value;

    this.agentService.addType(this.type).subscribe(data => {

        console.log('Successfull type');
      }
    );

  }

  izmeniSubmit() {

    this.typei = new UnitType();
    this.typei.nameOfUnitType = this.formI.get('nameI').value;
    this.typei.lastChangedDate = this.formI.get('datumI').value;

    this.agentService.changeUnitType(this.typei, this.idIzmena).subscribe(data => {
        this.izmeniForm = false;
        this.dodajForm = true;
        console.log('Successfull type');
      }
    );
  }

  izmeni(id: number) {
    this.izmeniForm = true;
    this.dodajForm = false;

    this.agentService.getUnitType(id).subscribe(data => {

        this.formI.get('nameI').setValue(data.name);
        this.formI.get('datumI').setValue(data.datum);

        console.log('Successfull type');
      }
    );
  }

  obrisi(id: number) {

    this.agentService.deleteUnitType(id).subscribe(data => {

        console.log('Successfull type');
      }
    );
  }

}
