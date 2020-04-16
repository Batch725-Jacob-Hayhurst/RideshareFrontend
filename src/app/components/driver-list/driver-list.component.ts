import { Component, OnInit, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  activedrivers: any = [];
  location: string = '';
  //location: string = 'Morgantown, WV 26506';
  //location: string = '11730 Plaza America Dr Reston, VA 20190';
  mapProperties: {};
  availableCars: Array<any> = [];
  drivers: Array<Driver> = [];

  displayedColumns: string[] = ['name', 'distance', 'time', 'spots', 'view'];
  // dataSource = new MatTableDataSource();
  dataSource = new MatTableDataSource<Driver>(this.drivers);


  @ViewChild('map', null) mapElement: any;
  map: google.maps.Map;

  startMarker: google.maps.Marker[] = [];
  endMarker: google.maps.Marker[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // this.dataSource.  = filterValue.trim().toLowerCase();

  constructor(private http: HttpClient, private userService: UserService, private carService: CarService) { }

  ngOnInit() {

    this.drivers = [];
    this.location = sessionStorage.getItem("batchLoc");
    console.log(this.location);
    this.carService.getAllCars().subscribe(
      res => {
        //console.log(res);
        res.forEach(element => {
          // console.log(element.user.hAddress);
          // console.log(element.user.hAddress2);
          // console.log(element.user.wAddress);
          if (element.user.acceptingRides === true && element.user.active === true && element.user.driver === true) {
            this.drivers.push({
              'id': element.user.userId,
              'name': element.user.firstName + " " + element.user.lastName,
              'origin': element.user.hAddress + "," + element.user.hCity + "," + element.user.hState,
              'email': element.user.email,
              'phone': element.user.phoneNumber,
              'spots': element.availableSeats,
              'distance': '',
              'duration': '',
              'active': element.user.active,
              'driver': element.user.driver,
              'acceptingRides': element.user.acceptingRides,
            })
          };
        });
        console.log(this.drivers);
        this.dataSource.data = this.drivers;
      });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    console.log(this.drivers);

    this.getGoogleApi();

    this.sleep(2000).then(() => {
      this.mapProperties = {
        center: new google.maps.LatLng(Number(sessionStorage.getItem("lat")), Number(sessionStorage.getItem("lng"))),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapProperties);

      //get all routes 
      this.displayDriversList(this.location, this.drivers);
      //show drivers on map
      this.showDriversOnMap(this.location, this.drivers);
    });
    console.log(this.drivers);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getGoogleApi() {
    this.http.get(`${environment.loginUri}getGoogleApi`)
      .subscribe(
        (response) => {
          console.log(response["googleMapAPIKey"][0]);
          if (response["googleMapAPIKey"] != undefined) {
            new Promise((resolve) => {
              let script: HTMLScriptElement = document.createElement('script');
              script.addEventListener('load', r => resolve());
              script.src = `http://maps.googleapis.com/maps/api/js?key=${response["googleMapAPIKey"][0]}`;
              document.head.appendChild(script);
            });
          }
        }
      );
  }

  showDriversOnMap(origin, drivers) {
    //var markerSize = new google.maps.Size(75, 48, 'px','px');
    //var anchorPoint = new google.maps.Point(0,-5);
    drivers.forEach(element => {
      var directionsService = new google.maps.DirectionsService;
      var directionsRenderer = new google.maps.DirectionsRenderer({
        suppressMarkers: false,
        // draggable: true,
        //markerOptions: { icon: {url: 'https://img.itch.zone/aW1hZ2UvNTYwODIvMjUxMjgzLnBuZw==/original/51hNjy.png'},
        // markerOptions: { icon: {url: 'assets/spr_bluecar_0resize.png'},
        //markerOptions: { icon: {url: 'https://img.itch.zone/aW1hZ2UvNTYwODIvMjUxMjgzLnBuZw==/original/51hNjy.png', size: markerSize, anchor: anchorPoint },
        //label: element.name},
        // },
        map: this.map
      });
      this.displayRoute(origin, element.origin, directionsService, directionsRenderer);
    });
  }


  displayRoute(origin, destination, service, display) {
    service.route({
      origin: origin,
      destination: destination,
      travelMode: 'DRIVING',
      //avoidTolls: true
    }, function (response, status) {
      if (status === 'OK') {
        display.setDirections(response);
        console.log(response);
        //this.showSteps(response);

        var leg = response.routes[0].legs[0];
        this.startMarker.push( new google.maps.Marker({ position: leg.start_location, map: this.map, icon: 'assets/spr_bluecar_0resize.png' }));
        this.endMarker.push( new google.maps.Marker({ position: leg.end_location, map: this.map, icon: 'assets/logo.png' }));
        // this.makeMarker( leg.start_location, 'assets/spr_bluecar_0resize.png' );
        // this.makeMarker( leg.end_location, 'assets/logp.png');
      } else {
        alert('Could not display directions due to: ' + status);
      }
    }
    );
    // this.marker = new google.maps.Marker({
    //   position: new google.maps.LatLng(Number(sessionStorage.getItem("lat")), Number(sessionStorage.getItem("lng"))),
    //   map: this.map,
    //   icon: 'assets/logo.png'
    // } );
  }

  showSteps(directionsResult) {
    var myRoute = directionsResult.routes[0].legs[0];
    for (var i = 0; i < myRoute.steps.length; i++) {

    };
    var marker = new google.maps.Marker({
      position: myRoute.steps[i - 1].end_point,
      map: this.map,
      icon: 'assets/spr_bluecar_0resize.png'
    });
  }
  // makeMarker(posish, img){
  //   let marker = new google.maps.Marker;
  //   marker.setMap(this.map);
  //   marker.setPosition(posish);
  //   marker.setIcon(img);
  // }

  displayDriversList(origin, drivers) {
    let origins = [];
    //set origin
    origins.push(origin);

    var outputDiv = document.getElementById('output');
    drivers.forEach(element => {

      var service = new google.maps.DistanceMatrixService;
      service.getDistanceMatrix({
        origins: origins,
        destinations: [element.origin],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false
      }, function (response, status) {
        if (status !== 'OK') {
          alert('Error was: ' + status);
        } else {
          var originList = response.originAddresses;
          var destinationList = response.destinationAddresses;
          var results = response.rows[0].elements;
          var name = element.name;
          element.distance = results[0].distance.text;
          element.duration = results[0].duration.text;
        }
      });


    });
  }


}
