import { DataSource } from '@angular/cdk/table';
import { Bug } from 'src/app/shared/models/Bug';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BugRestApiService } from 'src/app/shared/rest-services/bug-rest-api.service';
import { GetParam } from 'src/app/shared/models/GetParam';
import { HttpResponse } from '@angular/common/http';


export class BugsDatasource extends DataSource<Bug> {

  totalRecords = 0;
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  bugs$: BehaviorSubject<Bug[]> = new BehaviorSubject<Bug[]>([]);

  constructor(private restService: BugRestApiService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<Bug[]> {
    return this.bugs$.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

  loadBugs( pageNumber: number = 0, pageSize: number = 10,
            sortBy: string = '', sortOrder: string = '', filters: GetParam[] = []) {

    this.loading$.next(true);
    this.restService.getBugsPaginatedSortedWithFilters(pageNumber, pageSize, sortBy, sortOrder, filters).pipe(
      map((response: HttpResponse<Bug[]>) => {
        this.totalRecords = Number(response.headers.get('Totalrecords'));
        console.log(this.totalRecords);
        return response.body;
      },
        catchError((err) => {
          this.totalRecords = 0;
          return [];
        })
      )).subscribe((results) => {
        this.bugs$.next(results);
        this.loading$.next(false);
      });
  }
}
