import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency } from '../../helpers/helpers.api';

export interface FormatCurrencyPipeArgument {
  currencyPrefix?: string;
  isPrefixLast?: boolean;
  showPlus?: boolean;
}

@Pipe({
  name: 'formatCurrency',
})
export class FormatCurrencyPipe implements PipeTransform {
  space = '\u00A0';
  transform(
    value: number,
    args: FormatCurrencyPipeArgument = {
      currencyPrefix: '',
      isPrefixLast: false,
      showPlus: false,
    }
  ): string {
    const isNegative: boolean = value < 0 ? true : false;
    return `${!isNegative && args.showPlus ? '+' + this.space : ''}${
      isNegative ? '-' + this.space : ''
    }${
      args.currencyPrefix && !args.isPrefixLast
        ? args.currencyPrefix + this.space
        : ''
    }${formatCurrency(Math.abs(value), '')}${
      args.currencyPrefix && args.isPrefixLast
        ? this.space + args.currencyPrefix
        : ''
    }`;
  }
}
