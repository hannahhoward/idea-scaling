// Import React
import React from "react";
import PropTypes from "prop-types";

// Import Spectacle Core tags
import {
  Heading,
  Text
} from "spectacle";

import asSlide from "../slideTemplates/as-slide.jsx";
import { headingColor, textColor } from "../slideTemplates/utilities.jsx";
import FullScreen from "../slideTemplates/full-screen.jsx";

const videoStyle = {
  height: "100%",
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
};

const MozillaReleaseSlide = ({ size, fit, caps, inverted, text }) => {

  return (
    <FullScreen column>
      <div style={{ width: 1000, marginBottom: "2em" }}>
        <Heading
          size={size}
          fit={fit}
          caps={caps}
          textColor={ headingColor(inverted) }
          style={{ marginBottom: "2em" }}
        >
          { "A moment of (very 90's) history!" }
        </Heading>
      </div>
      <div style={{ flex: 1, position: "relative" }}>
        <iframe style={videoStyle} width="560" height="315" src="https://www.youtube.com/embed/4Q7FTjhvZ7Y?rel=0&amp;showinfo=0&amp;start=1497" frameBorder="0" allowFullScreen />
      </div>
    </FullScreen>
  );
};

MozillaReleaseSlide.propTypes = {
  caps: PropTypes.bool.isRequired,
  fit: PropTypes.bool.isRequired,
  inverted: PropTypes.bool,
  size: PropTypes.number.isRequired
};

MozillaReleaseSlide.defaultProps = {
  inverted: false,
  size: 1,
  fit: true,
  caps: true
};

export default asSlide(MozillaReleaseSlide);

