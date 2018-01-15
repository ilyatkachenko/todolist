import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {

  transform(items: any, status?: any): any {
    return status ? items.filter(stat => stat.status === status) : items;
  }

}
