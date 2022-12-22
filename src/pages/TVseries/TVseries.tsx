import { useContext } from 'react'
import { DataContext } from '../../App'
import { Props } from '../../Interface'
import styled from 'styled-components'
import { MoviesComp } from '../../components/MoviesComp/MoviesComp'

export const TVseries = () => {
    const { setData, data, search, setSearch } = useContext<Props>(DataContext)
    const filteredData = data.filter(item => item.category === 'TV Series')

    return (
        <Wrapper>
            <MoviesComp filteredData={filteredData} name={'TV Series'} />
        </Wrapper>
    )
}


const Wrapper = styled.div`
    padding: 0 15px;
`