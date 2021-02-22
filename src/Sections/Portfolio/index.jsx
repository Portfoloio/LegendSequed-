import React, { useState, useEffect } from "react";
import { images } from "./DataImags";
import { SRLWrapper } from "simple-react-lightbox";
import { Tags, Tag, Container, ImagCard } from "./style";

const Tagbtn = ({ name, handleTag }) => {
  return <Tag onClick={() => handleTag(name)}>{name.toUpperCase()}</Tag>;
};

function Portfolio() {
  const [tag, setTag] = useState("all");
  const [filterImages, setFilterImages] = useState([]);
  useEffect(() => {
    tag === "all"
      ? setFilterImages(images)
      : setFilterImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className="container">
      <h1> Portfolio </h1>
      <Tags>
        <Tagbtn name="all" handleTag={setTag} />
        <Tagbtn name="App" handleTag={setTag} />
        <Tagbtn name="Design" handleTag={setTag} />
        <Tagbtn name="Writing" handleTag={setTag} />
      </Tags>
      <SRLWrapper>
        <Container>
          {filterImages.map((image) => (
            <ImagCard key={image.id}>
              <a href={`/imgs/${image.imagName}`}>
                <img
                  src={`/imgs/${image.imagName}`}
                  alt="Eman"
                  style={{
                    width: "100%",
                    objectFit: " contain",
                    borderRadius: "20px",
                    margin: "30px",
                  }}
                />
              </a>
            </ImagCard>
          ))}
        </Container>
      </SRLWrapper>
    </div>
  );
}
export default Portfolio;
