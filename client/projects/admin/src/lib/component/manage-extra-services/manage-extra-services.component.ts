import { Component, OnInit } from '@angular/core';
import {ExtraService} from '../../../../../agents/src/lib/model/ExtraService';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../admin.service';

@Component({
  selector: 'lib-manage-extra-services',
  templateUrl: './manage-extra-services.component.html',
  styleUrls: ['./manage-extra-services.component.css']
})
export class ManageExtraServicesComponent implements OnInit {

  types: Array<ExtraService>;
  form: FormGroup;
  formI: FormGroup;
  type: ExtraService;
  typei: ExtraService;
  idIzmena: number;
  izmeniForm: boolean;
  dodajForm: boolean;


  constructor(private adminService: AdminService) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]+$')]),
      opis: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]+$')])
    });

    this.formI = new FormGroup({
      nameI: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]+$')]),
      opisI: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z]+$')])
    });
  }

  ngOnInit() {
    this.izmeniForm = false;
    this.dodajForm = true;

    this.adminService.getExtraServices().subscribe(data => {
        this.types = data;
        console.log('Successfull type');
      }
    );

  }

  onSubmit() {
    this.type = new ExtraService();
    this.type.nameOfService = this.form.get('name').value;
    // this.type.lastChangedDate = this.form.get('datum').value;
    this.type.description = this.form.get('opis').value;


    this.adminService.addExtraService(this.type).subscribe(data => {

        console.log('Successfull type');
        window.location.href = './admin/extraServices';
    }
    );

  }

  izmeniSubmit() {

    this.typei = new ExtraService();
    this.typei.nameOfService = this.formI.get('nameI').value;
   // this.typei.lastChangedDate = this.formI.get('datumI').value;
    this.typei.description = this.formI.get('opisI').value;
    this.typei.id = this.idIzmena;

    this.adminService.changeExtraService(this.typei).subscribe(data => {
        this.izmeniForm = false;
        this.dodajForm = true;
        console.log('Successfull type');
        window.location.href = './admin/extraServices';
      }
    );
  }

  izmeni(id: number) {
    this.izmeniForm = true;
    this.dodajForm = false;
    this.idIzmena = id;

    this.adminService.getExtraService(id).subscribe(data => {

        this.formI.get('nameI').setValue(data.nameOfService);
        // this.formI.get('datumI').setValue(data.datum);
        this.formI.get('opisI').setValue(data.description);

        console.log('Successfull type');
      }
    );
  }

  obrisi(id: number) {

    this.adminService.deleteExtraService(id).subscribe(data => {

        console.log('Successfull type');
        window.location.href = './admin/extraServices';

      }
    );
  }


}
