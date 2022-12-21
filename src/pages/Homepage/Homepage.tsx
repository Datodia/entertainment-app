import { useContext } from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { DataContext } from "../../App"



export const Homepage = () => {

    const Data = useContext(DataContext)

    const title = Data.map((item) => item.thumbnail.trending)
    console.log(title)
    return (
        <div>
            {/* <img src="./assets/thumbnails/beyond-earth/trending/small.jpg" /> */}
            homepafe
            {/* <Splide options={{
                autoplay: true,
                interval: 1000,
                fixedWidth: 400,
                rewind: true,
                gap: 10,
                pagination: false,
                arrows: false
            }} aria-label="My Favorite Images">
                {data.filter((item) => item.isTrending).map((item) => (
                    <SplideSlide>
                        <div>
                            <img src={item.thumbnail.regular.small} />
                        </div>

                    </SplideSlide>
                ))}

            </Splide> */}
        </div>
    )
}
