import styled, { css } from 'styled-components';
import { PropsBaseColors, PropsBaseColorsOptions } from '~/types/theme';
import { getThemeColor } from '~/utils/theme';

type Props = {
  height?: string;
  color?: PropsBaseColors;
  type?: PropsBaseColorsOptions;
};

export const BlockColor = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme, height, color, type }) => css`
    min-height: ${height ? height : '100px'};
    background-color: ${getThemeColor(theme, color, type)};
  `}
`;
