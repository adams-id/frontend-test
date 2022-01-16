import React from "react";
import { Background, Description, Icon, Title, Wrapper } from "./cardStyles";

const CardComponent = ({title, description, imageSrc, imageAltText, maxTitleWidth, ...restProps}) => {

    let altText = imageAltText ? imageAltText : '';

    return(
        <Wrapper>
            <Background {...restProps} >
                <Icon>
                    <img src={imageSrc} loading="lazy" alt={altText} />
                </Icon>
                <Title
                    maxTitleWidth={maxTitleWidth}
                >
                    {title}
                </Title>
                <Description>{description}</Description>
            </Background>
        </Wrapper>
    )
}

export default CardComponent;