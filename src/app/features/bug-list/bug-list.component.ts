import { Component, OnInit } from '@angular/core';
import { RestServicesService } from 'src/app/shared/rest-services/rest-services.service';
import { Bug } from 'src/app/shared/models/Bug';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {

  constructor(private restService: RestServicesService) { }

  ngOnInit() {
    this.restService.getAllBugs().subscribe((bugs: Bug[]) => {
      console.log(bugs);
    });
  }

}
