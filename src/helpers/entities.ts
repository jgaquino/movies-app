interface AppState {
 movies: IMovie[];
 configurations: IConfigurations;
 reviews: string;
}

interface IMovie {
 adult: boolean;
 backdrop_path: string | undefined;
 id: number;
 original_language: string;
 overview: string;
 popularity: number;
 poster_path: string | undefined;
 release_date: string;
 title: string;
 vote_average: number;
 vote_count: number; 
}

interface IConfigurations {
 baseImagesUrl: string;
}

interface IReview {
 rating: number;
 message: string;
 movie: IMovie;
}