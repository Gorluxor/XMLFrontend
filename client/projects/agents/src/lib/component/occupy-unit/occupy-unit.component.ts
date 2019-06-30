import { Component, OnInit } from '@angular/core';
import {Accommodation} from '../../model/Accommodation';
import {AccommodationUnit} from '../../model/AccommodationUnit';
import {HttpClient} from '@angular/common/http';
import {AgentsService} from '../../agents.service';

@Component({
  selector: 'lib-occupy-unit',
  templateUrl: './occupy-unit.component.html',
  styleUrls: ['./occupy-unit.component.css']
})
export class OccupyUnitComponent implements OnInit {

  accommodations: Accommodation[];
  accommodationUnits: AccommodationUnit[];

  constructor(private http: HttpClient, private agentService: AgentsService) { }

  ngOnInit() {
    this.agentService.getAccommodations().subscribe( data => {
      console.log('ACCOMMODATIONS');
      console.log(data);
      this.accommodations = data;
      this.accommodationUnits = [];
      for (const a of this.accommodations) {
        for (const au of a.accommodationUnitDTO) {
          this.accommodationUnits.push(au);
        }
      }
    });
  }

}
