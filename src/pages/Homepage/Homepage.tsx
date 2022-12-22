import styled from "styled-components"
import { Trending } from "../../components/Trending/Trending"
import { MoviesComp } from "../../components/MoviesComp/MoviesComp"
import { useContext } from "react"
import { DataContext } from "../../App"
import { Props } from "../../Interface"



export const Homepage = () => {

    const { setData, data, search, setSearch } = useContext<Props>(DataContext)
    return (
        <Container>
            <Trending />
            <MoviesComp filteredData={data} />
        </Container>
    )
}

const Container = styled.div`
    padding: 0 10px;
`

