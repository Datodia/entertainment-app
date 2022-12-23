import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { useContext, useState } from 'react'
import { DataContext } from '../../App'
import { Link } from 'react-router-dom'
import { links } from '../../links'

export const Root = () => {

    const Data = useContext(DataContext)
    const [active, setActive] = useState<string>('/')


    return (
        <Container>
            <NavBar>
                <LinkItem to="/">
                    <Logo onClick={() => setActive('/')} src="assets/logo.svg" />
                </LinkItem>
                <Links>
                    {links.map((item) => {
                        return (
                            <LinkItem to={item.to}>
                                <Img
                                    src={item.src}
                                    style={{ filter: item.to === active ? 'brightness(300%)' : 'none' }}
                                    onClick={() => setActive(item.to)}
                                />
                            </LinkItem>)
                    })}
                </Links>
                <Logo src="assets/image-avatar.png" />
            </NavBar>

            <SearchDiv>
                <Logo src="assets/icon-search.svg" />
                <Input
                    placeholder='Search for movies or TV series'
                    onChange={(e) => Data?.setSearch(e.target.value)}
                />
            </SearchDiv>
            <Outlet />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    background-color: #10141E;
`

const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 56px;
    background-color: #161D2F;

    @media screen and (min-width: 768px){
        width: 720px;
        height: 72px;
        margin:auto;
        border-radius: 10px;
        justify-content: space-between;
        padding: 0 19px 0 24px;
        margin-top: 23px;
    }
`
const Img = styled.img`
    width: 16px;
    @media screen and (min-width: 768px){
        width: 20px;
    }
`
const Logo = styled.img`
    width: 24px;
    @media screen and (min-width: 768px){
        width: 32px;
    }
`

const Links = styled.ul`
    display: flex;
    gap: 24px;
    @media screen and (min-width: 768px){
        gap: 32px;
    }
`
const LinkItem = styled(Link)`
    
`

const SearchDiv = styled.div`
    height: 25px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (min-width: 768px){
        width: 720px;
        margin: auto;
        justify-content: flex-start;
        gap: 28px;
        margin-top: 37px;
    }
`

const Input = styled.input`
    width: 70vw;
    font-family: 'Outfit';
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
`
