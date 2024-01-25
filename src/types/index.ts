export type watchDataType = {
    imdbID: string | undefined,
    Title: string | undefined,
    Year: string | undefined,
    Poster: string | undefined,
    Runtime: string | undefined,
    imdbRating: string | undefined,
    userRating: number ,
}

export type movieType = {

        Title: string;
        Year: string;
        Rated?: string;
        Released?: string;
        Runtime?: string;
        Genre?: string;
        Director?: string;
        Writer?: string;
        Actors?: string;
        Plot?: string;
        Language?: string;
        Country?: string;
        Awards?: string;
        Poster: string;
        Ratings?: { Source: string; Value: string }[];
        Metascore?: string;
        imdbRating?: string;
        imdbVotes?: string;
        imdbID: string;
        Type?: string;
        DVD?: string;
        BoxOffice?: string;
        Production?: string;
        Website?: string;
        Response?: string;
      
}

export type starRatingType={
    className: string
}

export const apiKey = 'edc3b691'