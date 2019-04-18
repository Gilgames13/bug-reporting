import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Bug } from '../models/Bug';
import { environment as env } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { GetParam } from '../models/GetParam';
import { Filters } from '../models/filters';
import { User } from '../models/User';
import { RoleEnum } from '../enums/RoleEnum';

@Injectable({
  providedIn: 'root'
})
export class BugRestApiService {

  constructor(private http: HttpClient) { }

  private pseudoUsers: User[] = [
    { username: 'qa_user', password: 'qa_user', role: RoleEnum.QA },
    { username: 'dev_user', password: 'dev_user', role: RoleEnum.DEV },
    { username: 'po_user', password: 'po_user', role: RoleEnum.PO }
  ];

  public loggedUser: User = null;

  // Fake login :)
  login(userName: string, password: string): Observable<User> {
    this.loggedUser = this.pseudoUsers.find((searchUser) => searchUser.username === userName && searchUser.password === password);
    this.loggedUser = this.loggedUser ? this.loggedUser : null;
    return of(this.loggedUser);
  }

  logout() {
    this.loggedUser = null;
  }

  getAllBugs(): Observable<HttpResponse<Bug[]>> {
    // Since the service does not actually provide total count information, we just input a very high number
    // of items per page to "fetch all" available bugs
    return this.getBugsPaginatedSortedWithFilters(0, 100000);
  }

  getBugsPaginatedSortedWithFilters(pageNumber: number = 0, pageSize: number = 10,
    sortBy: string = '', sortOrder: string = '', filters: Filters = new Filters()): Observable<HttpResponse<Bug[]>> {
    let params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('size', pageSize.toString());
    params = sortBy !== '' ? params.set('sort', sortBy + ',' + sortOrder) : params;

    for (const key of Object.keys(filters)) {
      params = filters[key] ? params.set(key, filters[key]) : params;
    }

    return this.http.get<Bug[]>(`${env.api_root}/bugs`, { observe: 'response', params });
  }

  createEditBug(bug: Bug): Observable<Bug> {
    if (bug.id) {
      console.log('update');
      return this.http.put<Bug>(`${env.api_root}/bugs/${bug.id}`, bug);
    } else {
      return this.http.post<Bug>(`${env.api_root}/bugs`, bug);
    }
  }

  getBugById(id: string): Observable<Bug> {
    return this.http.get<Bug>(`${env.api_root}/bugs/${id}`);
  }

}
