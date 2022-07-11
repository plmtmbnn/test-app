import { React, useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [recipeList, setrecipeList] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const result = await axios.get(
      "https://masak-apa-tomorisakura.vercel.app" + "/api/recipes"
    );
    if (result && result.data && result.data.results) {
      setrecipeList(result.data.results);
    }
  };

  return (
    <div>
        {
          recipeList.map((item) => {
            return (<><p>{item.title}</p><hr/></>)
          })
        }
    </div>
  );
}

export default App;
