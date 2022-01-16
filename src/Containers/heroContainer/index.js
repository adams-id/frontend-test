import React from "react";
import { HeroComponent as Hero } from "../../components";
import menuItems from '../../fixtures/menuItems.json';

const HeroContainer = () => {

    const hamburgerToggle = e => {
        e.preventDefault();
    }

    return(
        <Hero>
            <Hero.Header>
                <Hero.HeaderLogo
                    logo='/assets/icons/gig-share-logo.svg'
                    textLogo='/assets/icons/gig-share-logo-text.svg'
                    loading='lazy'
                />
                <Hero.HeaderMenu
                    menuItems={menuItems}
                />
                <Hero.HeaderButtons />
                <Hero.Hamburger
                    onClick={hamburgerToggle}
                />
            </Hero.Header>

            <Hero.Content>
                <Hero.Title>
                    Big transfers,<br/>bigger impact
                </Hero.Title>
                <Hero.Subtitle>
                    The simplest way to send big ideas around the world, and discover new creative work while you're at it.
                </Hero.Subtitle>
                <Hero.Addfile
                    title='Add your files'
                    subtitle='Up to 20 GB'
                />
            </Hero.Content>

        </Hero>
    )
}

export default HeroContainer;