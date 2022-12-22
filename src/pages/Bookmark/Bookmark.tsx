import { useContext } from 'react'
import { DataContext } from '../../App'
import { Props } from '../../Interface'
import styled from 'styled-components'
import { MoviesComp } from '../../components/MoviesComp/MoviesComp'

export const Bookmark = () => {
    const { setData, data, search, setSearch } = useContext<Props>(DataContext)
    const filteredData = data.filter(item => item.isBookmarked === true)

    return (
        <Wrapper>
            <MoviesComp filteredData={filteredData} name={'Bookmarked'} />
        </Wrapper>
    )
}


const Wrapper = styled.div`
    padding: 0 15px;
`