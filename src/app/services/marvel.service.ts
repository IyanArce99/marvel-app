import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  readonly API_URL = 'http://gateway.marvel.com/v1/public/';
  readonly KEY = '?ts=1&apikey=274f786375a564d2fb5fd3155bee9721&hash=954a63f8f205aff9c340a5313dacd675';
  constructor(private http: HttpClient) { }

  getAllCharacter(): Observable<any> {
    return this.http.get<any>(this.API_URL + 'characters' + this.KEY + '&limit=100')
      .pipe(map((data: any) => data.data.results))
  }
}
