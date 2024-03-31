import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{

    reservationForm: FormGroup = new FormGroup({});

    constructor(
      private formBuilder: FormBuilder,
      private reservationService : ReservationService,
      private router: Router
      ){

    }

    ngOnInit(): void {
      // The validators on html need to be add as group
      this.reservationForm = this.formBuilder.group({
        checkInDate: ['', Validators.required],
        checkOutDate: ['', Validators.required],
        guestName: ['', Validators.required],
        guestEmail: ['', Validators.compose([Validators.required, Validators.email])], //Use Validator compose for multiple validator (otherwise error)
        roomNumber: ['', Validators.required]
      })
    }

    onSubmit(){
      if (this.reservationForm.valid) {

        //Because form control named as in Reservation interface, it will mapped automatically
        let reservation : Reservation = this.reservationForm.value; 
        this.reservationService.addReservation(reservation);

        // After create new reservation, navigate user into list page
        this.router.navigate(['/list']);
      }
    }
}
