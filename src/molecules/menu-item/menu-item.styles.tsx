import styled from 'styled-components';

export const StyledMenuItem = styled.li`
  &{
    list-style: none;
    &:not(:last-child){
      margin-bottom: 10px;
    }
    > a{
      text-decoration: none;
      min-width: 320px;
      max-width: 320px;
      display: inline-flex;
      align-items: center;
      color: var(--white-color);
      background-color: var(--blue-5-color);
      font-size: 16px;
      font-family: var(--font-family-regular);
      padding: 12px;
      min-height: 48px;
      cursor: default;
      &:not(:last-child){
        margin-bottom: 8px;
      }
      @media (max-width: 1024px){
        max-width: 100%;
        width: 100%;
        box-sizing: border-box;
        background-color: var(--blue-4-color);
        color: var(--darkgray-4-color);
      }
      @media (max-width: 767px){
        font-size: 14px;
      }
      > .icon-menu{
        background-size: 16px;
        background-position: center;
        background-repeat: no-repeat;
        width: 16px;
        height: 16px;
        @media (max-width: 1024px){
          height: 20px;
          width: 20px;
          background-size: 100%;
        }
      }
      > .title{
        flex: 1;
        padding: 0 16px;
        @media (max-width: 1024px){
          flex: none;
          padding-right: 32px;
        }
      }
      > .notification-number{
          background-color: var(--white-color);
          color: var(--blue-color);
          font-size: 14px;
          font-family: var(--font-family-regular);
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
          @media (max-width: 1024px){
            font-family: var(--font-family-bold);
          }
      }
    }
    &:not(.item-selected){
      > a{
        background-color: var(--blue-color);
        cursor: pointer;
        @media (max-width: 1024px){
          background-color: var(--white-color);
        }
        > .icon-menu, > .title, > .notification-number{
          opacity: .6;
          @media (max-width: 1024px){
            opacity: 1;
          }
        }
      }
    }
  }
`;