import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {

public searchInput = new FormControl('');

public heroes:Hero[] = [];


constructor(private herosService: HeroService){

}
serachHero(){
  const value:string = this.searchInput.value || '';
  this.herosService.getSuggestions(value)
  .subscribe(heroes => this.heroes = heroes);

}
}
