import styled from "styled-components/macro";
import { backgroundGrey1, backgroundWhite, borderWhite, textGainsboro, textSilver, textWhite } from "../../constants/styles";

export const Frame = styled.section`
    box-sizing: border-box;
    height: 100vh;
    padding: 24px;

    @media screen and (max-width: 991px) {
        padding: 14px;
        max-height: 75vh;
    }
`;

export const Background = styled.div`
    background-color: ${backgroundGrey1};
    border-radius: 45px;
    height: 100%;
    padding: 60px;
    box-sizing: inherit;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 991px) {
        padding: 16px 32px;
        border-radius: 22px;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 991px) {
        justify-content: space-between;
        width: 100%;
    }

    @media screen and (min-width: 1640px){
        padding: 0 6vw;
    }
`;

export const Logo = styled.a`
    display: flex;
    flex-direction: row;
    gap: 18px;
    cursor: pointer;
`;

export const TextLogo = styled.div`
    @media screen and (max-width: 991px) {
        display: none;
    }
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    max-height: 30px;

    @media screen and (max-width: 991px) {
        display: none;
    }
`;

export const MenuItem = styled.div`
    color: ${textSilver};
    margin: 0 30px;
    overflow: hidden;
`;

export const MenuItemWrapper = styled.div`
    position: relative;
    top: 0px;

    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 300ms ease;

    :hover {
        color: ${textWhite};
        top: -44px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;

    @media screen and (max-width: 991px) {
        display: none;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 32px;
`;

export const Title = styled.h1`
    font-family: regulator-nova, sans-serif;
    max-width: 760px;
    font-size: 80px;
    font-weight: 500;
    letter-spacing: 0.01em;
    color: ${textWhite};
    text-align: center;

    display: block;
    box-sizing: border-box;
    margin: 0 0 32px;

    @media screen and (max-width: 768px) {
        font-size: 38px;
        margin: 0 0 16px;
    }
`;

export const Subtitle = styled.p`
    max-width: 600px;
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 0.01em;
    color: ${textGainsboro};
    text-align: center;
    margin: 0 0 32px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        max-width: 360px;
    }
`;

export const AddFileWrapper = styled.div`
    width: 282px;
    height: 233px;
    border-radius: 45px;
    padding: 16px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='45' ry='45' stroke='%23B2B7BDFF' stroke-width='2' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    cursor: pointer;
    box-sizing: border-box;

    @media screen and (max-width: 991px) {
        width: 264px;
        height: 126px;
        border-radius: 35px;
        padding: 14px;
    }
`;

export const AddFileBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: #666f7c;
    background-image: linear-gradient( 60deg, rgba(167, 193, 211, 0.2), rgba(213, 217, 225, 0.2) 70%, rgba(250, 236, 236, 0.2));
    text-align: center;
    color: ${textWhite};
    box-sizing: border-box;
    cursor: pointer;

    @media screen and (max-width: 991px) {
        flex-direction: row;
        border-radius: 32px;
    }
`;

export const AddFilePlus = styled.div`
    width: 56px;
    height: 56px;
    margin-bottom: 16px;
    border-radius: 100px;
    background-color: ${backgroundWhite};
    background-image: url('/assets/icons/add-file-plus.svg');
    background-position: 50% 50%;
    background-size: auto;
    background-repeat: no-repeat;
    box-shadow: 0 30px 30px 0 rgb(65 70 78 / 30%);
    cursor: pointer;

    @media screen and (max-width: 991px) {
        width: 46px;
        height: 46px;
        margin-bottom: 0;
        margin-right: 16px;
    }
`;

export const AddBlockText = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AddBlockTitle = styled.span`
    margin-bottom: 4px;
    font-size: 18px;
    font-weight: 500;
    box-sizing: border-box;
`;

export const AddBlockSubtitle = styled.span`
    opacity: 80%;
    font-size: 14px;
`;

export const Hamburger = styled.div`
    display: none;
    box-sizing: border-box;

    @media screen and (max-width: 991px) {
        display: flex;
        position: relative;
        display: flex;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        border: 1px solid ${borderWhite};
        border-radius: 8px;
        cursor: pointer;
    }
`;

export const HamburgerLines = styled.div`
    display: none;
    box-sizing: border-box;

    @media screen and (max-width: 991px) {
        position: relative;
        z-index: 0;
        display: flex;
        width: 100%;
        height: 100%;
        padding: 0 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const HamburgerLine = styled.div`
    display: none;
    box-sizing: border-box;

    @media screen and (max-width: 991px) {
        display: block;
        position: relative;
        width: 100%;
        height: 2px;
        margin: 2px 0;
        padding: 0px;
        background-color: ${backgroundWhite};
        flex: 0 0 auto;
    }
`;