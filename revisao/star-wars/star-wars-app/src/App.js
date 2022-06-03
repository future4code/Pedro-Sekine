import react, { useState } from "react";
import { CharacterListPage } from "./pages/CharacterListPage/CharacterListPage";
import { CharacterDetailPage } from "./pages/CharacterDetailPage/CharacterDetailPage";

function App() {
  const [page, setPage] = useState("home");
  const [detailURL, setDetailURL] = useState("");

  const showPage = () => {
    switch (page) {
      case "details":
        return (
          <div>
            <CharacterDetailPage detailURL={detailURL} />
          </div>
        );
      case "list":
        return (
          <div>
            <CharacterListPage propsGoToDetailPage={goToDetailPage} />
          </div>
        );
      default:
        return <div>no Switch case, caiu no Default</div>;
    }
  };

  const changePage = (newPage) => {
    setPage(newPage);
  };

  const goToDetailPage = (url) => {
    setPage("details");
    setDetailURL(url);
    console.log("url", url)
  };

  return (
    <div>
      <h1>Star Wars</h1>
      <button onClick={() => changePage("details")}>CharacterDetailPage</button>
      <button onClick={() => changePage("list")}>CharacterListPage</button>
      {showPage()}
    </div>
  );
}

export default App;
