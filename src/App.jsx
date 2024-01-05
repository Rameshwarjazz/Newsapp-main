import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import AuthenticationComponent from "./AuthenticationComponent";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div>
      
      <Navbar setCategory={setCategory} />
      <AuthenticationComponent />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
