import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {Partido} from './partido';
import { SeguroDetail } from './partido-detail';


@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  private apiUrl: string = environment.baseUrl + '/partido';

  constructor(private http: HttpClient) { }

  getPartidos(): Observable<PartidoDetail[]> {
    return this.http.get<PartidoDetail[]>(this.apiUrl);
  }



}
