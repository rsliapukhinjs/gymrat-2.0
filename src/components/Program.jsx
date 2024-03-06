import ProgramDisplay from "./ProgramDisplay";
import ProgramForm from "./ProgramForm";

const Program = ({
  entries,
  date,
  title,
  note,
  onDateChange,
  onTitleChange,
  onNoteChange,
  onFormSubmit,
  onDelete,
}) => {
  return (
    <main className="flex-1 grid grid-cols-[1fr_3fr]">
      <ProgramForm
        date={date}
        title={title}
        note={note}
        onDateChange={onDateChange}
        onTitleChange={onTitleChange}
        onNoteChange={onNoteChange}
        onFormSubmit={onFormSubmit}
      />
      <ProgramDisplay entries={entries} onDelete={onDelete} />
    </main>
  );
};

export default Program;
