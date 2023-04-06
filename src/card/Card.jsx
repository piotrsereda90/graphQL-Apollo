import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, image, status, location, origin, id }) => (

  <article className="flex w-96 bg-[#3C3E44] mt-6">
    <div className="w-48">
      <img className="w-full h-full" src={image} alt="Character" />
    </div>
    <div className="pl-4 text-slate-200">
      <div>
        <Link to={`/${id}`}>
          <h2 >{name}</h2>
        </Link>
        <p>
          <span/>
          {status}
        </p>
      </div>

      {/* <div>
        <h3>Last known location:</h3>
        <Link href="/">
          {location}
        </Link>
      </div> */}
      <div>
        <h3>First seen in:</h3>
        <Link href="/">
          {origin}
        </Link>
      </div>
    </div>
  </article>
);

export default Card;