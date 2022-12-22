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
    )
}



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

const TrendingTitle = styled.h1`
    font-size: 20px;
    font-weight: 300;
    color: white;
    padding: 26px 0 16px 0;
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

