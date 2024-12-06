import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit{
//El OnInit funciona para hacer una peticion HTTP tan pronto el componente este listo

public hero?:Hero;
  constructor(private heroesService: HeroService, private activatedRoute: ActivatedRoute, private router:Router){

  }
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      delay(1500),
      switchMap(({id}) => this.heroesService.getHeroById(id))
    ).subscribe(hero => {
      if(!hero) return this.router.navigate(['/heroes/list']);
      this.hero = hero;
      console.log({hero});

      return;
    }
    )
  }

  goBack(){
    this.router.navigateByUrl('heroes/list')
  }
}
