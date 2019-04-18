import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BugRestApiService } from 'src/app/shared/rest-services/bug-rest-api.service';
import { BugsDatasource } from './bugs-datasource';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Filters } from '../../shared/models/filters';
import { RoleEnum } from 'src/app/shared/enums/RoleEnum';
import { StatusEnum } from 'src/app/shared/enums/StatusEnum';
import { $enum } from 'ts-enum-util';
import { PriorityEnum } from 'src/app/shared/enums/PriorityEnum';
import { MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { GenericDialogComponent } from 'src/app/shared/shared-material/generic-dialog/generic-dialog.component';
import { GenericDialogValues } from 'src/app/shared/enums/GenericDialogValues';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit, AfterViewInit {

  listOfBugs: BugsDatasource;
  displayedColumns: string[] = ['title', 'priority', 'reporter', 'createdAt', 'status', 'Actions'];
  totalBugs: number;
  roleOptions: RoleEnum[] = [RoleEnum.QA, RoleEnum.PO, RoleEnum.DEV];
  statusOptions: StatusEnum[] = [StatusEnum.READY_FOR_TEST, StatusEnum.DONE, StatusEnum.REJECTED];
  priorityOptions = $enum(PriorityEnum).getEntries();
  bugSearchForm: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private restService: BugRestApiService, private fb: FormBuilder, public dialog: MatDialog, private snackBar: MatSnackBar, ) { this.createForm(); }

  ngOnInit() {
    this.listOfBugs = new BugsDatasource(this.restService);
    this.loadNextBugs();
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.loadNextBugs())
      )
      .subscribe();
  }

  createForm() {
    this.bugSearchForm = this.fb.group({
      title: '',
      priority: new FormControl(''),
      reporter: '',
      status: ''
    });
  }

  search() {
    console.log('search');
    this.listOfBugs.loadBugs(this.paginator.pageIndex, this.paginator.pageSize, '', '', this.bugSearchForm.value as Filters);
  }

  delete(id: string) {
    const dialogConfig: MatDialogConfig<GenericDialogValues> = {
      disableClose: true,
      data: {
        title: `Deleting ${id}`,
        content: `Are you sure you want to delete the bug with id: ${id}?`,
        acceptButton: 'Delete',
        cancelButton: 'Cancel'
      }
    };
    this.dialog.open(GenericDialogComponent, dialogConfig).afterClosed().subscribe((answer: boolean) => {
      if (answer) {
        this.restService.deleteBug(id).subscribe((result) => {
          if (result === true) {
            this.paginator.pageIndex = 0;
            this.loadNextBugs();
          } else {
            this.snackBar.open(`Error while trying to delete ${id}`, 'OK', { duration: 3000 });
          }
        }, error => {
          this.snackBar.open(`Error while trying to delete ${id}`, 'OK', { duration: 3000 });
        });
      }
    });
  }

  loadNextBugs() {
    console.log('Page index: ' + this.paginator.pageIndex);
    this.listOfBugs.loadBugs(this.paginator.pageIndex, this.paginator.pageSize, '', '', this.bugSearchForm.value as Filters);
  }

}
