import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myslice'
})

export class MySlicePipe implements PipeTransform{
  transform(value: string, start: number = 0, end: number = value.length) {
    const result = value.slice(start, end);
    return result;
  }
}
