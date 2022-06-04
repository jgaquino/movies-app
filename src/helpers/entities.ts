export interface IAppState {
 movies: IMovie[] | null;
 configurations: IConfigurations;
 reviews: IReview[] | [];
}

export interface IMovie {
 adult: boolean;
 backdrop_path: string | null;
 id: number;
 original_language: string;
 overview: string;
 popularity: number;
 poster_path: string | null;
 release_date: string;
 title: string;
 vote_average: number;
 vote_count: number; 
}

export interface IConfigurations {
 baseImagesUrl: string | null;
}

export interface IReview {
 rating: number | null;
 message: string;
 movie: IMovie;
}