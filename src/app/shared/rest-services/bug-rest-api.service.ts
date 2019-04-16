import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Bug } from '../models/Bug';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { GetParam } from '../models/GetParam';

@Injectable({
  providedIn: 'root'
})
export class BugRestApiService {

  constructor(private http: HttpClient) { }

  getAllBugs(): Observable<HttpResponse<Bug[]>> {
    // Since the service does not actually provide total count information, we just input a very high number
    // of items per page to "fetch all" available bugs
    return this.getBugsPaginatedSortedWithFilters(0, 100000);
  }

  getBugsPaginatedSortedWithFilters(pageNumber: number = 0, pageSize: number = 10,
      sortBy: string = '', sortOrder: string = '', filters: GetParam[] = []): Observable<HttpResponse<Bug[]>> {
    let params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('size', pageSize.toString());
    params = sortBy !== '' ? params.set('sort', sortBy + ',' + sortOrder) : params;

    filters.forEach((param) => {
      params = params.set(param.key, param.value);
    });

    return this.http.get<Bug[]>(`${env.api_root}/bugs`, { observe: 'response', params });
  }
}
