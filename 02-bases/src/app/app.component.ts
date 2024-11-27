import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi Primera App de Angular';
  public counter: number = 10;



  increaseby():void{
    this.counter +=1;
  }
  decresaseby():void{
    this.counter -=1;
  }
}
