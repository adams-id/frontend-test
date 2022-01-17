import React from "react";
import { Background, Description, Icon, IconWrapper, Title, Wrapper } from "./cardStyles";

const CardComponent = ({title, description, imageSrc, imageAltText, maxTitleWidth, ...restProps}) => {

    let altText = imageAltText ? imageAltText : '';

    return(
        <Wrapper>
            <Background {...restProps} >
                <Icon>
                    <IconWrapper
                        data-anim="section-card-icon-animation"
                    >
                        <img src={imageSrc} loading="lazy" alt={altText} />
                        <img src={imageSrc} loading="lazy" alt={altText} />
                    </IconWrapper>
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