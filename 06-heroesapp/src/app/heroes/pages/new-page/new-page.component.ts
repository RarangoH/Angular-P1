import { Hero } from './../../interfaces/hero.interface';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent {


  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('',{nonNullable:true}),
    publisher: new FormControl(''),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl('')
  });

  constructor(private heroesService:HeroService){

  }


  get currentHero():Hero{
    const hero = this.heroForm.value as Hero;
    return hero;
  }


  public publishers = [
    {id:'DC Comics', desc:'DC - Comics'},
    {id:'Marwvel Comics', desc:'Marvel - Comics'},

  ]


  onSubmit():void{



    if(this.heroForm.invalid)return;

    if(this.currentHero.id){
      this.heroesService.updateHero(this.currentHero)
      .subscribe(hero => {
        //TODO: mostrar snackbar
      });

      return;
    }

    this.heroesService.addHero(this.currentHero)
    .subscribe(hero => {
      //TODO: mostrar snackbar, y navegar a /heroes/edit/ hero.id
    })
    // this.heroesService.updateHero(this.heroForm.value);



  }
}
