import React from "react";
import { ButtonComponent } from '..';
import {
    AddBlockSubtitle, AddBlockTitle, AddFileBlock, AddFilePlus,
    AddFileWrapper, Background, Buttons, Content, Frame,
    Hamburger, HamburgerLines, HamburgerLine,
    Header, Logo, Menu, MenuItem, Subtitle,
    TextLogo, Title, AddBlockText, MenuItemWrapper
} from "./heroStyles";
import { backgroundGreen1 } from "../../constants/styles";
import { ImageComponent as Image } from '..';

const HeroComponent = ({children}) => {
    return (
        <Frame id="Big-transfers">
            <Background>
                {children}
            </Background>
        </Frame>
    )
}

HeroComponent.Header = ({children}) => {
    return (
        <Header>
            {children}
        </Header>
    )
}

HeroComponent.HeaderLogo = ({logo, textLogo, ...restProps}) => {
    return (
        <Logo href="/">
            <img src={logo} alt='' {...restProps} />
            <TextLogo>
                <img src={textLogo} alt='' {...restProps} />
            </TextLogo>
        </Logo>
    )
}

HeroComponent.HeaderMenu = ({menuItems}) => {
    return(
        <Menu>
            {menuItems.map(item => {
                return(
                    <MenuItem key={item.key} id={item.key}>
                        <a href={item.link}>
                            <MenuItemWrapper>
                                <span>{item.title}</span>
                                <span>{item.title}</span>
                            </MenuItemWrapper>
                        </a>
                    </MenuItem>
                )
            })}
        </Menu>
    )
}

HeroComponent.HeaderButtons = () => {
    return(
        <Buttons>
            <ButtonComponent
                id='login-button'
                bgColor={backgroundGreen1}
                borderColor='transparent'
                minWidth='0'
                maxHeight='60px'
                maxWidth='60px'
                hoverBorderColor={'transparent'}
            >
                <ButtonComponent.IconWrapper>

                    <Image.ImageGroup
                        id='login-arrow-group'
                        direction='row'
                        gap='12px'
                    >
                        <img 
                            src="https://uploads-ssl.webflow.com/61c1b5d6cb8a0046c7fa6e82/61c33a7e3ca198c5c9181b5d_ico_login1.svg"
                            loading="lazy"
                            alt=""
                        />
                        <img 
                            src="https://uploads-ssl.webflow.com/61c1b5d6cb8a0046c7fa6e82/61c33a7e3ca198c5c9181b5d_ico_login1.svg"
                            loading="lazy"
                            alt=""
                        />
                    </Image.ImageGroup>
                    
                    <img
                        src="https://uploads-ssl.webflow.com/61c1b5d6cb8a0046c7fa6e82/61c33a7d370af265295f8eed_ico_login2.svg"
                        loading="lazy"
                        alt=""
                    />
                </ButtonComponent.IconWrapper>
            </ButtonComponent>
            <ButtonComponent>Sign Up</ButtonComponent>
        </Buttons>
    )
}

HeroComponent.Content = ({children}) => {
    return (
        <Content>
            {children}
        </Content>
    )
}

HeroComponent.Title = ({children}) => {
    return (
        <Title>
            {children}
        </Title>
    )
}

HeroComponent.Subtitle = ({children}) => {
    return (
        <Subtitle>
            {children}
        </Subtitle>
    )
}

HeroComponent.Addfile = ({title, subtitle}) => {
    return(
        <AddFileWrapper>
            <AddFileBlock>
                <AddFilePlus />
                    <AddBlockText>
                        <AddBlockTitle>{title}</AddBlockTitle>
                        <AddBlockSubtitle>{subtitle}</AddBlockSubtitle>
                    </AddBlockText>
            </AddFileBlock>
        </AddFileWrapper>
    )
}

HeroComponent.Hamburger = ({onClick}) => {
    return (
        <Hamburger onClick={onClick}>
            <HamburgerLines>
                <HamburgerLine />
                <HamburgerLine />
                <HamburgerLine />
            </HamburgerLines>
        </Hamburger>
    )
}

export default HeroComponent;