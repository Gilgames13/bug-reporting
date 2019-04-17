import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatDividerModule, MatTableModule, MatSortModule, MatProgressSpinnerModule, MatCardModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';
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
    MatSnackBarModule,
    MatTooltipModule,
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
    MatSnackBarModule,
    MatTooltipModule,
    AngularFontAwesomeModule
  ]
})
export class SharedMaterialModule { }
