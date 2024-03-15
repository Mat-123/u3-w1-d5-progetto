import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EpiflixNavbar from "./components/EpiflixNavbar";
import EpiflixFooter from "./components/EpiflixFooter";
import GenresBar from "./components/GenresBar";
import FilmsSlider from "./components/FilmsSlider";

function App() {
  return (
    <div className="App bg-dark">
      <EpiflixNavbar />
      <GenresBar />
      <FilmsSlider searchTerm="harry potter" />
      <FilmsSlider searchTerm="lord of the rings" />
      <FilmsSlider searchTerm="fast and furious" />
      <EpiflixFooter />
    </div>
  );
}

export default App;
