import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interfaces/gifs.interfacse';

@Injectable({
  providedIn: 'root'
})
export class GifsserviceService {

  public gifList:Gif[] = [];


  private _tagsHistory:string[] = [];
  private apiKey:string ='77lcGqxhTirTKVDMepB57nahKAsn0jP3'
  private apistirng:string = `api.giphy.com/v1/gifs/search?${this.apiKey}`
  private serviceUrl:string ='https://api.giphy.com/v1/gifs';
  constructor(private http:HttpClient) {
    this.loadLocalStorage()
  }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();
    if(this.tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldtag) => oldtag !== tag)
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10)
    this.saveLocalStorage();
  }

  private saveLocalStorage(){
    localStorage.setItem('history',JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage(){
    if(!localStorage.getItem('history'))return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!)
    if(this._tagsHistory.length === 0 ) return;
    this.searchTag(this._tagsHistory[0])
  }
  searchTag(tag:string):void{
    if(tag.length == 0) return;
    this.organizeHistory(tag)


    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','10')
    .set('q',tag)
    //

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{ params }).subscribe( resp => {
      this.gifList = resp.data
      // console.log(resp)
      // console.log({gifs:this.gifList})
    })
  }

}
