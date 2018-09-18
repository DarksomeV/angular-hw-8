import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myarray',
  pure: false
})

export class MyArrPipe implements PipeTransform {
  transform(value: number[]): any {
    let result: number = 0;

    value.forEach( num => result += num);
    console.log(result);
    return result;
  }
}
