import React from 'react';
import './PhotoGallery.css'; // Import the CSS for styling

// Import images from the relative path
import image1 from './Images/1.png';
import image2 from './Images/2.png';
import image3 from './Images/3.png';
import image4 from './Images/4.png';
import image5 from './Images/5.png';
import image6 from './Images/6.png';
import image7 from './Images/7.png';
import image8 from './Images/8.png';
import image9 from './Images/9.png';
import image10 from './Images/1.png';
import image11 from './Images/2.png';
import image12 from './Images/3.png';
import image13 from './Images/4.png';
import image14 from './Images/5.png';

// Create the photos array with imported images
const photos = [
  { id: 1, src: image1, alt: 'Image 1 description' },
  { id: 2, src: image2, alt: 'Image 2 description' },
  { id: 3, src: image3, alt: 'Image 3 description' },
  { id: 4, src: image4, alt: 'Image 4 description' },
  { id: 5, src: image5, alt: 'Image 5 description' },
  { id: 6, src: image6, alt: 'Image 6 description' },
  { id: 7, src: image7, alt: 'Image 7 description' },
  { id: 8, src: image8, alt: 'Image 8 description' },
  { id: 9, src: image9, alt: 'Image 9 description' },
  { id: 10, src: image10, alt: 'Image 1 description' },
  { id: 11, src: image11, alt: 'Image 2 description' },
  { id: 12, src: image12, alt: 'Image 3 description' },
  { id: 13, src: image13, alt: 'Image 4 description' },
  { id: 14, src: image14, alt: 'Image 5 description' },
  { id: 15, src: image1, alt: 'Image 6 description' },
  { id: 16, src: image2, alt: 'Image 7 description' },
];

const PhotoGallery = () => {
  return (
    <div className="gallery-wrapper">
      <h1 className="gallery-title text-center">Photo Gallery</h1>
      <div className="gallery-container">
        {photos.map((photo) => (
          <div key={photo.id} className="gallery-item">
            <img src={photo.src} alt={photo.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
