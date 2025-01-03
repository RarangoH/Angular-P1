import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/services.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{


  public country?:Country

  constructor( private activatedRoute: ActivatedRoute, private countriesService: CountriesService, private router:Router){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id))
    )
    .subscribe(country =>{
      if(!country){
        return this.router.navigateByUrl('')
      }
      return this.country = country;



    }


      //en los params deberia imprimir los parametros que se le pasan por la ruta de url (es decir :id en este caso lo que se ponga en vez de id (mirar routing module))
    )
  }

  searchCountry(){

  }
}
