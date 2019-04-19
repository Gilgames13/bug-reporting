import { Component, OnInit } from '@angular/core';
import { BugRestApiService } from 'src/app/shared/rest-services/bug-rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public restApi: BugRestApiService, private route: Router) { }

  ngOnInit() {
  }

  logout() {
    this.restApi.logout();
    this.route.navigate(['']);
  }
}
