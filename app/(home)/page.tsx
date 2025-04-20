import Movie from "@/components/movie";
import styles from "@/styles/home.module.css";

export const metadata = {
  title: 'Home',
  description: 'Home page',
}

type Movie =   {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
}

export default async function Home() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      <h1>Hello</h1>
      {movies.map((movie: Movie) => (
        <Movie
          key={movie.id}
          id={movie.id.toString()}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
