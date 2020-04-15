import { Injectable } from '@angular/core';
import { Driver } from 'src/app/models/driver';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DistancefilterService {

  dataSource = new MatTableDataSource<Driver>();

  constructor() { }

  runFilter() {
    this.dataSource.filterPredicate = (data: Driver, filter: string) => {
      return data.distance <= filter;   // returns data to table where distance is less than filtered distance
     };
  }

  filterChange(filterValue: string) {
    this.dataSource.filter = filterValue;
  }
}
