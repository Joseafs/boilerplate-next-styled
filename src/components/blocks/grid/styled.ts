import styled from 'styled-components';
import { spaceCalc } from '~/utils/theme/space';
import { PropsGrid } from '.';

export const Root = styled.div<PropsGrid>`
  ${({ mgn = [] }) => spaceCalc(mgn, 'margin')};
  ${({ pdg = [] }) => spaceCalc(pdg, 'padding')};

  ${({ zind }) =>
    zind &&
    `
    position: relative;
    z-index: ${zind};`};
  ${({ overflow }) => overflow && `overflow: ${overflow};`};
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`};
  ${({ align }) => align && `text-align: ${align};`};
`;
