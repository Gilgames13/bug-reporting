import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BugRestApiService } from 'src/app/shared/rest-services/bug-rest-api.service';
import { BugsDatasource } from './bugs-datasource';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit, AfterViewInit {

  listOfBugs: BugsDatasource;
  displayedColumns: string[] = ['title', 'priority', 'reporter', 'createdAt', 'status'];
  totalBugs: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private restService: BugRestApiService) { }

  ngOnInit() {
    this.listOfBugs = new BugsDatasource(this.restService);
    this.listOfBugs.loadBugs();
  }

  ngAfterViewInit() {
    this.paginator.page
        .pipe(
            tap(() => this.loadNextBugs())
        )
        .subscribe();
  }

  loadNextBugs() {
    console.log('Page index: ' + this.paginator.pageIndex);
    this.listOfBugs.loadBugs(this.paginator.pageIndex, 5, '', '', []).subscribe();
  }

}
