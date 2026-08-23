// dependencies
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// style
import "./style.scss";

// components
import { NavLink } from "../utils/links.js";

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  return (
    <nav className="navbar">
      <h2
        className="navbar-header"
        onClick={() => setShowNavLinks(!showNavLinks)}>
        MENU
      </h2>
      <AnimatePresence>
        {showNavLinks && (
          <motion.div
            className="navbar-links"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}>
            <NavLink to="/" text="Text to Image" />
            <NavLink to="/images-to-image" text="Images to Image" />
            <NavLink
              to="/images-to-blended-image"
              text="Images to Blended Image"
            />
            <NavLink to="/image-to-video" text="Image to Video" />
            <p className="navbar-close" onClick={() => setShowNavLinks(false)}>
              close
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
