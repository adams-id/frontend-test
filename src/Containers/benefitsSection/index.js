import React from "react";
import { CardComponent, SectionComponent } from "../../components";
import benefitCards from '../../fixtures/benefitCards.json';

const BenefitsSectionContainer = () => {
    return(
        <SectionComponent>
            <SectionComponent.Header>
                Work even more<br/>efficiently with Gig Share
            </SectionComponent.Header>
            
            <SectionComponent.Content>
                {benefitCards.map(item => {
                    return (
                        <CardComponent
                            title={<span>{item.titleLine1}<br/>{item.titleLine2}</span>}
                            key={item.key}
                            description={item.description}
                            imageSrc={item.iconSrc}
                        />
                    )
                })}
            </SectionComponent.Content>
        </SectionComponent>
    )
}

export default BenefitsSectionContainer;