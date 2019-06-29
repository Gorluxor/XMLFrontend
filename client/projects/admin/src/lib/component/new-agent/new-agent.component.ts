import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'lib-new-agent',
  templateUrl: './new-agent.component.html',
  styleUrls: ['./new-agent.component.css']
})
export class NewAgentComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required ),
      lastName: new FormControl('', Validators.required ),
      address: new FormControl('', Validators.required),
      pib: new FormControl('', Validators.required)

    });
  }

  ngOnInit() {

  }

  onSubmit(){

  }
}
