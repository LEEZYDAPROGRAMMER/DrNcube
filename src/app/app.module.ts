import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatMenuModule,MatIconModule, MatInputModule,MatListModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule } from '@angular/material';
import { MatMomentDateModule} from "@angular/material-moment-adapter";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { AdminComponent } from './admin/admin.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    
    AdminComponent,
    PatientDetailsComponent,
    PatientComponent,
    DoctorComponent,
    PatientAppointmentComponent
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
   FormsModule,
   MatInputModule,
   MatSelectModule,
    MatListModule,
  MatMomentDateModule,
  
     
 ReactiveFormsModule,
 
 MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }