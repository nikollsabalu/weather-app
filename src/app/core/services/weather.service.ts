import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getForecast(id: number): Observable<any> {
    const url = `${environment.weatherUrl}forecast?id=${id}&appid=${environment.appId}`;
    return this.http.get<any>(url).pipe(
      map(resp => resp.list)
      );
  }

  getLocalization(nombre: string): Observable<any> {
    const url = `${environment.weatherUrl}weather?q=${nombre}&appid=${environment.appId}&units=${environment.units}&lang=${environment.lang}`;
    return this.http.get<any>(url);
  }

  getLocalizationById(id: string): Observable<any> {
    const url = `${environment.weatherUrl}weather?id=${id}&appid=${environment.appId}&units=${environment.units}&lang=${environment.lang}`;
    return this.http.get<any>(url);
  }
}
