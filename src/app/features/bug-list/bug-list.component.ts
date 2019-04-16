import { Component, OnInit } from '@angular/core';
import { BugRestApiService } from 'src/app/shared/rest-services/bug-rest-api.service';
import { Bug } from 'src/app/shared/models/Bug';
import { BugsDatasource } from './bugs-datasource';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {

  listOfBugs: BugsDatasource;
  displayedColumns: string[] = ['title', 'priority', 'reporter', 'createdAt', 'status'];

  constructor(private restService: BugRestApiService) { }

  ngOnInit() {
    this.listOfBugs = new BugsDatasource(this.restService);
    this.listOfBugs.loadBugs();
  }

}
