import styled from 'styled-components';

export const StyledCheckbox = styled.label`
  &{
    display: flex;
    align-items: center;
    font-family: var(--font-family-regular);
    font-size: 14px;
    input[type="checkbox"]{
      margin-right: 5px;
      cursor: pointer;
      -webkit-appearance: none;
      appearance: none;
      background-color: var(--white-color);
      font: inherit;
      color: currentColor;
      width: 24px;
      height: 24px;
      border: 1px solid var(--lightgray-color);
      border-radius: 4px;
      transform: translateY(-0.075em);
      display: flex;
      justify-content: center;
      align-items: center;
      &::before{
        content: "";
        width: 14px;
        height: 14px;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transform-origin: bottom left;
        transition: 120ms transform ease-in-out;
        background-color: CanvasText;
      }
      &:checked{
        background-color: var(--blue-color);
        border: none;
      }
      &:checked:before{
        transform: scale(1);
        background-color: var(--white-color);
      }
      &:disabled{
        background-color: var(--lightgray-color);
        cursor: default;
        &:checked:before{
          background-color: var(--darkgray-2-color);
        }
      }
      
    }
  }
`;