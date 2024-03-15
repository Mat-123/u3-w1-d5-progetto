import { BsGrid, BsGrid3X3 } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";

function GenresBar() {
  return (
    <div className="d-flex flex-row genresBarText container-fluid align-items-baseline" data-bs-theme="dark">
      <div className="me-auto d-flex flex-row">
        <p className="fw-bold fs-3 sliderTitle">TV Shows</p>
        <Dropdown>
          <Dropdown.Toggle variant="outline-light" id="dropdown-basic" className="ms-2">
            Genres
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Sci-Fi</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Drama</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <BsGrid className="icons" />
        <BsGrid3X3 className="icons" />
      </div>
    </div>
  );
}

export default GenresBar;
