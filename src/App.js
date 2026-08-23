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
  const { loading, showModal, setShowModal, images, setImages } = controllers();

  useEffect(() => {
    // Save images to localStorage whenever they change
    // localStorage.setItem("images", JSON.stringify(images));
    // console.log("GALLERY IMAGES:", images);
  }, [images]);

  useEffect(() => {
    // Load images from localStorage on component mount
    const savedImages = localStorage.getItem("images");
    if (savedImages) {
      setImages(JSON.parse(savedImages));
    }
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<TextToImage />} />
        <Route path="/images-to-image" element={<ImagesToImage />} />
        <Route
          path="/images-to-blended-image"
          element={<ImagesToBlendedImage />}
        />
        <Route path="/image-to-video" element={<ImageToVideo />} />
      </Routes>
      <Gallery images={images} />
      <Navbar />
      {loading && <Loading />}
      {showModal && <ImageModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default App;
