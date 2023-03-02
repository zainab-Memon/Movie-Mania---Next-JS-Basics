import React from "react";
import Link from "next/link";
import Image from "next/image";
const Movie = ({ title, id, poster_path, release_date }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <Link href={`/${id}`}>
        <Image
          unoptimized
          src={imagePath + poster_path}
          width={800}
          height={800}
          al={title}
        />
      </Link>

      <h1 className="mt-2">{title}</h1>
      <h1>{release_date}</h1>
    </div>
  );
};

export default Movie;
