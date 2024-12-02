import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/services.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{

public countries:Country[] = [];
public regions:Region[] =['Africa','America','Oceania','Asia','Europe'];
public selectedRegion?:Region;

  constructor(private countryService: CountriesService){

  }

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStore.byRegion.region;
  }

  serachByRegion(region:Region){
    this.selectedRegion = region;
    this.countryService.searchRegion(region).subscribe(countries => this.countries = countries);
  }

}
