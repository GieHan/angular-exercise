import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{

    reservationForm: FormGroup = new FormGroup({});

    constructor(private formBuilder: FormBuilder){

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
        console.log('valid');
      }
    }
}
