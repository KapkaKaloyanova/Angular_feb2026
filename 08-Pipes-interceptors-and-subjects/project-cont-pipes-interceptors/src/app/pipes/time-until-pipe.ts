import { Pipe, PipeTransform } from '@angular/core';
import { ValueChangeEvent } from '@angular/forms';

@Pipe({
  name: 'timeUntil'
})
export class TimeUntilPipe implements PipeTransform {

  transform(value: string | Date): string {
    if (!value) return '';


    const targetDate = new Date(value);
    const now = new Date();
    const diffMs = targetDate.getTime() - now.getTime();

    if (diffMs < 0) {
      return 'Date expired already';
    }

    const days = diffMs / 86400000;

    if (days === 0) {
      return `today`;
    }
    if (days === 1) {
      return 'tommorow';
    }

    if (days < 28) {
      return `after ${days} days`;
    }

    if (days < 365) {
      const months = Math.floor(days / 30);
      return `after ${months} months`;
    }

    const years = Math.floor(days / 365);
    return `after ${years} years`;
  }

}
