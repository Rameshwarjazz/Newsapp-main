import { useState } from 'react';
// import { firestore } from '../firebase';
import image from '../assets/download.jpeg';

const NewsItems = ({ title, description, src, url }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "415px" }}>
      <img src={src ? src : image} style={{ height: "200px", width: "400px" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : ""}</p>
        <a href={url} className="btn btn-primary">
          Read more
        </a>
        <button
          onClick={toggleFavorite}
          className={`btn btn-outline-danger ${isFavorite ? "active" : ""}`}
        >
          Favorite
        </button>
      </div>
    </div>
  );
};

export default NewsItems;
