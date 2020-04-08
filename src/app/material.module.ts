import { NgModule } from '@angular/core';

//import {MatPaginatorModule} from '@angular/material/paginator';
//import { MatTableModule } from '@angular/material';
//import {MatSort} from '@angular/material/sort';
//import {MatInputModule} from '@angular/material/input';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatInputModule
  ]
})
export class MaterialModule {}
