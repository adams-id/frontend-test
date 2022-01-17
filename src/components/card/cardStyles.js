import styled from "styled-components/macro";
import { backgroundDarkBlue, backgroundWhite, textMidnightBlue } from "../../constants/styles";

export const Wrapper = styled.div`
    margin: 0 20px;
    flex: 1 1 0px;

    @media screen  and (max-width: 767px) {
        margin: 20px 0;
    }
`;

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 48px 32px;
    align-items: center;
    border-radius: 30px;
    background-color: ${backgroundWhite};
    box-shadow: none;
    transition: all 400ms ease;
    text-align: center;
`;

export const Icon = styled.div`
    display: flex;
    background-color: ${backgroundDarkBlue};
    position: relative;
    overflow: hidden;
    width: 80px;
    height: 80px;
    margin-bottom: 32px;
    justify-content: center;
    align-items: flex-start;
    border-radius: 8px;
    overflow: hidden;

    @media screen and (max-width: 967px) {
        width: 48px;
        height: 48px;
        margin-bottom: 24px;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 16px;
    transition: all 400ms ease;
    gap: 30px
`;

export const Title = styled.h3`
    margin: 0 0 20px;
    font-size: 22px;
    line-height: 1.4em;
    font-weight: 500;
    text-align: center;
    color: ${textMidnightBlue};
    max-width: ${({maxTitleWidth}) => maxTitleWidth ? maxTitleWidth : '240px'};

    @media screen  and (max-width: 767px) {
        font-size: 18px;
        margin: 0 0 12px;
    }
`;

export const Description = styled.p`
    margin: 0;
    opacity: 80%;
    line-height: 1.6em;
    text-align: center;
`;