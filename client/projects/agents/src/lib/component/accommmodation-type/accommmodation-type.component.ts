import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccType} from "../../../../../auth/src/lib/model/AccType";
import {AgentServis} from "../../agentServis";

@Component({
  selector: 'lib-accommmodation-type',
  templateUrl: './accommmodation-type.component.html',
  styleUrls: ['./accommmodation-type.component.css']
})
export class AccommmodationTypeComponent implements OnInit {

  types: Array<AccType>;
  form: FormGroup;
  formI: FormGroup;
  type: AccType;
  typei: AccType;
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
    this.type = new AccType();
    this.type.nameOfAccType = this.form.get('name').value;
    this.type.lastChangedDate = this.form.get('datum').value;

    this.agentService.addType(this.type).subscribe(data => {

        console.log('Successfull type');
      }
    );

  }

  izmeniSubmit() {

    this.typei = new AccType();
    this.typei.nameOfAccType = this.formI.get('nameI').value;
    this.typei.lastChangedDate = this.formI.get('datumI').value;

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

      this.formI.get('nameI').setValue(data.name);
      this.formI.get('datumI').setValue(data.datum);

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
