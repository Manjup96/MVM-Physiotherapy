import React, { useState } from 'react';
import './OurVideo.css'; // Import CSS for styling
import { FaPlayCircle } from 'react-icons/fa'; // Import Play Circle icon from react-icons
import ReactModal from 'react-modal'; // Import React Modal
import videoBackgroundImg from './Images/OurVideo-background.jpg'; // Ensure this image is correctly loaded

const OurVideo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      className="our-video-section"
      style={{ backgroundImage: `url(${videoBackgroundImg})` }}
    >
      <div className="video-content">
        <span className="video-label">/ Video</span>
        <h2>Our Video</h2>
        <p>
          Welcome to our video series on physiotherapy, where we delve into the
          benefits and processes of healthcare support. In this video, we
          explore how physiotherapy can help individuals navigate their physical
          challenges, promoting overall well-being.
        </p>
        <button className="appointment-button">Make An Appointment</button>
      </div>
      <div className="video-thumbnail-wrapper">
        <div className="play-button-circle" onClick={openModal}>
          <FaPlayCircle className="custom-icon" />
        </div>
      </div>

      {/* Modal for YouTube Video */}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="video-modal"
        overlayClassName="video-modal-overlay"
        contentLabel="YouTube Video Modal"
        ariaHideApp={false}
      >
        <button
          className="close-modal"
          onClick={closeModal}
          aria-label="Close Modal"
        >
          X
        </button>
        <iframe
          width="100%"
          height="400px"
          src="https://www.youtube.com/embed/GRChq_29_3A"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ReactModal>
    </section>
  );
};

export default OurVideo;
