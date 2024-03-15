import { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

class FilmsSlider extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  fetchFilms = () => {
    fetch("http://www.omdbapi.com/?apikey=19f4e7b6&s=harry%20potter")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Riscontrato problema nella chiamata API.");
        }
      })
      .then((filmsFromAPI) => {
        this.setState({
          movies: filmsFromAPI.Search,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    return (
      <div className="text-center mt-3">
        <h2 className="mb-2">Film disponibili</h2>

        {this.state.movies.length === 0 && this.state.isLoading === false && this.state.isError === false && (
          <h4> Al momento non ci sono film da visualizzare.</h4>
        )}

        {this.state.movies.length === 0 && (
          <div className="alert alert-warning" role="alert">
            Al momento non ci sono film disponibili.
          </div>
        )}
        {this.state.isLoading === true && (
          <div>
            <Spinner animation="border" variant="danger" />
          </div>
        )}

        {this.state.isError === true && (
          <div>
            <Alert variant="danger">Qualcosa è andato storto 🙁</Alert>
          </div>
        )}
        <Row xs={1} md={3} className="g-4">
          {this.state.movies.map((movie) => (
            <Col key={movie.imdbID}>
              <Card>
                <Card.Img variant="top" src={movie.Poster} alt={movie.Title} className="img-fluid" />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default FilmsSlider;
