import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [{path:'admin',component: AdminComponent}, {path:'patientDetails',component: PatientDetailsComponent},{path:'patient',component: PatientComponent},{path:'doctor',component: DoctorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
