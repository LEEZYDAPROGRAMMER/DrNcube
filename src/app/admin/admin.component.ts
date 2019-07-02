import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
   patient
   newPatName:string="";
   newPatSurname:string="";
   newPatAge:number=null;
   newPatId:number=null;

  constructor(public patientService: ServiceService)
   { 

       this.patient=this.patientService.getPatients()
      
   }

   checkPat(pat)
   {
    this.patientService.checkPat(pat);

   }

   addPatients(newPatName,newPatSurname,newPatAge,newPatId)
   {
  
     this.patientService.addPatients(newPatName,newPatSurname,newPatAge,newPatId);
     
     this.newPatName=null;
     this.newPatSurname=null;
     this.newPatAge=null;
     this.newPatId=null;
   }

  ngOnInit() {
  }

}
