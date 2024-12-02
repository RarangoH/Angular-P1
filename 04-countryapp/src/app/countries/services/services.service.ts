import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { CacheStored } from '../interfaces/cache-stored.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url:string = 'https://restcountries.com/v3.1'

  public cacheStore:CacheStored = {
    byCapital: {term:'',countries: []},
    byCountry: {term:'',countries: []},
    byRegion: {region:'' ,countries: []}
  }

  constructor(private http:HttpClient) {
    console.log('Countries Service Init');
    this.loadFromLocalStorage();

   }

   private saveToLocalStorage(){
    localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore))
   }

   private loadFromLocalStorage(){
    if(localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStorage')!)
   }


  private getCountriesRequest(url:string):Observable<Country[]>{
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([])),
      delay(300)
    )
  }

  searchCapital(term:string): Observable<Country[]>{
    const url = `${this.url}/capital/${term}`
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byCapital = { term:term, countries:countries}),
      tap(() => this.saveToLocalStorage())
    );
    //pipe es de rxjs
  }
//https://restcountries.com/v3.1/name/{name}
  searchCountry(term:string): Observable<Country[]>{
    const url = `${this.url}/name/${term}`
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byCountry = { term:term, countries:countries}),
      tap(() => this.saveToLocalStorage())
    );
  }
//https://restcountries.com/v3.1/region/{region}
  searchRegion(term:Region):Observable<Country[]>{
    const url = `${this.url}/region/${term}`
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byRegion = { region:term, countries:countries}),
      tap(() => this.saveToLocalStorage())
    );

  }

  searchCountryByAlphaCode(code :string):Observable<Country | null>{
    return this.http.get<Country[]>(`${this.url}/alpha/${code}`)
    .pipe(
      map(countries =>countries.length > 0 ? countries[0]:null),
      catchError(() => of(null))
    );
  }
}
