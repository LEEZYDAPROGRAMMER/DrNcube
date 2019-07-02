import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  patients=[{name:"santiago",surname:" ncube",age:12,patientID:1}];
  thePatient=[];

  newPatName : string="";
  newPatSurname : string="";
  newPatAge:number=null;
  newPatId:number=null;
  
  
   empty=false;
   toVal=null;

   getPatients()
   {

    return this.patients;

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
      this.newPatName=null;
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
