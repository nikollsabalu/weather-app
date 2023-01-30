import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: string, celsius: boolean = false): string {
    if (celsius) {
      return `${(parseInt(value) - 273.15).toFixed(2)} °C`;
    } else {
      return `${value} °C`;
    }
  }
}
