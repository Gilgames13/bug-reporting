import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatDividerModule, MatTableModule, MatSortModule, MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSnackBarModule, MatTooltipModule, MatPaginatorModule, MatPaginator, MatSelectModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';

@NgModule({
  declarations: [GenericDialogComponent],
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
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
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
    MatPaginatorModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    AngularFontAwesomeModule
  ],
  entryComponents: [
    GenericDialogComponent
  ],
})
export class SharedMaterialModule { }
