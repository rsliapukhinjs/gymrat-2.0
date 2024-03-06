const Card = ({ entry, onDelete }) => {
  return (
    <article className="bg-red-100 p-4 flex flex-col gap-4 drop-shadow-md rounded">
      <span className="text-sm">{entry.date}</span>
      <div className="flex flex-col space-center gap-4">
        <h3 className="text-lg">{entry.title}</h3>
        <p>{entry.note}</p>
      </div>
      <button
        className="block px-2 py-1 bg-red-500 hover:bg-red-600 text-slate-100 rounded self-end text-xs"
        onClick={() => onDelete(entry.id)}
      >
        Delete
      </button>
    </article>
  );
};

export default Card;
