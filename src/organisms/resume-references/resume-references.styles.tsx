import styled from 'styled-components';

export const StyledResumeReferences = styled.div`
  &{
    padding: 16px 24px;
    box-shadow: var(--boxshadow-default);
    border-radius: 8px;
    max-width: 630px;
    box-sizing: border-box;
    background-color: var(--white-color);
    @media (max-width: 767px){
      max-width: 345px;
      padding: 16px;
    }
    .column-1{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
      h5{
        font-family: var(--font-family-semibold);
        font-size: 16px;
        color: var(--blue-color);
        margin: 0;
        @media (max-width: 767px){
          font-size: 14px;
        }
      }
      button{
        padding-right: calc(16px * 2.5);
        @media (max-width: 767px){
          font-size: 12px;
        }
      }
    }
    .column-2{
      .table-wrapper{
        display: flex;
        flex-direction: column;
        .header-wrapper{
          display: flex;
          gap: 20px;
          margin-bottom: 16px;
          > div{
            font-family: var(--font-family-regular);
            font-style: normal;
            font-size: 12px;
            color: var(--blue-color);
            flex: 1;
            &:nth-child(1){
              max-width: 50px; /** Image wrapper **/
              @media (max-width: 767px){
                display: none;
              }
            }
            &:nth-child(2){
              max-width: 120px; /** Ref. wrapper **/
              @media (max-width: 767px){
                max-width: 90px;
              }
            }
            &:nth-child(4), &:nth-child(5){
              max-width: 80px; /** Uds., PVR wrapper **/
              text-align: center;
              @media (max-width: 767px){
                max-width: 50px;
              }
            }
          }
        }
        .body-wrapper{
          display: flex;
          flex-direction: column;
          max-height: 330px;
          overflow-y: auto;
          &::-webkit-scrollbar {
            width: 7px;
          }
          &::-webkit-scrollbar-track {
            background: var(--blue-4-color); 
          }
          &::-webkit-scrollbar-thumb {
            background: var(--blue-7-color); 
          }
          .row-wrapper{
            display: flex;
            gap: 20px;
            &:not(:last-child){
              margin-bottom: 16px;
            }
            > div{
              flex: 1;
              font-family: var(--font-family-regular);
              font-size: 12px;
              line-height: 16px;
              &:nth-child(1){
                max-width: 50px; /** Image wrapper **/
                @media (max-width: 767px){
                  display: none;
                }
              }
              &:nth-child(2){
                max-width: 120px; /** Ref. wrapper **/
                @media (max-width: 767px){
                  max-width: 90px;
                }
              }
              &:nth-child(4), &:nth-child(5){
                max-width: 80px; /** Uds., PVR wrapper **/
                text-align: center;
                @media (max-width: 767px){
                  max-width: 50px;
                }
              }
              .image{
                width: 50px;
                height: 35px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
              }
            }
          }
        }
      }
    }
  }
`;