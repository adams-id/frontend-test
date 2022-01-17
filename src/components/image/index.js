import React from "react";
import { ImageGroup } from "./imagestyles";

const ImageComponent = ({src}) => {
    return (
        <img src={src} alt="" />
    )
}

ImageComponent.ImageGroup = ({children, direction, gap, ...restProps}) => {
    return(
        <ImageGroup
            direction={direction}
            gap={gap}
            {...restProps}
        >
            {children}
        </ImageGroup>
    )
}

export default ImageComponent;