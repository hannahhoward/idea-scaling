// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  ListItem,
  List,
  Appear,
  Image
} from "spectacle";

import asSlide from "./as-slide.jsx";
import FullScreen from "./full-screen.jsx";

const AboutMeSlide = () => {
  const tgwLogo = require("../../assets/techgirlwonder-01.png").replace("/", "");
  const c5Logo = require("../../assets/carbonfive.png");
  const listStyle = { listStyleType: "none" };
  const imageStyle = { margin: "0em", marginLeft: "0.5em" };
  return (
      <FullScreen>
        <div style={{ flexGrow: 0, height: "100%" }}>
          <Appear >
              <Image src={tgwLogo} height="100%" margin="0px 40px 0px 0px" />
          </Appear>
        </div>
        <div style={{ flexGrow: 1 }}>
          <Heading size={1} fit caps lineHeight={1} textColor="quartenary">
            @techgirlwonder #AboutMe
          </Heading>
          <List>
            <ListItem>Hannah Howard</ListItem>
            <ListItem>hannah@carbonfive.com</ListItem>
            <ListItem>Twitter above!</ListItem>
            <Appear>
              <ListItem style={listStyle}>
                <Image style={imageStyle} src={c5Logo} width="408px"/>
              </ListItem>
            </Appear>
          </List>
        </div>
      </FullScreen>
  );
};

export default asSlide(AboutMeSlide);