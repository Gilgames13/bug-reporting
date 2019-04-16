import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule, MatButtonModule, MatDividerModule,
  MatTableModule, MatSortModule, MatProgressSpinnerModule,
  MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    MatProgressSpinnerModule
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
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class SharedMaterialModule { }
