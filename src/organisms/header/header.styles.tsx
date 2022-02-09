import styled from 'styled-components';

export const StyledHeader = styled.header.attrs((props: { displayMenu: boolean }) => props)`
  &{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--lightgray-4-color);
    padding: 0 24px;
    height: var(--header-primary-height);
    box-sizing: border-box;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: var(--white-color);
    @media (max-width: 767px){
      height: 65px;
      padding: 0 16px;
    }
    > .first-column{
      display: flex;
      align-items: center;
      gap: 12px;
      > div{
        width: 112px;
        height: 72px;
        background-position: center;
        background-repeat: no-repeat;
        @media (max-width: 767px){
          width: 72px;
          height: 24px;
          background-size: 100%;
        }
      }
      > span{
        font-family: var(--font-family-regular);
        color: var(--blue-color);
        font-size: 16px;
        letter-spacing: -1px;
        line-height: 1;
        padding-top: 10px;
        cursor: default;
        @media (max-width: 767px){
          font-size: 10px;
          max-width: 65px;
          padding-top: 0;
        }
      }
    }
    > .second-column{
      display: flex;
      align-items: center;
      gap: 50px;
      &.is-logged{
        gap: 10px;
      }
      > a{
        font-family: var(--font-family-semibold);
        color: var(--black-color);
        font-size: 18px;
        text-decoration: none;
        @media (max-width: 767px){
          font-size: 14px;
        }
      }
      .profile-img{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: var(--blue-color);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-family-regular);
        font-size: 16px;
        color: var(--lightgray-3-color);
      }
      .profile-data{
        display: flex;
        flex-direction: column;
        > span:first-child{
          font-family: var(--font-family-semibold);
          color: var(--black-color);
          font-size: 16px;
        }
        > span:last-child{
          font-family: var(--font-family-regular);
          color: var(--lightgray-3-color);
          font-size: 14px;
        }
      }
      .btn-icon{
        background-color: transparent;
        background-repeat: no-repat;
        border: none;
        outline: none;
        width: 24px;
        height: 24px;
      }
      .menu-wrapper{
        display: ${(props)=>props.displayMenu ? 'block' : 'none'};
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--white-color);
        z-index: 10;
        padding: 24px;
        @media (max-width: 1024px){
          top: 80px;
        }
        @media (max-width: 767px){
          top: 65px;
          padding: 24px 16px;
        }
        > ul{
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        > .separator{
          margin: 32px 0;
          height: 1px;
          background-color: var(--lightgray-color);
          width: 100%;
        }
        > .block-2{
          display: flex;
          flex-direction: column;
          gap: 20px;
          > div{
            display: flex;
            align-items: center;
            gap: 8px;
          }
        }
      }
    }
  }
`;