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


export type Props = {
    data: DataType[];
    search: string;
    setSearch?: React.Dispatch<React.SetStateAction<string>> | undefined
    setData: React.Dispatch<React.SetStateAction<DataType[]>>
}

export interface Show {
    show: string;
    setShow: React.Dispatch<React.SetStateAction<Show>>;
}