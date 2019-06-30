import { Component, OnInit } from '@angular/core';
import {AccType} from "../../../../../auth/src/lib/model/AccType";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AgentServis} from "../../agentServis";
import {ExtraService} from '../../model/ExtraService';

@Component({
  selector: 'lib-extra-service',
  templateUrl: './extra-service.component.html',
  styleUrls: ['./extra-service.component.css']
})
export class ExtraServiceComponent implements OnInit {

  types: Array<ExtraService>;
  form: FormGroup;
  formI: FormGroup;
  type: ExtraService;
  typei: ExtraService;
  idIzmena: number;
  izmeniForm:boolean;
  dodajForm:boolean;


  constructor(private agentService: AgentServis) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]+$')]),
      datum: new FormControl('',Validators.required)
    });

    this.formI = new FormGroup({
      nameI: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]+$')]),
      datumI: new FormControl('',Validators.required)
    });
  }

  ngOnInit() {
    this.izmeniForm=false;
    this.dodajForm=true;

    this.agentService.getAllTypes().subscribe(data => {
        this.types=data;
        console.log('Successfull type');
      }
    );

  }

  onSubmit() {
    this.type = new ExtraService();
    this.type.nameOfService = this.form.get('name').value;
    this.type.lastChangedDate = this.form.get('datum').value;
    this.type.description = this.form.get('opis').value;


    this.agentService.addType(this.type).subscribe(data => {

        console.log('Successfull type');
      }
    );

  }

  izmeniSubmit() {

    this.typei = new ExtraService();
    this.typei.nameOfService = this.formI.get('nameI').value;
    this.typei.lastChangedDate = this.formI.get('datumI').value;
    this.type.description = this.form.get('opisI').value;

    this.agentService.changeType(this.typei,this.idIzmena).subscribe(data => {
        this.izmeniForm=false;
        this.dodajForm=true;
        console.log('Successfull type');
      }
    );
  }

  izmeni(id:number)
  {
    this.izmeniForm=true;
    this.dodajForm=false;

    this.agentService.getType(id).subscribe(data => {

        this.formI.get('nameI').setValue(data.nameOfService);
        this.formI.get('datumI').setValue(data.datum);
      this.formI.get('opisI').setValue(data.description);

        console.log('Successfull type');
      }
    );
  }

  obrisi(id:number)
  {

    this.agentService.deleteType(id).subscribe(data => {

        console.log('Successfull type');
      }
    );
  }
}
