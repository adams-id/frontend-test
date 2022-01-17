import React from "react";
import {FooterComponent} from "../../components";
import footerItems from '../../fixtures/footerItems.json';

const FooterContainer = () => {
    return (
        <FooterComponent>
            {footerItems.map(item => {
                return (
                    <FooterComponent.Content
                        title={item.title}
                        key={item.key}
                        type={item.type}
                        description={item.description}
                    />
                )
            })}
        </FooterComponent>
    )
}

export default FooterContainer;