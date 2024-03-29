import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{

  newAppointmentTitle : string  = "";
  newAppointmentDate : Date     = new Date();

  appointments: Appointment[]   = [];

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");
    this.appointments     = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

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

    this.saveLocaly();
  }

  deleteAppointment(index: number){
    this.appointments.splice(index, 1);
    this.saveLocaly();
  }

  // Save/update all current appointments into local storage (simulate database)
  saveLocaly(){
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }
}
