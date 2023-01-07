import { useTheme } from 'styled-components';

export const spaceCalc = (space: number[], type: 'margin' | 'padding') => {
  const theme = useTheme();

  const calc = (value: number) => value * theme.space;

  return space.length === 1
    ? `${type}: ${calc(space[0])}px`
    : space.length === 2
    ? `${type}: ${calc(space[0])}px ${calc(space[1])}px`
    : space.length === 3
    ? `${type}: ${calc(space[0])}px ${calc(space[1])}px ${calc(space[2])}px`
    : space.length === 4
    ? `${type}: ${calc(space[0])}px ${calc(space[1])}px ${calc(
        space[2]
      )}px ${calc(space[3])}px`
    : ``;
};

export const sizeImg = (space: string[]): {} => {
  return space.length === 1
    ? { width: space[0] }
    : space.length === 2
    ? { width: space[0], height: space[1] }
    : {};
};
