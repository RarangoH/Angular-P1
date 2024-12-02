import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/services.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{


  public countries: Country[] = [];
  public isLoading:boolean = false;
  public initialValue:string = '';

  constructor(private countryservice: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countryservice.cacheStore.byCapital.countries;
    this.initialValue = this.countryservice.cacheStore.byCapital.term;
  }


  searchByCapital( term:string):void{
    this.isLoading = true;
      this.countryservice.searchCapital(term).subscribe(countries => {
        this.countries = countries
        this.isLoading = false;
      });
      //se tiene que subscribir al observable para que se emita


  }
}
