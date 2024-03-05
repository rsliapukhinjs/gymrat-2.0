import React from "react";

const Card = ({ entry }) => {
  return (
    <article className="bg-red-100 p-4 flex flex-col gap-4 drop-shadow-md rounded">
      <span className="text-sm">{entry.date}</span>
      <div className="flex flex-col space-center gap-4">
        <h3 className="text-lg">{entry.title}</h3>
        <p>{entry.note}</p>
      </div>
      <a href="#" className="self-end hover:underline text-sm">
        More
      </a>
    </article>
  );
};

export default Card;
