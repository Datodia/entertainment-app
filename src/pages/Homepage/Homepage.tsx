import { useContext } from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { DataContext } from "../../App"
import styled from "styled-components"



export const Homepage = () => {

    const Data = useContext(DataContext)


    //const title = Data?.data.map((item) => item.thumbnail.trending)
    const filter = Data?.data.map((item) => item.title.toLocaleLowerCase())

    const handleClick = (isbookedmark: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

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
                    {Data.data.filter((item) => item.isTrending).map((item) => (
                        <SplideSlide>
                            <TrendingDiv>
                                <Img src={item.thumbnail.regular.small} />
                                <Bookmark>
                                    {item.isBookmarked ? <BookmarkImg src="assets/icon-bookmark-full.svg" /> : <BookmarkImg src="assets/icon-bookmark-empty.svg" />}
                                </Bookmark>
                            </TrendingDiv>

                        </SplideSlide>
                    ))}

                </Splide>
            </TrendingContainer>
            <h1 style={{ color: 'red' }}>Hello</h1>
            {filter?.filter(item => item.startsWith(Data?.search))}


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