import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private http = inject(HttpClient)

  private apiKey: string = "ueCeSvCRylfQYFeThbxDXFV6lhc65RAdDrxgCh7L";

  constructor() { }

  getImageOfTheDay(): Observable<unknown>  {
    return this.http.get<unknown>(`https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`)
  }
}
