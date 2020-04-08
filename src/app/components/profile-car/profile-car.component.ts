import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car-service/car.service';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-profile-car',
  templateUrl: './profile-car.component.html',
  styleUrls: ['./profile-car.component.css']
})
export class ProfileCarComponent implements OnInit {

  make: string;
  model: string;
  nrSeats: number;
  avSeats: number;
  currentCar: Car;
  success: string;

  constructor(private carService: CarService) { }

  ngOnInit() {

    this.carService.getCarByUserId2(sessionStorage.getItem('userid')).subscribe((response) => {
      this.currentCar = response;
      this.make = response.make;
      this.model = response.model;
      this.nrSeats = response.seats;
      this.avSeats = response.availableSeats;

    });
  }

  updatesCarInfo() {
    this.currentCar.make = this.make;
    this.currentCar.model = this.model;
    if (this.nrSeats >= this.avSeats) {
      this.currentCar.seats = this.nrSeats;
      this.currentCar.availableSeats = this.avSeats;
    }
    console.log(this.currentCar);
    this.carService.updateCarInfo(this.currentCar);
    this.success = 'Updated Successfully!';
  }

}
