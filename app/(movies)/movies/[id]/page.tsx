import MovieInfos, { getMovie } from "@/components/movie-infos";
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";
import styles from "@/styles/movie.module.css";

type IParams = Promise<{ id: string }>;

export async function generateMetadata(props: { params: IParams }) {
  const { id } = await props.params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
    description: movie.overview,
  };
}

export default async function MoviePage(props: { params: IParams }) {
  const { id } = await props.params;
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
