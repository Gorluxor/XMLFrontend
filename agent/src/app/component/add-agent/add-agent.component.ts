import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Agent} from '../../model/Agent';
import {AgentServis} from '../../service/agentServis';



@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {

  form: FormGroup;
  agent: Agent;

  constructor(private agentService: AgentServis) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]+$')] ),
      lastName: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]+$')] ),
      address: new FormControl('', Validators.required ),
      pib: new FormControl('', Validators.required ),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.agent = new Agent();

    this.agent.pib = this.form.get('pib').value;
    this.agent.lastName = this.form.get('lastName').value;
    this.agent.name = this.form.get('name').value;
    this.agent.address = this.form.get('address').value;


    this.agentService.dodajAgenta(this.agent).subscribe(data => {
        console.log('Successfull agent');
      }
    );

  }

}
