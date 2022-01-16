import React from "react";
import { Button } from './buttonStyles';

const ButtonComponent = ({
    borderColor, borderWidth, borderStyle, bgColor, padding, textColor,
    borderRadius, minWidth, minHeight, font, ...restProps
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
            {...restProps}
        />
    )
}

export default ButtonComponent;