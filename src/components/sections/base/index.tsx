import { memo } from 'react';
import { Container, Root } from './styled';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const OgSectionBase = ({ children, className }: Props) => {
  return (
    <Root className={className}>
      <Container>{children}</Container>
    </Root>
  );
};

export const SectionBase = memo(OgSectionBase);
