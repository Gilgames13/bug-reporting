import { Component, OnInit } from '@angular/core';
import { BugRestApiService } from 'src/app/shared/rest-services/bug-rest-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public restApi: BugRestApiService) { }

  ngOnInit() {
  }

  logout() {
    this.restApi.logout();
  }
}
