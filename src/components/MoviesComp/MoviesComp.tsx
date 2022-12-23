import { useContext } from 'react'
import { DataContext } from '../../App'
import { DataType, Props } from '../../Interface'
import styled from 'styled-components'

type Props2 = {
    filteredData: DataType[];
    name: string
}

export const MoviesComp = ({ filteredData, name }: Props2) => {

    const { setData, data, search, setSearch } = useContext<Props>(DataContext)

    const handleClick = (title: string) => {
        setData(
            data.map((item) => {
                if (item.title === title && item.isBookmarked === true) {
                    return { ...item, isBookmarked: false }
                } else if (item.title === title && item.isBookmarked === false) {
                    return { ...item, isBookmarked: true }
                } else {
                    return item
                }
            })
        )
    }

    return (
        <MoviesDiv>
            <RecomendedTitle>{name}</RecomendedTitle>
            {filteredData.filter(item => item.title.toLocaleLowerCase().startsWith(search)).map((item) => {
                return (
                    <MovieItem>
                        <MovieImg src={item.thumbnail.regular.small} />
                        <Bookmark2 onClick={() => handleClick(item.title)} >
                            {item.isBookmarked ? <BookmarkImg src="assets/icon-bookmark-full.svg" /> : <BookmarkImg src="assets/icon-bookmark-empty.svg" />}
                        </Bookmark2>
                        <PlayDiv>
                            <PlayImg src="assets/icon-play.svg" />
                            <PlayTitle>Play</PlayTitle>
                        </PlayDiv>
                        <ItemDesc>
                            <ItemYear>{item.year}</ItemYear>
                            <ItemDot></ItemDot>
                            <ItemImg src="assets/icon-nav-movies.svg" />
                            <ItemCategory>{item.category}</ItemCategory>
                            <ItemDot></ItemDot>
                            <ItemRating>{item.rating}</ItemRating>
                        </ItemDesc>
                        <ItemTitle>{item.title}</ItemTitle>
                    </MovieItem>
                )
            })}
        </MoviesDiv>
    )
}


const BookmarkImg = styled.img`
    
`

const TrendingTitle = styled.h1`
    font-size: 20px;
    font-weight: 300;
    color: white;
    padding: 26px 0 16px 0;
    @media screen and (min-width: 768px){
        font-size: 32px;
        margin-top: 40px;
    }
`

const Bookmark = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(197px, -145px);
    background-color: #5A698F;
`

const MoviesDiv = styled.div`
    width: 90vw;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap; 
    margin: auto;
    @media screen and (min-width: 768px){
        width: 720px;
        margin: auto;
    }
    @media screen and (min-width: 1350px){
        width: 1100px;
    }
`
const PlayDiv = styled.div`
    width: 100px;
    height: 48px;
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: absolute;
    top: 30%;
    left: 30%;
    cursor: pointer;
    display: none;
`

const PlayImg = styled.img`
`
const PlayTitle = styled.h2`
    font-size: 18px;
    font-weight: 500;
    color:  white;
`

const MovieImg = styled.img`
    width: 150px;
    border-radius: 8px;
    @media screen and (min-width: 768px){
       width: 220px;
       height: 140px;
    }
    @media screen and (min-width: 1350px){
        width: 270px;
        height: 170px;
    }
`
const MovieItem = styled.div`
    position: relative;
    margin-bottom: 15px;

    :hover{
        ${PlayDiv}{
            display: flex;
            background-color: rgba(255, 255, 255, 0.3);
        }
        ${MovieImg}{
            filter: brightness(50%)
        }
    }
`


const Bookmark2 = styled(Bookmark)`
    position: absolute;
    transform: translate(0);
    top: 5px;
    left: 110px;
    &:hover{
        background-color: white;
        ${BookmarkImg}{
            filter: brightness(10%)
        }
    }
   
    @media screen and (min-width: 768px){
       left: 170px;
       top: 15px;
    }
    @media screen and (min-width: 1350px){
        left: 220px;
    }
`

const ItemDesc = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`
const ItemYear = styled.h2`
    font-size: 11px;
    font-weight: 300;
    color: white;
    @media screen and (min-width: 768px){
       font-size: 13px;
    }
`
const ItemCategory = styled(ItemYear)`
`
const ItemRating = styled(ItemYear)`
`
const ItemImg = styled.img`
    width: 10px;
    height: 10px;
`
const ItemDot = styled.div`
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: gray;
`

const ItemTitle = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: white;
    @media screen and (min-width: 768px){
        margin-top: 6px;
        font-size: 18px;
    }
`

const RecomendedTitle = styled(TrendingTitle)`
    width: 100vw;
`