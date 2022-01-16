import styled from "styled-components/macro";

export const Frame = styled.section`
    position: relative;
    padding: 64px;
`;

export const Inner = styled.div`
    max-width: 1240px;
`;

export const Background = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
    margin: auto 0;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.h2`
    display: block;
    margin-top: 0px;
    margin-bottom: 32px;
    font-family: regulator-nova, sans-serif;
    font-size: ${({fontSize}) => fontSize ? fontSize : '44px'};
    line-height: 1em;
    font-weight: 600;
    text-align: ${({textAlign}) => textAlign ? textAlign : 'center'};
    max-width: ${({maxWidth}) => maxWidth ? maxWidth : '100%'};
`;

export const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: row;
    transition-property: transform;
    box-sizing: content-box;
    align-items: stretch;
    margin-top: 32px;
`;