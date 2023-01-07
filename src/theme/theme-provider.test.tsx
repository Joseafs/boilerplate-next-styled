import { render } from '@testing-library/react';
import { ThemeUI } from './theme-provider';

const component = (
  <ThemeUI>
    <>Text Content</>
  </ThemeUI>
);

describe('ThemeUI', () => {
  it('Should have the text children', () => {
    const { container } = render(component);
    expect(container).toHaveTextContent(/Text Content/);
  });
});
