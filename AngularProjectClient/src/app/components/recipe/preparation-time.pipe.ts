import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preparationTime',
  standalone: true
})
export class PreparationTimePipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    if (hours === 0) {
      return `${minutes} minutes`;
    } else if (minutes === 0) {
      return `${hours} hours`;
    } else {
      return `${hours} hours and ${minutes} minutes`;
    }
  }

}
