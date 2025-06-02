import React from "react";
import "./Gallery.css";

import gallery1 from "../../assets//gallery-1.png";
import gallery2 from "../../assets//gallery-2.png";
import gallery3 from "../../assets//gallery-3.png";
import gallery4 from "../../assets//gallery-4.png";
import seehere from "../../assets//white-arrow.png"

const Gallery = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery1} alt="gal1" />
        <img src={gallery2} alt="gal2" />
        <img src={gallery3} alt="gal3" />
        <img src={gallery4} alt="gal4" />
      </div>
      <button className="btn dark-btn">
        See More Here <img src={seehere} alt="" />
      </button>
    </div>
  );
};

export default Gallery;
