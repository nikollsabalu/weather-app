import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kilometer',
})
export class KilometerPipe implements PipeTransform {
  transform(value: number): number {
    return value / 1000;
  }
}
