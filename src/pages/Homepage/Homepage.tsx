import { useContext, useState } from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { DataContext } from "../../App"
import styled from "styled-components"
import { DataType, Props } from "../../Interface"



export const Homepage = () => {

    const { setData, data, search, setSearch } = useContext<Props>(DataContext)
    const booked = data.map((item) => item.isBookmarked)
    const [check, setCheck] = useState<boolean[]>(booked)



    //const title = Data?.data.map((item) => item.thumbnail.trending)
    const filter = data.map((item) => item.title)

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
        <Container>
            <TrendingContainer >
                <Trending>Trending</Trending>
                <Splide options={{
                    autoplay: true,
                    interval: 5000,
                    fixedWidth: 270,
                    rewind: true,
                    gap: 10,
                    pagination: false,
                    arrows: false
                }} aria-label="My Favorite Images">
                    {data.filter((item) => item.isTrending).map((item) => (
                        <SplideSlide key={item.title}>
                            <TrendingDiv key={item.title}>
                                <Img src={item.thumbnail.regular.small} />
                                <Bookmark onClick={() => handleClick(item.title)} >
                                    {item.isBookmarked ? <BookmarkImg src="assets/icon-bookmark-full.svg" /> : <BookmarkImg src="assets/icon-bookmark-empty.svg" />}
                                </Bookmark>
                            </TrendingDiv>

                        </SplideSlide>
                    ))}

                </Splide>
            </TrendingContainer>


            <MoviesDiv>
                <RecomendedTitle>Recomended for you</RecomendedTitle>
                {data.filter(item => item.title.toLocaleLowerCase().startsWith(search)).map((item) => {
                    return (
                        <MovieItem>
                            <MovieImg src={item.thumbnail.regular.small} />
                            <Bookmark2 onClick={() => handleClick(item.title)} >
                                {item.isBookmarked ? <BookmarkImg src="assets/icon-bookmark-full.svg" /> : <BookmarkImg src="assets/icon-bookmark-empty.svg" />}
                            </Bookmark2>
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
        </Container>
    )
}

const Container = styled.div`
    padding: 0 10px;
`

const TrendingContainer = styled.div`
    
`
const TrendingDiv = styled.div`
    width: 240px;
`

const Img = styled.img`
    width: 240px;
    border-radius: 8px;
`
const BookmarkImg = styled.img`
    
`

const Trending = styled.h1`
    font-size: 20px;
    font-weight: 300;
    color: white;
    padding: 26px 0 16px 0;
    padding-left: 5%;
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
    
`
const MovieItem = styled.div`
    position: relative;
    margin-bottom: 15px;
`

const MovieImg = styled.img`
    width: 150px;
    border-radius: 8px;
`
const Bookmark2 = styled(Bookmark)`
    position: absolute;
    transform: translate(0);
    top: 5px;
    left: 110px;
`

const ItemDesc = styled.div`
    display: flex;
    align-items: center;
    //justify-content: space-between;
    gap: 6px;
`
const ItemYear = styled.h2`
    font-size: 11px;
    font-weight: 300;
    color: white;
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
`

const RecomendedTitle = styled(Trending)`
`