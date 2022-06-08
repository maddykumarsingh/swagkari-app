import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupee'
})
export class RupeePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return 'Rs.' + value;
  }

}
