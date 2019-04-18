import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PriorityEnum } from 'src/app/shared/enums/PriorityEnum';
import { RoleEnum } from 'src/app/shared/enums/RoleEnum';
import { StatusEnum } from 'src/app/shared/enums/StatusEnum';
import { BugRestApiService } from 'src/app/shared/rest-services/bug-rest-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { $enum } from 'ts-enum-util';
import { MatSnackBar } from '@angular/material';
import { Bug } from 'src/app/shared/models/Bug';
import { map, flatMap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.scss']
})
export class BugFormComponent implements OnInit {

  bugForm: FormGroup;
  objectKeys = Object.keys;
  roleOptions: RoleEnum[] = [RoleEnum.QA, RoleEnum.PO, RoleEnum.DEV];
  statusOptions: StatusEnum[] = [StatusEnum.READY_FOR_TEST, StatusEnum.DONE, StatusEnum.REJECTED];
  priorityOptions = $enum(PriorityEnum).getEntries();
  editingBug: Bug = null;

  constructor(private restApi: BugRestApiService,
              private router: Router,
              private snackBar: MatSnackBar,
              private currentRoute: ActivatedRoute) { }

  ngOnInit() {

    this.currentRoute.params.pipe(
      map((params): string => params.id),
      flatMap((id) => {
        if (id) {
          return this.restApi.getBugById(id);
        }
        return of(null);
      }),
      catchError((err) => {
        this.snackBar.open(`Invalid bug ID ${err.error.message}`, 'OK', { duration: 4000 });
        return null;
      })
    ).subscribe((result: Bug) => this.editOrCreateBug(result));
  }

  editOrCreateBug(bug: Bug) {
    this.editingBug = bug;
    console.log('will edit', bug);
    this.bugForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl(null, Validators.required),
      reporter: new FormControl(''),
      status: new FormControl(),
      id: new FormControl()
    });

    this.bugForm.get('reporter').valueChanges.subscribe((value: RoleEnum) => {
      if (value === RoleEnum.QA) {
        this.bugForm.get('status').setValidators(Validators.required);
      } else {
        this.bugForm.get('status').clearValidators();
      }
      this.bugForm.get('status').updateValueAndValidity();
    });
    if (bug) {
      this.bugForm.patchValue(bug);
    }
  }

  saveBug() {
    if (this.bugForm.valid) {
      this.restApi.createEditBug(this.bugForm.value).subscribe((value) => {
        this.router.navigate(['/bug-list']);
      },
        (error) => {
          this.snackBar.open(`Error while saving: ${error.error.message}`, 'OK', { duration: 8000 });
        });
    } else {
      this.snackBar.open(`There are still errors in the form`, 'OK', { duration: 4000 });
    }
  }
}
