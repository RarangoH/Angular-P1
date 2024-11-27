import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-imge',
  templateUrl: './lazy-imge.component.html',
  styleUrl: './lazy-imge.component.css'
})
export class LazyImgeComponent implements OnInit{

  @Input()
  public url!:string

  @Input()
  public alt:string = ''


  ngOnInit(): void {
    if(!this.url)
    throw new Error('Method not implemented.');
  }

  public hasLoaded:boolean = false;

  onLoad(){
    setTimeout(() =>{
      this.hasLoaded = true;
    },1000)

  }



}
