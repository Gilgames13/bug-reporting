import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { BugRestApiService } from 'src/app/shared/rest-services/bug-rest-api.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = null;
  sampleUsers: User[] = [];
  constructor(public restApi: BugRestApiService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.user = this.restApi.loggedUser ? this.restApi.loggedUser : new User();
    this.sampleUsers = this.restApi.getSampleUsers();
  }

  login() {
    this.restApi.login(this.user.username, this.user.password).subscribe((returnedUser) => {
      if (!returnedUser) {
        this.snackBar.open('Could not log you in! :/', 'OK', { duration: 3000 });
      } else {
        this.user = returnedUser;
      }
    });
  }

  logout() {
    this.restApi.logout();
    this.user = new User();
  }
}
