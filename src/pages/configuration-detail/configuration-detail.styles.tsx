import styled from 'styled-components';

export const StyledConfigurationDetail = styled.section`
  & > header{
    position: sticky;
    top: 0;
    z-index: 1;
  }
  & > main{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - var(--header-config-height));
    @media (max-width: 1024px){
      min-height: calc(100vh - var(--header-config-height) - 25px);
    }
    @media (max-width: 767px){
      min-height: calc(100vh - var(--header-config-height) - 50px);
    }
    > .contain-wrapper{
      display: flex;
      flex: 1;
      > .column-1{
        flex: 1;
        padding: 26px 42px;
        @media (min-width: 768px) and (max-width: 1024px){
          padding: 26px;
        }
        @media (max-width: 767px){
          padding: 26px 16px;
        }
        ul + div{
          > div{
            box-shadow: none;
            margin: auto;
            padding: 0;
            .column-1{
              display: none;
            }
            .column-2{
              max-width: 100%;
              flex: 1 1 100%;
              border-left: none;
              .carousel-root{
                min-height: 100%;
                .slide > div{
                  @media (min-width: 768px) and (max-width: 1024px){
                    max-width: 165px;
                  }
                }
                @media (max-width: 767px){
                  .control-arrow{
                    display: none;
                  }
                }
              }
            }
          }
          div{
            box-shadow: none;
            max-width: 100%;
            padding: 0;
            .column-1{
              display: none;
            }
            .column-2{
              max-width: 800px;
              flex: 1 1 800px;
              border-left: none;
              margin: auto;
              .body-wrapper{
                max-height: calc(100vh - var(--header-config-height) - 310px);
                @media (max-width: 767px){
                  max-height: auto;
                }
              }
            }
          }
        }
      }
      > .column-2{
        flex: 1 1 500px;
        max-width: 500px;
        border-left: 1px solid var(--lightgray-color);
        max-height: calc(100vh - var(--header-config-height) - var(--header-secondary-height));
        overflow: auto;
        position: relative;
        @media (max-width: 767px){
          display: none;
        }
        > ul{
          height: 100%;
          li{
            > nav{
              padding: 0;
              border-bottom: none;
              .back-navigation, .next-navigation{
                cursor: pointer;
                padding: 16px;
              }
              .next-navigation{
                border-bottom: 1px solid var(--lightgray-color);
              }
              .back-navigation{
                position: sticky;
                top: 0;
                background-color: var(--white-color);
                border-bottom: 1px solid var(--lightgray-color);
              }
              .item-content{
                overflow: auto;
                > div{
                  padding: 21px;
                  box-sizing: border-box;
                  width: 100%;
                  h3{
                    font-family: var(--font-family-semibold);
                    font-style: normal;
                    font-size: 18px;
                    line-height: 24px;
                    margin-bottom: 32px;
                    color: var(--blue-color);
                  }
                  h4{
                    font-family: var(--font-family-semibold);
                    font-style: normal;
                    font-size: 16px;
                    line-height: 24px;
                    color: var(--black-color);
                    margin-bottom: 28px;
                  }
                  .inline-elements{
                    display: flex;
                    align-items: center;
                    gap: 35px;
                    margin-bottom: 24px;
                    h5{
                      font-family: var(--font-family-regular);
                      font-style: normal;
                      font-size: 16px;
                      line-height: 24px;
                      color: var(--black-color);
                      min-width: 150px;
                      max-width: 150px;
                    }
                    select{
                      max-width: 55px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    } 
  }
`;