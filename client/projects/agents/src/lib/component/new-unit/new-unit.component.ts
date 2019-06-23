import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ExtraService} from '../../model/ExtraService';
import {AgentsService} from '../../agents.service';
import {UnitType} from '../../model/UnitType';

@Component({
  selector: 'lib-new-unit',
  templateUrl: './new-unit.component.html',
  styleUrls: ['./new-unit.component.css']
})
export class NewUnitComponent implements OnInit {

  accId: number;
  form: FormGroup;

  dropdownList = [];
  selectedItems;
  dropdownSettings = {};

  unitTypes: UnitType[];
  extraServices: ExtraService[];
  allExtraServices: ExtraService[];

  constructor(private route: ActivatedRoute, private agentService: AgentsService) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required ),
      type: new FormControl('', Validators.required ),
      capacity: new FormControl('', Validators.required),
      size: new FormControl('', Validators.required),
      services: new FormControl()
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
      this.unitTypes = data;
      console.log(this.unitTypes);
    });

    this.agentService.getAllExtraServices().subscribe(data => {
      console.log('Get All Services');
      this.allExtraServices = data;
      this.dropdownList = [];
      for ( const i of this.allExtraServices) {
        this.dropdownList.push({item_id: i.id, item_text: i.nameOfService});
        console.log(i);
        console.log(i.nameOfService);
        console.log(this.dropdownList);
      }



      this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };
    });
  }
  onSubmit() {
    console.log('submit');
    console.log(this.form.get('name').valid);


    for (const a of this.selectedItems) {
      console.log(this.allExtraServices.find(x => x.id === a.item_id).nameOfService);
      this.extraServices.push(this.allExtraServices.find(x => x.id === a.item_id));
    }
  }
  onChangeType() {
    console.log(this.form.get('type').value);
  }
}
