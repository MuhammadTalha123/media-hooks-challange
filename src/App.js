import React, { useState, useEffect } from "react";
import "./App.css";

function useMedia(query) {
  let [matches, setMatches] = useState(window.matchMedia(query).matches);

  // cDM, cDU
  useEffect(() => {
    let media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    let listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query]);

  return matches;
}

function App() {
  let small = useMedia("(max-width: 550px)");
  let large = useMedia("(min-width: 800px)");

  return (
    <div className="App">
      <h1>Media</h1>
      <p>Small? {small ? "Yep" : "Nope"}.</p>
      <p>Large? {large ? "Yep" : "Nope"}.</p>
    </div>
  );
}

export default App;
