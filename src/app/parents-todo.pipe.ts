import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parentsTodo'
})
export class ParentsTodoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.map((parent) => parent.todo).join(', ');
  }

}
