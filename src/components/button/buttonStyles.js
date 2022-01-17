import styled from "styled-components/macro";
import { buttonText1, textWhite, borderSilver1, borderWhite } from "../../constants/styles";

export const Button = styled.div`
    display: flex;
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
    max-height: ${({maxHeight}) => maxHeight ? maxHeight : undefined };
    max-width: ${({maxWidth}) => maxWidth ? maxWidth : undefined };
    font: ${({font}) => font ? font : buttonText1 };
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;

    :hover {
        border-color: ${({ hoverBorderColor }) => hoverBorderColor ? hoverBorderColor : borderWhite };
    }

`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
`;
