import React from "react";
import "./GalleryBanner.css"; // Import the CSS for styling

const GalleryBanner = () => {
  return (
    <div className="gallery-banner">
      <div className="gallery-banner-overlay">
        <div className="gallery-banner-content">
          <h1>Gallery</h1>
          <p className="gallery-breadcrumb">
            <span>Home</span> <span className="gallery-separator">{">"}</span>{" "}
            <span>Gallery</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryBanner;
