import React from "react";
import { Frame, Background, Content, Title, Description, ContentBox, Description1 } from "./footerStyles";

const FooterComponent = ({children}) => {
    return (
        <Frame>
            <Background>
                <Content>
                    {children}
                </Content>
            </Background>
        </Frame>
    )
}

FooterComponent.Content = ({title, description, type, ...restProps}) => {
    return (
        <ContentBox {...restProps}>
            <Title>
                {title}
            </Title>
            { type === "string" ? <Description >{description}</Description> : undefined}
            
        </ContentBox>
    )
} 

export default FooterComponent;