import styled from "styled-components";

export const ImageGroup = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction ? direction : 'row' };
    justify-content: center;
    gap: ${({gap}) => gap ? gap : '16px' };
    transition: all 400ms ease;
    position: relative;
    right: 0;
`;