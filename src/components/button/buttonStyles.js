import styled from "styled-components/macro";
import { buttonText1, textWhite, borderSilver1 } from "../../constants/styles";

export const Button = styled.div`
    display: inline-block;
    text-align: center;
    box-sizing: border-box;
    border-color: ${({ borderColor }) => borderColor ? borderColor : borderSilver1 };
    border-width: ${({ borderWidth }) => borderWidth ? borderWidth : '1px' };
    border-style: ${({ borderStyle }) => borderStyle ? borderStyle : 'solid' };
    background-color: ${({ bgColor }) => bgColor ? bgColor : 'transparent' };
    padding: ${({ padding }) => padding ? padding : '15px' };
    color: ${({ textColor }) => textColor ? textColor : textWhite};
    border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '10px' };
    min-width: ${({minWidth}) => minWidth ? minWidth : '165px' };
    min-height: ${({minHeight}) => minHeight ? minHeight : '60px' };
    font: ${({font}) => font ? font : buttonText1 };
`;