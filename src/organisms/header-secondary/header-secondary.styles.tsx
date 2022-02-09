import styled from 'styled-components';

export const StyledHeaderSecondary = styled.header`
  &{
    display: flex;
    align-items: center;
    gap: 150px;
    background-color: var(--blue-6-color);
    border: 1px solid var(--lightgray-color);
    padding: 16px 40px;
    box-sizing: border-box;
    height: var(--header-secondary-height);
    @media (max-width: 1024px){
      flex-direction: column;
      gap: 10px;
      padding: 12px 16px;
      align-items: flex-start;
      height: auto;
    }
    .first-column{
      flex: 1;
      > h5{
        font-family: var(--font-family-semibold);
        color: var(--blue-color);
        font-size: 16px;
        margin: 0 0 5px 0;
        @media (max-width: 1024px){
          font-size: 14px;
        }
      }
      > p{
        font-family: var(--font-family-regular);
        color: var(--black-color);
        font-size: 14px;
        line-height: 20px;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        @media (max-width: 1024px){
          font-size: 12px;
          line-height: 16px;
        }
      }
      > a{
        font-family: var(--font-family-regular);
        font-size: 11px;
        color: var(--blue-color);
        display: inline-block;
        margin-top: 5px;
      }
    }
    .second-column{
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 1024px){
        flex-direction: row;
        gap: 10px;
      }
      > div:first-child{
        display: flex;
        align-items: center;
        gap: 5px;
        > span{
          &:first-child{
            font-family: var(--font-family-regular);
            color: var(--black-color);
            font-size: 16px;
            padding-top: 4px;
            @media (max-width: 1024px){
              font-size: 12px;
              padding-top: 2px;
            }
          }
          &:last-child{
            font-family: var(--font-family-bold);
            color: var(--blue-color);
            font-size: 24px;
            @media (max-width: 1024px){
              font-size: 20px;
            }
          }
        }
      }
      > div:last-child{
        > a{
          font-family: var(--font-family-regular);
          color: var(--black-color);
          font-size: 12px;
          @media (max-width: 1024px){
            font-size: 11px;
            color: var(--blue-color);
          }
        }
      }
    }
  }
`;
