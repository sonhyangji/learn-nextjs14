
interface MoviePageProps {
    params: {
        id: string;
    };
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
}
export default function MoviePage({ params, searchParams }: MoviePageProps) {
  return (
    <div>
      <h1>Movie Page {params.id} {searchParams.title}</h1>
    </div>
  );
}