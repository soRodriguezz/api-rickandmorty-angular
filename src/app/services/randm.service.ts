import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RickAndMorty } from '../interfaces/rickAndMortyResp.interface';

@Injectable({
  providedIn: 'root'
})
export class RandmService {

  constructor( private http: HttpClient) { }

  getDatosRickAndMorty( idPage: number ): Observable<RickAndMorty> {
    return this.http.get<RickAndMorty>(`https://rickandmortyapi.com/api/character/?page=${ idPage }`);
  }
}
