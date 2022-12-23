import styled from "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useContext } from "react"
import { DataContext } from "../../App"
import { Props } from "../../Interface"


export const Trending = () => {

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
        <TrendingContainer >
            <TrendingTitle>Trending</TrendingTitle>
            <Splide options={{
                autoplay: true,
                interval: 5000,
                fixedWidth: 270,
                rewind: true,
                gap: 10,
                pagination: false,
                arrows: false,


            }} aria-label="My Favorite Images">
                {data.filter((item) => item.isTrending).map((item) => (
                    <SplideSlide key={item.title}>
                        <TrendingDiv key={item.title}>
                            <Img src={item.thumbnail.regular.small} />
                            <Bookmark onClick={() => handleClick(item.title)} >
                                {item.isBookmarked ? <BookmarkImg src="assets/icon-bookmark-full.svg" /> : <BookmarkImg src="assets/icon-bookmark-empty.svg" />}
                            </Bookmark>
                            <Div>
                                <ItemDesc>
                                    <ItemYear>{item.year}</ItemYear>
                                    <ItemDot></ItemDot>
                                    <ItemImg src="assets/icon-nav-movies.svg" />
                                    <ItemCategory>{item.category}</ItemCategory>
                                    <ItemDot></ItemDot>
                                    <ItemRating>{item.rating}</ItemRating>
                                </ItemDesc>
                                <ItemTitle>{item.title}</ItemTitle>
                            </Div>
                        </TrendingDiv>

                    </SplideSlide>
                ))}

            </Splide>

        </TrendingContainer>
    )
}

const TrendingContainer = styled.div`
    
`
const TrendingDiv = styled.div`
    width: 240px;
    @media screen and (min-width: 768px){
        width: 380px;
        height: 200px;
    }
`

const Img = styled.img`
    width: 240px;
    border-radius: 8px;
    @media screen and (min-width: 768px){
        width: 100%;
        height: 100%
    }
`
const BookmarkImg = styled.img`
    
`

const TrendingTitle = styled.h1`
    font-size: 20px;
    font-weight: 300;
    color: white;
    padding: 26px 0 16px 0;
    @media screen and (min-width: 768px){
        width: 720px;
        margin: auto;
        font-size: 32px;
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
    @media screen and (min-width: 768px){
        transform:translate(330px, -185px);
    }
    
`

const Div = styled.div`
    position: absolute;
    z-index: 100;
    top: 110px;
    left: 20px;
    @media screen and (min-width: 768px){
        top: 140px;
        left: 30px;
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
        font-size: 15px;
    }
`
const ItemCategory = styled(ItemYear)`
`
const ItemRating = styled(ItemYear)`
`
const ItemImg = styled.img`
    width: 10px;
    height: 10px;
    filter: brightness(200%);
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
        font-size: 24px;
    }
`