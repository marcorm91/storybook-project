import styled from 'styled-components';

export const StyledFilterInputs2 = styled.div.attrs((props: { displayFilter: boolean }) => props)`
    &{
        background-color: var(--blue-6-color);
        > div{
            display: flex;
            flex-direction: column;
            gap: 25px;
            max-width: 1200px;
            margin: auto;
            padding: 32px 16px;
            box-sizing: border-box;
            @media (max-width: 767px){
                gap: 8px;
                padding: 22px 16px;
            }
            > .title-wrapper{
                display: flex;
                justify-content: space-between;
                align-items: center;
                > button{
                    padding: 6px 16px 6px 32px;
                }
                > h2{
                    font-family: var(--font-family-medium);
                    font-style: normal;
                    font-size: 18px;
                    line-height: 24px;
                    color: var(--blue-color);
                    margin-bottom: 32px;
                    @media (max-width: 767px){
                    font-size: 14px;
                    margin-bottom: 0;
                    }
                }
                > .block-filter-wrapper{
                    display: ${(props) => props.displayFilter ? 'flex' : 'none'};
                    flex-direction: column;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: var(--white-color);
                    z-index: 10;
                    padding: 24px 16px;
                    > .title-wrapper{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 32px;
                        h2{
                            font-family: var(--font-family-medium);
                            font-style: normal;
                            font-size: 14px;
                            line-height: 24px;
                            color: var(--blue-color);
                        }
                        button{
                            padding: 6px 16px;
                        }
                    }
                    > .content-select-wrapper{
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                        flex: 1;
                        > div{
                            max-width: 100%;
                        }
                    }
                    > .footer-wrapper{
                        > button{
                            width: 100%;
                        }
                    }
                }
            }
            > .content-select-wrapper{
                display: flex;
                gap: 24px;
                @media (max-width: 767px){
                    display: none;
                }
            }
        }
    }
`;