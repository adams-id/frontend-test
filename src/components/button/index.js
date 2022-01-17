import React from "react";
import { Button, IconWrapper } from './buttonStyles';

const ButtonComponent = ({
    borderColor, borderWidth, borderStyle, bgColor, padding, textColor,
    borderRadius, minWidth, minHeight, font, maxWidth, maxHeight,
    hoverBorderColor, ...restProps
}) => {
    return (
        <Button
            borderColor={borderColor}
            borderWidth={borderWidth}
            borderStyle={borderStyle}
            bgColor={bgColor}
            padding={padding}
            textColor={textColor}
            borderRadius={borderRadius}
            minWidth={minWidth}
            minHeight={minHeight}
            font={font}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            hoverBorderColor={hoverBorderColor}
            {...restProps}
        />
    )
}

ButtonComponent.IconWrapper = ({children}) => {
    return(
        <IconWrapper>
            {children}
        </IconWrapper>
    )
}

export default ButtonComponent;