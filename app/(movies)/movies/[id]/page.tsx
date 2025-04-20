import MovieInfos, { getMovie } from "@/components/movie-infos";
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";
import styles from "@/styles/movie.module.css";

type MoviePageProps = {
  params: {
    id: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

export async function generateMetadata({params:{id}} : MoviePageProps) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
    description: movie.overview,
  };
}

export default function MoviePage({ params: { id } }: MoviePageProps) {
  return (
    <div className={styles.movie}>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <MovieInfos id={id} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <MovieVideos id={id} />
        </Suspense>
      </div>
    </div>
  );
}
