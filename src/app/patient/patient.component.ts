import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient
  appoints
  newPatName:string="";
  newPatSurname:string="";
  newPatAge:number=null;
  newPatId:number=null;

  bookDate:string="";
  bookReason:string="";
  bookDoctor:string="";
  

  constructor(public patientService: ServiceService)
  { 

      this.patient=this.patientService.getPatients()
     
  }
  takePerson(pat)
  {

    this.patientService.takePerson(pat)
  }

  ngOnInit() {
  }

}
