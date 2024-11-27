import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [HeroComponent,
    ListaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeroComponent,ListaComponent
  ]
})
export class HeroesModule { }
