import { DataSource } from '@angular/cdk/table';
import { Bug } from 'src/app/shared/models/Bug';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { BugRestApiService } from 'src/app/shared/rest-services/bug-rest-api.service';


export class BugsDatasource extends DataSource<Bug>{

  constructor(private restService: BugRestApiService){
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<Bug[]> {
    return this.restService.getAllBugs();
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

  loadBugs(): Observable<Bug[]> {
    return this.restService.getAllBugs();
  }
}
