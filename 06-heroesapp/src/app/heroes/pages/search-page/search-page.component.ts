import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {

public searchInput = new FormControl('');

public heroes:Hero[] = [];
public selectedHero?:Hero;

constructor(private herosService: HeroService){

}
searchHero(){
  const value:string = this.searchInput.value || '';

  this.herosService.getSuggestions(value)
  .subscribe(heroes => this.heroes = heroes);
  console.log(this.heroes)
}

onSelectedOption(event: MatAutocompleteSelectedEvent){
  if(!event.option.value){
    this.selectedHero = undefined;
    return
  }
  const hero:Hero = event.option.value;
  this.searchInput.setValue(hero.superhero);
  this.selectedHero = hero;
}
}
