// dependencies
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// controllers
import controllers from "./controllers/index.js";

// styles
import "./style/style.scss";

// components
// layout
import Gallery from "./components/layout/Gallery.js";
import Header from "./components/layout/Header.js";
import Loading from "./components/layout/Loading.js";
import Navbar from "./components/layout/Navbar.js";
import ImageModal from "./components/layout/ImageModal.js";
// routes
import TextToImage from "./components/routes/TextToImage.js";
import ImagesToImage from "./components/routes/ImagesToImage.js";
import ImagesToBlendedImage from "./components/routes/ImagesToBlendedImage.js";
import ImageToVideo from "./components/routes/ImageToVideo.js";

const App = () => {
  const controller = controllers();

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<TextToImage controller={controller} />} />
        <Route path="/images-to-image" element={<ImagesToImage />} />
        <Route
          path="/images-to-blended-image"
          element={<ImagesToBlendedImage />}
        />
        <Route path="/image-to-video" element={<ImageToVideo />} />
      </Routes>
      <Gallery images={controller.images} />
      <Navbar />
      {controller.loading && <Loading />}
      {controller.showModal && (
        <ImageModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default App;
