import styled from 'styled-components';

export const StyledField = styled.div`
    &{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      > label{
        font-family: var(--font-family-regular);
        font-size: 16px;
        color: var(--black-color);
        margin-bottom: 5px;
        @media (max-width: 767px){
          font-size: 14px;
        }
      }
      > input{
        font-family: var(--font-family-regular);
        border: 1px solid var(--lightgray-color);
        padding: 10px 17px;
        border-radius: 4px;
        font-size: 14px;
        box-sizing: border-box;
        max-height: 40px;
        outline: none;
        &::placeholder{
          color: var(--lightgray-color);
        }
        &:active{
          border: 1px solid var(--blue-color);
        }
        &:focus{
          border: 1px solid var(--black-color);
        }
        &[disabled]{
          background-color: var(--lightgray-2-color);
          border: 1px solid var(--lightgray-2-color);
          pointer-events: none;
        }
      }
      &.small{
        > label{
          font-size: 14px;
        }
      }
      &.error{
        > input{
          border: 1px solid var(--red-color);
        }
      }
      &.success{
        > input{
          border: 1px solid var(--green-color);
        }
      }
    }
`;