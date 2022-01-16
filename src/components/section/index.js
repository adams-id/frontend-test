import React from "react";
import { Background, Content, Frame, Header, Inner } from "./sectionStyles";

const SectionComponent = ({children, ...restProps}) => {
    return (
        <Frame {...restProps}>
            <Background>
                <Inner>
                    {children}
                </Inner>
            </Background>
        </Frame>
    )
}

SectionComponent.Header = ({children, fontSize, textAlign, maxWidth, ...restProps}) => {
    return (
        <Header
            fontSize={fontSize}
            textAlign={textAlign}
            maxWidth={maxWidth}
            {...restProps}
        >
            {children}
        </Header>
    )
}

SectionComponent.Content = ({children}) => {
    return (
        <Content>
            {children}
        </Content>
    )
}

export default SectionComponent;