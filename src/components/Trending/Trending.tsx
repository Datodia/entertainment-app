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
                            <PlayDiv>
                                <PlayImg src="assets/icon-play.svg" />
                                <PlayTitle>Play</PlayTitle>
                            </PlayDiv>
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

const PlayDiv = styled.div`
    width: 120px;
    height: 48px;
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    position: absolute;
    top: 25%;
    left: 20%;
    cursor: pointer;
    display: none;

    @media screen and (min-width: 768px){
      top: 35%;
      left: 50%;
    }
    @media screen and (min-width: 1350px){
        top: 40%;
        left: 50%;
    }
`

const PlayImg = styled.img`
`
const PlayTitle = styled.h2`
    font-size: 18px;
    font-weight: 500;
    color:  white;
`
const Img = styled.img`
    width: 240px;
    border-radius: 8px;
    @media screen and (min-width: 768px){
        width: 100%;
        height: 100%
    }
`

const TrendingDiv = styled.div`
    width: 240px;
    :hover{
        ${PlayDiv}{
            display: flex;
            background-color: rgba(255, 255, 255, 0.3);
        }
        ${Img}{
            filter: brightness(50%)
        }
    }
    @media screen and (min-width: 768px){
        width: 380px;
        height: 200px;
    }
    @media screen and (min-width: 1350px){
        width: 400px;
        height: 240px;
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
    @media screen and (min-width: 1000px){
        width: 800px;
    }
    @media screen and (min-width: 1350px){
        width: 1100px;
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
    &:hover{
        background-color: white;
        ${BookmarkImg}{
            filter: brightness(10%)
        }
    }
    @media screen and (min-width: 768px){
        transform:translate(330px, -185px);
    }
    @media screen and (min-width: 1350px){
        transform:translate(350px, -215px);
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
    @media screen and (min-width: 1350px){
        top: 170px;
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