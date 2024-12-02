import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {


  public nameLower:string = 'estaesunaprueba'
  public nameUpper:string = 'ESTAESUNAPRUEBA'
  public fullname:string = 'esTaESunAPrUeBa'

  public customDate:Date = new Date();
}
