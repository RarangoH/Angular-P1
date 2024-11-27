import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  public name:string ='ironman';
  public age: number = 45;

  public names:string[] = ['spider','random','cualquier']

  get capitalizedName() {
    return this.name.toUpperCase()
  }


  getheroDesc() {
    return `${this.name }-${this.age}`
  }

  changeHero(){
    this.name = 'superman'
  }

  changeAge(){
    this.age = 50
  }

  removeLastHero(){
    this.names.pop()
  }
}
