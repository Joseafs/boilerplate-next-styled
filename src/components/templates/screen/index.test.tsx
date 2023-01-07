import { render } from '@testing-library/react';
import { ThemeUI } from '~/theme/theme-provider';
import { TemplateScreen } from '.';

const component = (
  <ThemeUI>
    <TemplateScreen>Jest test</TemplateScreen>
  </ThemeUI>
);

describe('TemplateScreen', () => {
  it('Should have the text inside', () => {
    const { queryByText } = render(component);
    expect(queryByText('Jest test')).toBeTruthy();
  });
});
