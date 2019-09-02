import { Component, OnInit } from '@angular/core';
import {ExtraService} from '../../../../../agents/src/lib/model/ExtraService';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../admin.service';
import {AccType} from '../../../../../auth/src/lib/model/AccType';

@Component({
  selector: 'lib-manage-acc-type',
  templateUrl: './manage-acc-type.component.html',
  styleUrls: ['./manage-acc-type.component.css']
})
export class ManageAccTypeComponent implements OnInit {

  types: Array<AccType>;
  form: FormGroup;
  formI: FormGroup;
  type: AccType;
  typei: AccType;
  idIzmena: number;
  izmeniForm: boolean;
  dodajForm: boolean;


  constructor(private adminService: AdminService) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]+$')])
    });

    this.formI = new FormGroup({
      nameI: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]+$')])
    });
  }

  ngOnInit() {
    this.izmeniForm = false;
    this.dodajForm = true;

    this.adminService.getAllTypes().subscribe(data => {
        this.types = data;
        console.log('Successfull type');
      }
    );

  }

  onSubmit() {
    this.type = new AccType();

    this.type.nameOfAccType = this.form.get('name').value;

    this.adminService.addType(this.type).subscribe(data => {

        console.log('Successfull type');
        window.location.href = './admin/accTypes';

      }
    );

  }

  izmeniSubmit() {

    this.typei = new AccType();
    this.typei.nameOfAccType = this.formI.get('nameI').value;
    this.typei.id = this.idIzmena;

    this.adminService.changeType(this.typei).subscribe(data => {
        this.izmeniForm = false;
        this.dodajForm = true;
        console.log('Successfull type');
        window.location.href = './admin/accTypes';

      }
    );
  }

  izmeni(id: number) {
    this.izmeniForm = true;
    this.dodajForm = false;
    this.idIzmena = id;

    this.adminService.getType(id).subscribe(data => {

        this.formI.get('nameI').setValue(data.nameOfAccType);
        console.log('Successfull type');
      }
    );
  }

  obrisi(id: number) {

    this.adminService.deleteType(id).subscribe(data => {

        console.log('Successfull type');
        window.location.href = './admin/accTypes';

      }
    );
  }

}
