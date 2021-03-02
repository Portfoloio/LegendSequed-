import React, { useState, useEffect } from "react";
import { images } from "./DataImags";
import { SRLWrapper } from "simple-react-lightbox";
import * as P from "./style";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../App";

const TagBtn = ({ name, handleTag, tag }) => {
  return (
    <P.Tag
      onClick={() => handleTag(name)}
      className={tag === name ? "active" : ""}
    >
      {name.toUpperCase()}
    </P.Tag>
  );
};

function Portfolio(props) {
  const [tag, setTag] = useState("all");
  const [theme, setTheme] = useState("light");
  const [filterImages, setFilterImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilterImages(images)
      : setFilterImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <ThemeProvider theme={props.theme === "light" ? darkTheme : lightTheme}>
      <P.Section>
        <div id="portfolio--title-tags">
          <div>
            <h1> Portfolio </h1>
            <P.Tags>
              <TagBtn name="all" handleTag={setTag} tag={tag} />
              <TagBtn name="App" handleTag={setTag} tag={tag} />
              <TagBtn name="Design" handleTag={setTag} tag={tag} />
              <TagBtn name="Writing" handleTag={setTag} tag={tag} />
            </P.Tags>
            <p className="text-left">
              It doesn’t matter how great your product
              <br /> or service is if your copy does not captivate <br />
              your audience
            </p>
          </div>
        </div>
        <div className="portfolio-container">
          <SRLWrapper>
            <P.Container>
              {filterImages.map((image) => (
                <img
                  key={image.id}
                  src={`/imgs/${image.imagName}`}
                  alt={image.imagName}
                />
              ))}
            </P.Container>
          </SRLWrapper>
        </div>
        <P.Background></P.Background>
      </P.Section>
    </ThemeProvider>
  );
}
export default Portfolio;
