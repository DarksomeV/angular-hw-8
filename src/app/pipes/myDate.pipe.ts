import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeUk, 'uk-UA');
registerLocaleData(localeFr, 'fr');
registerLocaleData(localeDe, 'de');

@Pipe({
  name: 'mydate'
})

export class MyDatePipe implements PipeTransform {
  transform(timestamp: Date = new Date(), locale: string = 'uk-UA', format: string = 'fullDate') {
    let result: string;

    if (!locale || locale === undefined) {
      locale = 'uk-UA';
    }

    result = formatDate(timestamp, format, locale);

    return result;
  }
}
