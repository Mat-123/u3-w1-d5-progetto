import { BsGrid, BsGrid3X3 } from "react-icons/bs";

function GenresBar() {
  return (
    <div className="d-flex flex-row genresBarText container-fluid" data-bs-theme="dark">
      <div className="me-auto">
        <p>TV Shows</p>
      </div>
      <div>
        <BsGrid className="icons" />
        <BsGrid3X3 className="icons" />
      </div>
    </div>
  );
}

export default GenresBar;
