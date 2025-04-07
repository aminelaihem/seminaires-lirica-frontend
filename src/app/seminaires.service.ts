import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seminaire } from './seminaire.model';

@Injectable({
  providedIn: 'root'
})
export class SeminairesService {
  private apiUrl = 'http://localhost:3000/api/seminaires';

  constructor(private http: HttpClient) { }

  getSeminaires(): Observable<Seminaire[]> {
    return this.http.get<Seminaire[]>(this.apiUrl);
  }
}
