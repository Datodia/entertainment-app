export interface DataType {
    title: string;
    thumbnail: {
        trending?: {
            small: string;
            large: string;
        };
        regular: {
            small: string;
            medium: string;
            large: string;
        };
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
}

export interface Show {
    show: string;
    setShow: React.Dispatch<React.SetStateAction<Show>>;
}