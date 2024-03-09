import { useState, useEffect } from "react";

import entriesService from "./services/entries";

import Header from "./components/Header";
import Program from "./components/Program";
import Footer from "./components/Footer";

const App = () => {
  const [entries, setEntries] = useState(null);

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    entriesService
      .getAll()
      .then((initialEntries) => setEntries(initialEntries));
  }, []);

  const handleAddOrUpdate = (e) => {
    e.preventDefault();

    const newEntry = {
      date,
      title,
      note,
    };

    const duplicates = entries.filter((entry) => entry.date === newEntry.date);

    if (duplicates.length > 0) {
      const confirm = window.confirm(
        "There is already session with this date. Do you want to replace it?"
      );

      if (confirm) {
        entriesService
          .update(duplicates[0].id, newEntry)
          .then((changedEntry) => {
            setEntries(
              entries.map((entry) =>
                entry.id !== duplicates[0].id ? entry : changedEntry
              )
            );
          });
      }
    } else {
      entriesService.create(newEntry).then((createdEntry) => {
        setEntries(entries.concat(createdEntry));
        clearInputs();
      });
    }
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Doy you want to delete this entry?");
    if (confirm) {
      entriesService.remove(id);
      setEntries(entries.filter((entry) => entry.id !== id));
    }
  };

  const clearInputs = () => {
    setDate("");
    setTitle("");
    setNote("");
  };

  const onDateChange = (e) => setDate(e.target.value);
  const onTitleChange = (e) => setTitle(e.target.value);
  const onNoteChange = (e) => setNote(e.target.value);

  if (entries) {
    return (
      <div className="text-slate-900 flex flex-col min-h-screen">
        <Header />
        <Program
          entries={entries}
          date={date}
          title={title}
          note={note}
          onDateChange={onDateChange}
          onTitleChange={onTitleChange}
          onNoteChange={onNoteChange}
          onFormSubmit={handleAddOrUpdate}
          onDelete={handleDelete}
        />
        <Footer />
      </div>
    );
  }
};

export default App;
