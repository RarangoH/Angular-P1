import { Component } from '@angular/core';
import { GifsserviceService } from '../../../gifs/services/gifsservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  constructor(private gifsService: GifsserviceService){

  }

  get tags(){
    return this.gifsService.tagsHistory;


  }

  searchtagHistory(tag:string){
    this.gifsService.searchTag(tag)
  }

}
