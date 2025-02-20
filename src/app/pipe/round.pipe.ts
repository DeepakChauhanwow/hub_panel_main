import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: any, fixed: number = 0): unknown {
    try {
      value = Number(value);
      if (value && !isNaN(value)) {
        return value.toFixed(fixed);
      } else {
        return Number('0').toFixed(fixed);
      }
    } catch (err) {
      return Number('0').toFixed(fixed);
    }
  }

}
