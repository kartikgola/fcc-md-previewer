import { Pipe, PipeTransform } from '@angular/core';

declare let marked: any;

@Pipe({
  name: 'parsedMd'
})
export class ParsedMdPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if ( value.length > 0 )
      return marked(value);
    return '';
    }

}
