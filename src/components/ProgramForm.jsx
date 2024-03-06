import React from "react";

const ProgramForm = ({
  date,
  title,
  note,
  onDateChange,
  onTitleChange,
  onNoteChange,
  onFormSubmit,
}) => {
  return (
    <aside className="bg-slate-300 p-4 flex flex-col justify-center gap-8">
      <h2 className="text-lg text-center">Add new training</h2>
      <form
        className="flex flex-col justify-start gap-4"
        onSubmit={onFormSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={onDateChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            placeholder="What are you gonna do today?"
            value={title}
            onChange={onTitleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="note">Note</label>
          <textarea
            name="note"
            id="note"
            placeholder="Share some thought below"
            value={note}
            onChange={onNoteChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="block px-4 py-2 bg-slate-500 hover:bg-slate-600 text-slate-100 rounded self-center text-sm"
        >
          Add
        </button>
      </form>
    </aside>
  );
};

export default ProgramForm;
