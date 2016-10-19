import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'status'})
export class StatusPipe implements PipeTransform {

  transform(input: boolean): string {
    return input ? 'Enable' : 'Disable';
  }
}
