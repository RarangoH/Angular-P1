import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByContryPageComponent } from './pages/by-contry-page/by-contry-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes:Routes = [
  {
    path:'bycapital',
    component:ByCapitalPageComponent
  },
  {
    path:'byregion',
    component:ByRegionPageComponent
  },
  {
    path:'bycountry',
    component:ByContryPageComponent
  },{
    path:'by/:id',
    component:CountryPageComponent
  },{
    path:'**',
    redirectTo:'bycapital'
  }

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],

})
export class CountriesRoutingModule { }
