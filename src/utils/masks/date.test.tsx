import { isValidDate } from './date';

describe('isValidDate', () => {
  it('Should date be valid', async () => {
    expect(isValidDate('10/10/2022')).toBeTruthy();
  });
  it('Should date be invalid', async () => {
    expect(isValidDate('10/10/20222')).toBeFalsy();
    expect(isValidDate('10/10/0222')).toBeFalsy();
    expect(isValidDate('2020')).toBeFalsy();
    expect(isValidDate('1/1/2')).toBeFalsy();
  });
});
