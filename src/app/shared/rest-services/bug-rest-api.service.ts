import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from '../models/Bug';
import { environment as env} from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BugRestApiService {

  constructor(private http: HttpClient) { }

  getAllBugs(): Observable<Bug[]> {
    return this.http.get<Bug[]>(`${env.api_root}/bugs`);
  }
}
