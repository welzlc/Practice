import { FormatCurrencyPipe } from './format-currency.pipe';

xdescribe('FormatCurrencyPipe', () => {
  const space = '\u00A0';
  const prefix = 'CHF';
  const pipe = new FormatCurrencyPipe();
  describe('transform', () => {
    it('should transform with space after -', () => {
      expect(pipe.transform(-123)).toBe('-' + space + '123.00');
    });
    it('should transform with space after prefix', () => {
      expect(pipe.transform(123, { currencyPrefix: prefix })).toBe(
        prefix + space + '123.00'
      );
    });
    it('should transform with prefix after value', () => {
      expect(
        pipe.transform(123, { currencyPrefix: prefix, isPrefixLast: true })
      ).toBe('123.00' + space + prefix);
    });
    it('should transform extra tests', () => {
      expect(pipe.transform(123)).toBe('123.00');
      expect(pipe.transform(-123)).toBe('-' + space + '123.00');
      expect(pipe.transform(123, { currencyPrefix: prefix })).toBe(
        prefix + space + '123.00'
      );
      expect(pipe.transform(-123, { currencyPrefix: prefix })).toBe(
        '-' + space + prefix + space + '123.00'
      );
      expect(
        pipe.transform(123, { currencyPrefix: prefix, isPrefixLast: true })
      ).toBe('123.00' + space + prefix);
      expect(
        pipe.transform(-123, { currencyPrefix: prefix, isPrefixLast: true })
      ).toBe('-' + space + '123.00' + space + prefix);
    });
    it('should transform properly when prefix is empty-string but isPrefixLast is true', () => {
      expect(
        pipe.transform(123, { currencyPrefix: '', isPrefixLast: true })
      ).toBe('123.00');
      expect(
        pipe.transform(-123, { currencyPrefix: '', isPrefixLast: true })
      ).toBe('-' + space + '123.00');
    });
    it('should transform use ’ for 1000s', () => {
      expect(pipe.transform(12300)).toBe('12’300.00');
      expect(pipe.transform(1234567)).toBe('1’234’567.00');
    });
  });
  describe('transformWithPlus', () => {
    it('should start with +', () => {
      expect(pipe.transform(123, { showPlus: true })).toBe(
        '+' + space + '123.00'
      );
    });
    it('should start with -', () => {
      expect(pipe.transform(-123, { showPlus: true })).toBe(
        '-' + space + '123.00'
      );
    });
  });
});
