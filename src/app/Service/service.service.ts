import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  patients=[{name:"santiago",surname:" ncube",age:12,patientID:1}];
  thePatient=[];
 //tag team appointment
  appointments=[];
  tempPerson=[];
  
  

  newPatName : string="";
  newPatSurname : string="";
  newPatAge:number=null;
  newPatId:number=null;
  
  bookDate:string="";
  bookReason:string="";
  bookDoctor:string="";
  

   empty=false;
   toVal=null;

   getPatients()
   {

    return this.patients;

    }
    getAppoints()
    {

      return this.appointments
    }

    addPatients(newPatName,newPatSurname,newPatAge,newPatId)
    {
      
      
       
      if(newPatName!=null&&newPatSurname!=null&&newPatAge!=null&&newPatId!=null)
      {
        this.patients.push({name: newPatName,surname: newPatSurname,age: newPatAge,patientID: newPatId});
       
        this.empty=false;
      
      }
      else
      {
        this.empty=true;
      }
          
      this.newPatName=null;
      this.newPatSurname=null;
      this.newPatAge=null;
      this.newPatId=null;
     
    }

//tag team appointment
    takePerson(pat)
    {
      let index = this.patients.indexOf(pat)
      this.tempPerson.splice(0,1);
      this.tempPerson.push({name: this.patients[index].name, surname: this.patients[index].surname, age: this.patients[index].age, patientID: this.patients[index].patientID})
      
    }
//tag team appointment
    addAppoint(bookDate,bookReason,bookDoctor)
    {
       
     
   
      if(bookDate!=null&&bookReason!=null&&bookDoctor!=null)
      {
        this.appointments.push({name:this.tempPerson[0].name,date: bookDate,reason: bookReason,doctor: bookDoctor});
       
        this.empty=false;
     
      }
      else
      {
        this.empty=true;
      } 

      this.bookDate=null;
      this.bookReason=null;
      this.bookDoctor=null;

      
    }


    getPat()
    {
    
        return this.thePatient;
    }
   
    checkPat(pat)
    {
      let index = this.patients.indexOf(pat)

      var myFile = this.thePatient.find (x => x.name === pat.name);
     
      if(myFile)
      {
       myFile.id +1
      }
      else
      {
        this.thePatient.splice(0,1);
      this.thePatient.push({name: this.patients[index].name, surname: this.patients[index].surname, age: this.patients[index].age, patientID: this.patients[index].patientID})
      }

        this.newPatId = this.thePatient.length;
        if(this.checkPat.length > 0)
        {
         this.empty= false
        }

    }
  constructor() { }
}
