import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GenericDialogValues } from '../../enums/GenericDialogValues';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.scss']
})
export class GenericDialogComponent {

  title: string;
  content: string;
  acceptButton: string;
  cancelButton?: string | boolean = false;

  constructor(public dialogRef: MatDialogRef<GenericDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: GenericDialogValues) {
    if (data) {
      ({ title: this.title, content: this.content, acceptButton: this.acceptButton, cancelButton?: this.cancelButton } = data);
    }
  }
  cancel() {
    this.dialogRef.close(false);
  }

  accept() {
    this.dialogRef.close(true);
  }
}
