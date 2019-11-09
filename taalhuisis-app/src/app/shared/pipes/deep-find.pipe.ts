import { Pipe, PipeTransform } from '@angular/core';
import { deepFind } from 'src/app/functions/deep-find';

@Pipe({
  name: 'deepFind'
})
export class DeepFindPipe implements PipeTransform {

  transform(value: any, key: string): any {
    return deepFind(value, key);
  }

}
