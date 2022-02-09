import styled from 'styled-components';

export const StyledSwitch = styled.div`
  &{
    display: inline-block;
    background-color: var(--lightgray-2-color);
    border-radius: 8px;
    font-family: var(--font-family-bold);
    position: relative;
    .btn{
      margin: 5px;
      display: inline-block;
      padding: 8px;
      position: relative;
      text-align: center;
      transition: background 600ms ease, color 600ms ease;
      border-radius: 6px;
    }
    input[type="radio"].toggle {
      visibility: hidden;
      margin: 0;
      & + label{
          cursor: pointer;
          min-width: 60px;
          color: lightgray;
          font-size: 16px;
          &:after{
              background: #1a1a1a;
              content: "";
              height: 100%;
              position: absolute;
              top: 0;
              transition: left 200ms cubic-bezier(0.77, 0, 0.175, 1);
              width: 100%;
              z-index: -1;
          }
      }
      &.toggle-left{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 50%;
        left: 0;
        height: 100%;
      }
      &.toggle-right{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 50%;
        height: 100%;
      }
      &.toggle-left + label {
          border-right: 0;
          &:after{
              left: 100%
          }
      }
      &.toggle-right + label{
          &:after{
              left: -100%;
          }
      }
      &:checked + label {
          cursor: default;
          color: var(--blue-color);
          transition: color 200ms;
          background-color: var(--white-color);
          &:after{
              left: 0;
          }
      }
   }
  }
`;