import styled from 'styled-components';

export const StyledLabel = styled.div`
  &{
    font-family: var(--font-family-regular);
    display: inline-block;
    border: 1px solid var(--blue-color);
    color: var(--blue-color);
    border-radius: 50px;
    line-height: normal;
    &.small{
      font-size: 11px;
      padding: 2px 8px;
    }
    &.big{
      font-size: 12px;
      padding: 4px 12px;
    }
  }
`;