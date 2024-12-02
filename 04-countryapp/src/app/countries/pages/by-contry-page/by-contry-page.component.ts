import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/services.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-contry-page',
  templateUrl: './by-contry-page.component.html',
  styles: ``
})
export class ByContryPageComponent implements OnInit{

  public countries:Country[] = [];
  public initialValue:string = '';

  constructor(private countryService: CountriesService){

  }
  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountry.countries;
    this.initialValue = this.countryService.cacheStore.byCountry.term;
  }

  searchByCountryName(term:string){
    this.countryService.searchCountry(term).subscribe(countries => this.countries = countries)
  }
}
