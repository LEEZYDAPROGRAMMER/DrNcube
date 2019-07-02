import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patient
  thePatient
  constructor(public patientService : ServiceService)
   { 

       this.patient=this.patientService.getPatients()

       this.thePatient=this.patientService.getPat()
   }
  

   checkPat(pat)
   {
    this.patientService.checkPat(pat)

   }
  ngOnInit() {
  }

}
