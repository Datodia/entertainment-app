import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { useContext, useState } from 'react'
import { DataContext } from '../../App'
import { Link } from 'react-router-dom'
import { links } from '../../links'

export const Root = () => {

    const Data = useContext(DataContext)
    const [active, setActive] = useState<string>('/')

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     Data?.setSearch(e.target.value)
    // }
    // console.log(Data?.data)

    // console.log(Data?.data.map((item) => item.title).filter((item) => item === Data.search))

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
    background-color: #10141E;
`

const NavBar = styled.div`
    /* width: 335px; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 56px;
    background-color: #161D2F;
`
const Img = styled.img`
    width: 16px;
`
const Logo = styled.img`
    width: 24px;
`

const Links = styled.ul`
    display: flex;
    gap: 24px;
`
const LinkItem = styled(Link)`
    
`

const SearchDiv = styled.div`
    height: 25px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const Input = styled.input`
    width: 70vw;
    font-family: 'Outfit';
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
`
