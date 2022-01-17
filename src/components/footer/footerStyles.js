import styled from "styled-components";
import { backgroundGrey1, textSilver, textWhite } from "../../constants/styles";

export const Frame = styled.section`
    box-sizing: border-box;
    height: 70vh;
    padding: 24px;
`;

export const Background = styled.div`
    background-color: ${backgroundGrey1};
    border-radius: 45px;
    height: 100%;
    padding: 60px 30px;
    box-sizing: inherit;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Content = styled.div`    
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    height: 100%;
    margin-left: 150px;
    margin-top: 100px;
    box-sizing: content-box;
    justify-content: space-between;    
`;

export const ContentBox = styled.div`    
    display: flex;
    flex-direction: column;
    box-sizing: content-box;
    text-align: left;
    width: 30%;    
`;

export const Title = styled.h3`
    margin: 10px;
    font-size: 22px;
    font-weight: 300;
    line-height: 1.4em;
    text-align: left;
    color: ${textWhite};    
`;

export const Description = styled.p`
    margin: 10px;
    line-height: 1.6em;
    font-size: 18px;
    text-align: left;
    color: ${textSilver};
`;

export const Description1 = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 991px) {
        display: none;
    }
`;