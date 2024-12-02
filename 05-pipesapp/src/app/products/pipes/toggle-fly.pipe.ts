import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleFly'
})

export class ToggleFlyPipe implements PipeTransform {
  transform(value: boolean): 'Vuela' |'No Vuela' {
    return (value) ? 'Vuela':'No Vuela'


  }
}
