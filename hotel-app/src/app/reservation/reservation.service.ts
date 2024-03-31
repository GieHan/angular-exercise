import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private STORAGE_KEYWORD             = 'reservations';
  private reservations: Reservation[] = [];

  // Because Constructor is loaded before ngOnInit, we load here
  constructor() {
    this.initData();
   }

  // ----- CRUD
  getreservations(): Reservation[]{
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined{
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: Reservation): void{
    // Because we dont use debugger, we need to create own id schematic for now
    reservation.id = Date.now().toString();
    
    this.reservations.push(reservation);
    this.saveToLocalStorage();
  }

  deleteReservation(id: string): void{
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,1);
    this.saveToLocalStorage();
  }

  updateReservation(updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === updatedReservation.id);
    this.reservations[index] = updatedReservation;
    this.saveToLocalStorage();
  }

  // ----- Helper
  saveToLocalStorage(){
    localStorage.setItem(this.STORAGE_KEYWORD, JSON.stringify(this.reservations));
  }

  initData(){
    let initReservation = localStorage.getItem(this.STORAGE_KEYWORD);
    this.reservations   = initReservation? JSON.parse(initReservation) : [];
  }

}
