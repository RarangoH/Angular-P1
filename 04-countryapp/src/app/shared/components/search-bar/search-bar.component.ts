import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styles: `
    :host {
      display: block;
    }
  `
})
export class SearchBarComponent implements OnInit, OnDestroy{



  private debouncer: Subject<string> = new Subject();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder:string = ''
   @Input()
  public initialValue:string = ''

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();


  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      this.onDebounce.emit(value)

    })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();

  }

  emitValue(value:string){
    this.onValue.emit(value)
  }

  onKeyPress(searchTerm:string){
    // console.log(searchTerm);
    this.debouncer.next(searchTerm);
//Debouncer

  }
}
