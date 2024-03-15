import { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FilmsSlider extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  fetchFilms = () => {
    const { searchTerm } = this.props;
    fetch(`http://www.omdbapi.com/?apikey=19f4e7b6&s=${searchTerm}`)
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
  formatTitle = (title) => {
    return title.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  render() {
    const { searchTerm } = this.props;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="text-start mt-3 container-fluid sliderContainer" data-bs-theme="dark">
        <h2 className="mb-2 sliderTitle">{this.formatTitle(searchTerm)}</h2>

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
            <Alert variant="danger">Qualcosa è andato storto.</Alert>
          </div>
        )}

        <Slider {...settings}>
          {this.state.movies.map((movie) => (
            <div key={movie.imdbID} style={{ padding: "0 5px" }}>
              <img src={movie.Poster} alt={movie.Title} className="slider-image img-fluid" />
            </div>
          ))}
        </Slider>

        {/* <Row xs={1} md={1} className="g-4">
          {this.state.movies.slice(0, 6).map((movie) => (
            <Col key={movie.imdbID}>
              <Card>
                <Card.Img variant="top" src={movie.Poster} alt={movie.Title} className="img-fluid slider-image" />
              </Card>
            </Col>
          ))}
        </Row> */}
      </div>
    );
  }
}

export default FilmsSlider;
