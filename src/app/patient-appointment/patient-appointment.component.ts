import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit {
  bookDate:string="";
  bookReason:string="";
  bookDoctor:string="";
  patient
  appoints
  
  constructor(public patientService: ServiceService)
  { 

      this.patient=this.patientService.getPatients()
      this.appoints= this.patientService.getAppoints()
  }
  takePerson(pat)
  {

     this.patientService.takePerson(pat)
  }
  addAppoint(bookDate,bookReason,bookDoctor)
  {
    this.patientService.addAppoint(bookDate,bookReason,bookDoctor)

  }
  ngOnInit() {
  }

}
