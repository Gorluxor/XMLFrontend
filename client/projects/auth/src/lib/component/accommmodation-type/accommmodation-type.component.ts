import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccType} from "../../model/AccType";
import {AgentService} from "../../agent.service";

@Component({
  selector: 'lib-accommmodation-type',
  templateUrl: './accommmodation-type.component.html',
  styleUrls: ['./accommmodation-type.component.css']
})
export class AccommmodationTypeComponent implements OnInit {

  form: FormGroup;
  type: AccType;

  constructor(private agentService: AgentService) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]+$')])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.type = new AccType();
    this.type.name = this.form.get('name').value;
    this.type.lastChangedDate = this.form.get('datum').value;

    this.agentService.addType(this.type).subscribe(data => {

        console.log('Successfull type');
      }
    );

  }

}
