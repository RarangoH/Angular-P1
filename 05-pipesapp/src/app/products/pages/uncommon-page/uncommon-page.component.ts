import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

//i18nSelect
  public name:string ='Fernando';
  public gender: 'male'|'female' = 'male';
  public invitationMap ={
    male: 'invitarlo',
    female:'invitarla'
  }

  //i18nPlural

  public clients: string[] = ['Maria','Monica','Melisa','Carla','Juana']
  public clientsMap ={
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  //KeyValuePipe
  public person ={
    name:'Fernando',
    age:'36',
    address:'Ottawa, Canada'
  }

  //AsyncPipe
  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:',value)


    )); //Cada dos segundos quiero que emita el siguiente valor

    public myPromiseValue:Promise<string> = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('Tenemos Data en La Promesa');
        console.log('Tenemos data en la promesa');
        this.person.name = 'Otro Nombre'

      },3500)
    })

  changeClient(){
    this.name = 'Melisa'
    this.gender = 'female'
  }

  deleteClient(){
    this.clients.shift();
  }
}
