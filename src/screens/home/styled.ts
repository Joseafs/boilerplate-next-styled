import styled from 'styled-components';
import { useMediaQuery } from '~/utils/theme';

export const Title = styled.h1`
  text-align: center;
  margin: 0;

  @media ${useMediaQuery().maxW.sm} {
    font-size: 1.2rem;
  }
`;
export const ByName = styled.h3`
  text-align: center;

  @media ${useMediaQuery().minW.sm} {
    font-size: 1rem;
  }
`;

export const FlexAlign = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
