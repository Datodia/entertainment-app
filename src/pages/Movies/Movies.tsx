import { useContext } from 'react'
import { DataContext } from '../../App'
import { Props } from '../../Interface'
import styled from 'styled-components'
import { MoviesComp } from '../../components/MoviesComp/MoviesComp'

export const Movies = () => {
    const { setData, data, search, setSearch } = useContext<Props>(DataContext)
    const filteredData = data.filter(item => item.category === 'Movie')

    return (
        <Wrapper>
            <MoviesComp filteredData={filteredData} name={'Movies'} />
        </Wrapper>
    )
}


const Wrapper = styled.div`
    padding: 0 15px;
`