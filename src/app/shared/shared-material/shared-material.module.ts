import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule, MatButtonModule, MatDividerModule,
  MatTableModule, MatSortModule, MatProgressSpinnerModule, MatCardModule,
  MatFormFieldModule, MatInputModule, MatIconModule, MatSnackBarModule,
  MatTooltipModule, MatPaginatorModule, MatPaginator, MatSelectModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    AngularFontAwesomeModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,

    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule,


    MatIconModule,

    AngularFontAwesomeModule,
    MatPaginatorModule,
  ]
})
export class SharedMaterialModule { }
