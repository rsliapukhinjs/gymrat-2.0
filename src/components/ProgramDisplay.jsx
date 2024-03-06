import Card from "./Card";

const ProgramDisplay = ({ entries, onDelete }) => {
  return (
    <section className="bg-slate-100 p-8 flex flex-col items-center gap-8">
      <h2 className="text-2xl">Entries</h2>
      <div className="w-full p-8 grid grid-cols-2 gap-4">
        {entries.map((entry) => (
          <Card entry={entry} key={entry.id} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
};

export default ProgramDisplay;
