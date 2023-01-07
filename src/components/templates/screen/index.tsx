import { memo, ReactNode } from 'react';
import { Body, Root } from './styled';

type Props = {
  children: ReactNode;
};

const OgTemplateScreen = ({ children }: Props) => {
  return (
    <Root>
      <Body>{children}</Body>
    </Root>
  );
};

export const TemplateScreen = memo(OgTemplateScreen);
