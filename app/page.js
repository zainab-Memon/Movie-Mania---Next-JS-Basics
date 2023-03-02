import Movie from "./Movie";
import "./globals.css";
export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3//movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <main>
      <div className="text-3xl md:text-5xl font-bold text-center pb-7">
        The Movie Mania
      </div>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
