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
import { Sort } from '@angular/material';

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
  theSort: Sort = { active: '', direction: '' };

  constructor(private restService: BugRestApiService, private fb: FormBuilder) { this.createForm(); }

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
    this.paginator.pageIndex = 0;
    this.reloadBugs();
  }

  loadNextBugs() {
    console.log('Page index: ' + this.paginator.pageIndex);
    this.reloadBugs();
  }

  sortData(sort: Sort) {
    console.log('sorting');
    sort.direction !== '' ? this.theSort = sort : this.theSort = { active: '', direction: '' };
    this.reloadBugs();
  }

  reloadBugs() {
    this.listOfBugs.loadBugs(this.paginator.pageIndex, this.paginator.pageSize,
      this.theSort.active, this.theSort.direction, this.bugSearchForm.value as Filters);
  }

}
