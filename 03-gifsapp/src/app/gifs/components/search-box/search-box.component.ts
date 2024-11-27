import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsserviceService } from '../../services/gifsservice.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>


  constructor(private gifsservice: GifsserviceService){}



  searchTag(){
    const newTag = this.tagInput.nativeElement.value
 // searchTag(newTag:string){
    // console.log({newTag})
    this.gifsservice.searchTag(newTag)
    this.tagInput.nativeElement.value = '';
  }
}
