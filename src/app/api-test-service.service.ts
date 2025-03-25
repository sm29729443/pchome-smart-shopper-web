import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTestServiceService {
  http = inject(HttpClient);
  constructor() { }

  query():Observable<any>{
    return this.http.get('http://localhost:9080/api/getTest');
  }
}
