import { Component } from '@angular/core';
import { GifsserviceService } from '../../services/gifsservice.service';
import { Gif } from '../../interfaces/gifs.interfacse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private gifsService: GifsserviceService){



  }
  get gifs(): Gif[]{
      return this.gifsService.gifList
  }
}
