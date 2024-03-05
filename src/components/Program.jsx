import ProgramDisplay from "./ProgramDisplay";
import ProgramForm from "./ProgramForm";

const Program = ({ entries }) => {
  return (
    <main className="flex-1 grid grid-cols-[1fr_3fr]">
      <ProgramForm />
      <ProgramDisplay entries={entries} />
    </main>
  );
};

export default Program;
