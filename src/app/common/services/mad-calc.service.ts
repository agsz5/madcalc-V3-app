import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MadCalcApiResponse } from '../models/index';

@Injectable({
  providedIn: 'root',
})
export class MadCalcService {
  private apiUrl = 'https://api.jsonbin.io/v3/b/66a3b5e9e41b4d34e4176a93';
  private masterKey =
    '$2a$10$BhihPYqzQ1s8k/vm6w47POm6EvZ2W.dDZSQIu1IImzFdW3UUsxlpK';
  private accessKey =
    '$2a$10$RdXrlboYuRaLCW4p/SP7reVZmv7roV5hVAONtmdYZAGFur5546d8G';

  constructor(private http: HttpClient) {}

  getData(): Observable<MadCalcApiResponse> {
    const headers = new HttpHeaders({
      'X-Master-Key': this.masterKey,
      'X-Access-Key': this.accessKey,
    });
    return this.http.get<MadCalcApiResponse>(this.apiUrl, { headers });
  }
}
