import { Component, OnInit, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user-service/user.service';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Batch } from 'src/app/models/batch';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car-service/car.service';
import { Router } from '@angular/router';
import { BatchService } from 'src/app/services/batch-service/batch.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MatPaginator } from '@angular/material/paginator';
import { Driver } from '../../models/driver';
import { MatTableDataSource } from '@angular/material/';
import { MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { DistanceConversion } from '../../pipes/distance-conversion';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { stringify } from 'querystring';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  activedrivers: any = [];
  location: string = 'Morgantown';
  mapProperties: {};
  availableCars: Array<any> = [];
  drivers: Array<Driver> = [];
  isLoading = true;
  displayedColumns: string[] = ['name', 'distance', 'time', 'seats'/* , 'totalseats' */, 'view'];
  dataSource = new MatTableDataSource<Driver>();
  filterSelectObj = [];
  filterOn = false;
  globalFilter: string;

  @ViewChild('map', null) mapElement: any;
  map: google.maps.Map;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private http: HttpClient, private carService: CarService, overlayContainer: OverlayContainer) {
     // Object to create Filter for distance dropdown
     this.filterSelectObj = [
      {
        name: 'DISTANCE',
        columnProp: 'distance',
        options: [
          1609.35, // 1 mi
          8046.72, // 5 mi
          16093.44, // 10 mi
          40233.6, // 25 mi
          56327.1, // 35 mi
        ]
      }
    ];
    // add in angular materials custom theme
     overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
  }

  ngOnInit() {

    this.drivers = [];

    this.carService.getCarsForLocation(this.location).subscribe(
      res => {
        // console.log(res);
        res.forEach(element => {
          // console.log(element.user.acceptingRides);
          // console.log(element.user.active);
          // console.log(element.user.driver);
          if (element.user.acceptingRides === true && element.user.active === true && element.user.driver === true) {
            this.drivers.push({
              id: element.user.userId,
              name: element.user.firstName + ' ' + element.user.lastName,
              origin: element.user.hCity + ',' + element.user.hState,
              email: element.user.email,
              phone: element.user.phoneNumber,
              seats: element.availableSeats,
              totalseats: element.seats,
              distance: '',
              duration: '',
              active: element.user.active,
              driver: element.user.driver,
              acceptingRides: element.user.acceptingRides,
            });
          }
        });
      });
    // allows pagination to work with the dataSource that is presented on the table
    this.dataSource.paginator = this.paginator;
    // allows the sorter to work with the dataSource that is presented on the table
    this.dataSource.sort = this.sort;
    this.getGoogleApi();

    this.sleep(2000).then(() => {
      this.mapProperties = {
        center: new google.maps.LatLng(Number(sessionStorage.getItem('lat')), Number(sessionStorage.getItem('lng'))),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapProperties);
      // get all routes
      this.displayDriversList(this.location, this.drivers);
      // show drivers on map
      this.showDriversOnMap(this.location, this.drivers);
    });
    // console.log(this.drivers);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getGoogleApi() {
    this.http.get(`${environment.loginUri}getGoogleApi`)
      .subscribe(
        (response) => {
          // console.log(response);
          if (response['googleMapAPIKey'] != undefined) {
            new Promise((resolve) => {
              const script: HTMLScriptElement = document.createElement('script');
              script.addEventListener('load', r => resolve());
              script.src = `http://maps.googleapis.com/maps/api/js?key=${response['googleMapAPIKey'][0]}`;
              document.head.appendChild(script);
            });
          }
        }
      );
  }

  showDriversOnMap(origin, drivers) {
    drivers.forEach(element => {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer({
        draggable: true,
        map: this.map
      });
      this.displayRoute(origin, element.origin, directionsService, directionsRenderer);
    });
  }


  displayRoute(origin, destination, service, display) {
    service.route({
      origin,
      destination,
      travelMode: 'DRIVING',
      // avoidTolls: true
    }, function(response, status) {
      if (status === 'OK') {
        display.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
  }

  displayDriversList(origin, drivers)  {
    const origins = [];
    // set origin
    origins.push(origin);

    drivers.forEach(element => {
      const service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix({
        origins,
        destinations: [element.origin],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false
      }, function(response, status) {
        if (status !== 'OK') {
          alert('Error was: ' + status);
        } else {
          const originList = response.originAddresses;
          const destinationList = response.destinationAddresses;
          const results = response.rows[0].elements;
          const name = element.name;
          element.distance = results[0].distance.value;
          element.duration = results[0].duration.text;
        }
      });

    });
    // timeout for distance loading. fixes problem of google data coming in slower than the table loading
    setTimeout(myFunc => {
      // this allows sorting AFTER the google data arrives on the table
      this.dataSource.data = this.drivers.sort((a, b) => (a.distance > b.distance ? 1 : -1)); this.isLoading = false;

      // override mat-table filter AFTER google data arrives on table
      this.dataSource.filterPredicate = (data: Driver, filter: string) => {
        if (this.filterOn) {
          // inside applyFilter event
          return data.name.toLowerCase().includes(filter) || data.phone.includes(filter)
          || data.phone.replace('-', '').replace('-', '').includes(filter);
        } else {
          // inside filterChange event
          return data.distance <= filter; // returns data to table where distance is less than filtered distance
        }
      };
    } , 2000);
  }

  // distance filter event handler
  filterChange(filterValue: string) {
    this.filterOn = false;
    this.dataSource.filter = filterValue;
  }
  // filter all event handler
  applyFilter(event: Event) {
    this.filterOn = true;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
