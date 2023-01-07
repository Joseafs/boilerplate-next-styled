import { fireEvent, render } from '@testing-library/react';
import { ThemeUI } from '~/theme/theme-provider';
import { Datepicker } from '.';

const mockFn = jest.fn();

const component = (
  <ThemeUI>
    <Datepicker date={''} setDate={mockFn} label="Test Field" />
  </ThemeUI>
);

describe('Datepicker', () => {
  it('Should match snapshot', () => {
    const { container } = render(component);
    expect(container).toMatchSnapshot();
  });

  it('Should mockFn on input change', () => {
    const { queryByPlaceholderText } = render(component);
    const input = queryByPlaceholderText('00/00/0000') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '10/10/2020' } });
    expect(mockFn).toBeCalled();
  });
});
