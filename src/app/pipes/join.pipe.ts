import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
  pure: false
})

export class JoinPipe implements PipeTransform {
  transform(array: string[], key: string) {
    const result = array.map(el => !key ? el : el[key]);
    console.log(result);
    return result.join(', ');
  }
}
