import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EpiflixNavbar from "./components/EpiflixNavbar";
import EpiflixFooter from "./components/EpiflixFooter";
import GenresBar from "./components/GenresBar";

function App() {
  return (
    <div className="App bg-dark">
      <EpiflixNavbar />
      <GenresBar />

      <EpiflixFooter />
    </div>
  );
}

export default App;
