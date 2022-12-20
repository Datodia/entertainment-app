import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

export const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
        </div>
    )
}

const Header = styled.div`
    width: 100vw;
    height: 50px;
    background-color: red;
`
