import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {Equipo} from './equipo';
import { EquipoDetail } from './equipo-detail';


@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private apiUrl: string = environment.baseUrl + '/equipo';

  constructor(private http: HttpClient) { }

  getEquipos(): Observable<EquipoDetail[]> {
    return this.http.get<EquipoDetail[]>(this.apiUrl);
  }



}
