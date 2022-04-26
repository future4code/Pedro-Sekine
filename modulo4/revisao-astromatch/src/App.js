import React, { useEffect, useState } from "react";
import { UpperMenu } from "./components/UpperMenu";
import { CardPerson } from "./components/CardPerson";
import { ListMatches } from "./components/ListMatches";

function App() {
  const [page, setPage] = useState("match"); // match OR list
  const [showComponent, setShowComponent] = useState();

  useEffect(() => {
    setShowComponent(<CardPerson />);
  } , [])


  const handleChangePage = (page) => {
    setPage(page);
    console.log("page", page);
    
    if (page === "match") {
      setShowComponent(<CardPerson />);
    } else if (page === "list") {
      setShowComponent(<ListMatches />);
    }
  };



  return (
    <div>
      <UpperMenu page={page} handleChangePage={handleChangePage} />
      {showComponent}
    </div>
  );
}

export default App;
