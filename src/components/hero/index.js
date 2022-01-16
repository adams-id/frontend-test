import React from "react";
import { ButtonComponent } from '..';
import {
    AddBlockSubtitle,
    AddBlockTitle,
    AddFileBlock,
    AddFilePlus,
    AddFileWrapper,
    Background, Buttons, Content, Frame,
    Hamburger,
    HamburgerLines,
    HamburgerLine ,
    Header, Logo, Menu, MenuItem, Subtitle, TextLogo, Title, AddBlockText
} from "./heroStyles";
import { backgroundGreen1 } from "../../constants/styles";

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
                            <span>{item.title}</span>
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
                minWidth='60px'
                bgColor={backgroundGreen1}
                borderColor='transparent'
            />
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