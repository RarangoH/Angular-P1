import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, pipe } from 'rxjs';
import { enviroments } from '../../../enviroments/enviroments';
import { Hero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  private baseURL: string = enviroments.baseURL;

  constructor(private http: HttpClient) { }



  getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseURL}/heroes`)

  }


  getHeroById(id: string):Observable<Hero | undefined>{
    return this.http.get<Hero>(`${this.baseURL}/heroes/${id}`)
    .pipe(
      //of es una forma de crear observables basado en lo que se pasa por los parentesis, es decir en este caso si da error retornara un observable que retorna undefined
      catchError(error => of(undefined))
    )
  }

  getSuggestions(query:string):Observable<Hero[]>{
    return this.http.get<Hero[]>(`/heroes?q=${query}&_limit=6`)
  }
}
