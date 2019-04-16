import { Component, OnInit } from '@angular/core';
import { BugRestApiService } from 'src/app/shared/rest-services/bug-rest-api.service';
import { Bug } from 'src/app/shared/models/Bug';
import { BugsDatasource } from './bugs-datasource';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Filters } from '../../shared/models/filters';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {

  listOfBugs: BugsDatasource;
  displayedColumns: string[] = ['title', 'priority', 'reporter', 'createdAt', 'status'];
  bugSearchForm: FormGroup;
  myList: Bug[];

  constructor(private restService: BugRestApiService, private fb: FormBuilder) { this.createForm(); }

  ngOnInit() {
    this.listOfBugs = new BugsDatasource(this.restService);
    // this.listOfBugs.loadBugs();
    this.restService.getAllBugs().
      subscribe(response => {
        this.myList = response.body;
      },
        error => console.log('error while getting data'));
  }

  createForm() {
    this.bugSearchForm = this.fb.group({
      title: '',
      priority: '',
      reporter: '',
      status: ''
    });
  }

  search() {
    console.log('search');
    this.restService.getBugsPaginatedSortedWithFilters(0, 10, '', '', this.bugSearchForm.value as Filters).
      subscribe(response => {
        this.myList = response.body;
      },
        error => console.log('error while getting data'));
  }

}
