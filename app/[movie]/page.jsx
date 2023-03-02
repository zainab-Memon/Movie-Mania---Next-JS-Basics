import Image from "next/image";

export default async function MovieDetail({ params }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const { movie } = params;
  const data = await fetch(
    `https://api.themoviedb.org/3//movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const res = await data.json();

  return (
    <div>
      <div>
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold">{res.title}</h2>
            <h2 className="text-sm">{res.release_date}</h2>
            <h2>Runtime: {res.runtime} minutes</h2>
              <h2 className="bg-green-600 inline-block my-2 md:mr-[550px] mr-56 py-2 px-4 rounded-md text-sm">
              {res.status}
            </h2>
            <p>
              <span className="font-bold">Overview: </span>
              {res.overview}
            </p>
          </div>

          <Image
            className="my-12 w-full md:w-[60%]"
            src={imagePath + res.backdrop_path}
            width={1000}
            height={1000}
            priority
          />
        </div>
      </div>
    </div>
  );
}
