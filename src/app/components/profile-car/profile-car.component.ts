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
    console.log(this.nrSeats);
    if (this.currentCar.make !== this.make || this.currentCar.model !== this.model || this.currentCar.seats !== this.nrSeats || this.currentCar.availableSeats !== this.avSeats) {
      this.currentCar.make = this.make;
      this.currentCar.model = this.model;
      this.currentCar.seats = this.nrSeats;
      this.currentCar.availableSeats = this.avSeats;
      this.carService.updateCarInfo(this.currentCar);
      this.success = 'Updated Successfully!';
      this.success.fontcolor('red');
    } else {
      this.success = 'No Values Changed';
    }
  }

}
