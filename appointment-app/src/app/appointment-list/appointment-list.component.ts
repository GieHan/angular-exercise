import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {

  newAppointmentTitle : string  = "";
  newAppointmentDate : Date     = new Date();

  appointments: Appointment[]   = [];

  addAppointment(){
    // Check for empty input first
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let currentAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      };

      this.appointments.push(currentAppointment);
    }

    //Refresh user input to default, since it is two way data binding.
    this.newAppointmentTitle = "";
    this.newAppointmentDate = new Date();
  }

  deleteAppointment(index: number){
    this.appointments.splice(index, 1);
  }
}
