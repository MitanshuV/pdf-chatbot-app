import React from "react";

const App = () => {
  console.log(import.meta.env.VITE_API_KEY);

  return (
    <div>
      App
      <h1>this is the key: {import.meta.env.VITE_API_KEY}</h1>
    </div>
  );
};

export default App;
