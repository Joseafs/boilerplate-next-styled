import { render } from '@testing-library/react';
import { ScreenHome } from '.';

const component = <ScreenHome />;

describe('ScreenHome', () => {
  it('Should have the text inside', () => {
    const { queryByText } = render(component);
    expect(queryByText('Boilerplate NextJs + Styled-components')).toBeTruthy();
  });
});
