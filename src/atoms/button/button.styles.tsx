import styled from 'styled-components';

export const StyledButton = styled.button`
  &{
    border-radius: 4px;
    border: none;
    font-family: var(--font-family-bold);
    cursor: pointer;
    transition: all .1s ease;
    position: relative;
    outline: none;
    &:after{
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 4px;
      background-color: transparent;
      border: 1px solid transparent;
    }
    &:focus-visible{
      outline: none;
    }
    &.big{
      padding: 16px;
      font-size: 16px;
      @media (max-width: 767px){
        font-size: 14px;
      }
    }
    &.medium{
      padding: 12px 16px;
      font-size: 16px;
      @media (max-width: 767px){
        font-size: 14px;
      }
    }
    &.small{
      padding: 10px 16px;
      font-size: 14px;
    }
    &.mobile{
      padding: 8px 16px;
      font-size: 14px;
    }
    &.btn-primary{
      background-color: var(--blue-color);
      color: var(--white-color);
      &:after{
        border: 1px solid var(--blue-color);
      }
      &:hover{
        background-color: var(--blue-2-color);
      }
      &:focus{
        &:after{
          border: 3px solid var(--black-color);
        }
      }
      &:active{
        background-color: var(--darkgray-color);
        &:after{
          border: 1px solid var(--darkgray-color)
        }
      }
      &[disabled]{
        pointer-events: none;
        background-color: var(--lightgray-color);
        cursor: default;
        &:after{
          border: 1px solid var(--lightgray-color);
        }
      }
    }
    &.btn-secondary{
      background-color: var(--white-color);
      color: var(--blue-color);
      &:after{
        border: 1px solid var(--blue-color);
      }
      &:hover{
        color: var(--blue-2-color);
        &:after{
          border: 1px solid var(--blue-2-color);
        }
      }
      &:focus{
        &:after{
          border: 2px solid var(--blue-color);
        }
      }
      &:active{
        background-color: var(--blue-4-color);
      }
      &[disabled]{
        pointer-events: none;
        color: var(--lightgray-color);
        cursor: default;
        &:after{
          border: 1px solid var(--lightgray-color);
        }
      }
    }
    &.btn-tertiary{
      background-color: var(--blue-4-color);
      color: var(--blue-color);
      font-family: var(--font-family-medium);
      &:after{
        border: 1px solid var(--blue-4-color);
      }
      &:focus{
        &:after{
          border: 2px solid var(--blue-color);
        }
      }
      &:active{
        background-color: var(--blue-color);
        color: var(--white-color);
        &:after{
          border: 1px solid var(--blue-color);
        }
      }
      &[disabled]{
        pointer-events: none;
        background-color: var(--lightgray-2-color);
        color: var(--lightgray-color);
        cursor: default;
      }
    }
    &.btn-quaternary{
      background-color: var(--blue-color);
      color: var(--white-color);
      &:after{
        border: 1px solid var(--white-color);
      }
      &:focus{
        &:after{
          border: 2px solid var(--white-color);
        }
      }
      &:active{
        background-color: var(--white-color);
        color: var(--blue-color);
        &:after{
          border: 1px solid var(--white-color);
        }
      }
      &[disabled]{
        pointer-events: none;
        color: var(--white-color);
        opacity: .5;
        cursor: default;
      }
    }
    &.btn-quinary{
      background-color: transparent;
      color: var(--white-color);
    }
  }
`;