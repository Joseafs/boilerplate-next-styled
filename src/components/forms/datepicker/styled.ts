import styled from 'styled-components';

export const Label = styled.label`
  font-weight: 600;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.palette.grey[900]};
`;

export const Root = styled.div<{ value: string }>`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  & > div {
    width: 100%;
  }
  & input {
    transition: border 0.2s ease-in-out;
    background-color: #fff;
    padding: 8px 16px;
    margin-top: 4px;
    width: 100%;
    outline: unset;
    min-height: 56px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.palette.grey[800]};

    &:hover,
    :focus {
      border: 2px solid ${({ theme }) => theme.palette.primary.main};
    }
  }

  &:focus-within ${Label} {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
