export interface ITitleData {
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  tagline: string;
  release_date: string;
  vote_average: number;
  genres: [{ id: number; name: string }];
  runtime: number;
  number_of_episodes: number;
  number_of_seasons: number;
}
