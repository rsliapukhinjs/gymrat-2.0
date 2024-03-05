import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Program from "./components/Program";
import Footer from "./components/Footer";

const App = () => {
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/entries")
      .then((response) => setEntries(response.data));
  }, []);

  if (entries) {
    return (
      <div className="text-slate-900 flex flex-col min-h-screen">
        <Header />
        <Program entries={entries} />
        <Footer />
      </div>
    );
  }
};

export default App;
