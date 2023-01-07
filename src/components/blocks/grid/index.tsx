import React, { memo } from 'react';

import { Root } from './styled';

type PropsWidth = 'desktop' | 'tablet' | 'mobile' | string;

export type PropsGridSM = {
  mgnSM?: number[];
  pdgSM?: number[];
  maxWidthSM?: PropsWidth;
};

export type PropsGrid = PropsGridSM & {
  mgn?: number[];
  pdg?: number[];
  zind?: string;
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  maxWidth?: PropsWidth;
  bgColor?: string;
  inline?: boolean;
  align?: 'left' | 'center' | 'right';
};

interface Props extends PropsGrid {
  children?: React.ReactNode;
  className?: string;
  as?: 'section' | 'div' | 'article';
}

const OgGrid = ({
  children,
  mgn,
  align,
  pdg,
  zind,
  bgColor,
  overflow,
  maxWidth,
  maxWidthSM,
  mgnSM,
  pdgSM,
  inline,
  className,
  as
}: Props) => {
  return (
    <Root
      zind={zind}
      mgn={mgn}
      as={as}
      align={align}
      pdg={pdg}
      maxWidth={maxWidth}
      bgColor={bgColor}
      overflow={overflow}
      className={className}
      maxWidthSM={maxWidthSM}
      mgnSM={mgnSM}
      pdgSM={pdgSM}
      inline={inline}
    >
      {children}
    </Root>
  );
};

export const Grid = memo(OgGrid);
