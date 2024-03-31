import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    //Export so that other module can use component list below (make sure homemodule decales also in this module)
    HomeComponent
  ]
})
export class HomeModule { }
