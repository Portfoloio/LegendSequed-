import styled, { keyframes } from "styled-components";
import background from "../../images/portfoliobackground.png";

export const Background = styled.div`
  background-image: url(${background});
  opacity: 0.2;
  position: absolute;
  width: 100%;
  height: 900px;
`;

export const Section = styled.section`
  background-color: ${({ theme }) => theme.sectionBgC};
  width: 100%;
  display: flex;
  justify-content: center;

  #Portfolio {
    width: 400px;
    margin: 10px;
    z-index: 1;
    padding-top: 4rem;
  }
  #portfolio--title-tags > div {
    text-align-last: start;
    color: ${({ theme }) => theme.text};
    text-align-last: start;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 240px;
  }
  #portfolio--title-tags > div h1 {
    letter-spacing: 0;
  }
  #portfolio--title-tags > div h1::after {
    content: "";
    width: 72px;
    height: 3px;
    background-color: #0dd7f7;
    border-radius: 6px;
    display: block;
  }
  .active {
    color: #0dd7f7;
  }
  .text-left {
    text-align: left;
    margin-top: 10px;
  }
  .portfolio-container {
    z-index: 1;
    padding: 5rem 0;
  }
  @media (max-width: 769px) {
    flex-direction: column;
    > div {
      text-align: -webkit-center;
    }
  }
`;

export const Tags = styled.div`
  margin-top: 30px;
`;

export const Tag = styled.a`
  margin: 0 10px;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  transition: color 0.5s;
  :first-child {
    margin-left: 0;
  }
  :hover {
    color: #0dd7f7;
  }
  ::after {
    content: "/";
    padding-left: 10px;
    color: #00000036;
    font-size: 10px;
    position: relative;
    top: -3px;
  }
`;

const animation = keyframes`
 0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
export const Container = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 55px);
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  max-width: 600px;
  position: relative;
  #image-cont {
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 10px;
    animation: ${animation} 0.4s forwards;
    position: relative;
    object-fit: cover;
    transition: all ease-in-out 0.3s;
  }
  #image-cont:nth-child(1),
  #hover-image:nth-child(1) {
    grid-column: 1 / 7;
    grid-row: 1 / 4;
  }
  #image-cont:nth-child(2),
  #hover-image:nth-child(2) {
    grid-column: 7 / 10;
    grid-row: 1 / 4;
  }
  #image-cont:nth-child(3),
  #hover-image:nth-child(3) {
    grid-column: 1 / 4;
    grid-row: 4 / 7;
  }
  #image-cont:nth-child(4),
  #hover-image:nth-child(4) {
    grid-column: 4 / 10;
    grid-row: 4 / 7;
  }
  #image-cont:nth-child(5),
  #hover-image:nth-child(5) {
    grid-column: 1 / 5;
    grid-row: 7 / 10;
  }
  #image-cont:nth-child(6),
  #hover-image:nth-child(6) {
    grid-column: 5 / 10;
    grid-row: 7 / 10;
    transition: all 0.2s;
  }
  #hover-image {
    background-color: #00000000;
    width: 100%;
    position: absolute;
    z-index: 2;
    height: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 9px;
    transition: all 0.5s;
  }

  #hover-image h5 {
    opacity: 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    transition: all 0.3s;
    font-style: italic;
  }
  #hover-image h4 {
    opacity: 0;
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    transition: all 0.3s;
  }
  #hover-image i {
    opacity: 0;
    color: white;
    align-self: center;
    font-size: 25px;
    transition: all 0.3s;
  }
  #hover-image i:hover {
    transition: color 0.3s;
    color: #0dd7f7;
    cursor: pointer;
  }

  #image-cont:hover #hover-image {
    background-color: #000000c9;
    transition: all 0.2s;
  }
  #image-cont:hover #hover-image i,
  #image-cont:hover #hover-image h5,
  #image-cont:hover #hover-image h4 {
    transition: all 0.3s;
    opacity: 1;
  }
  @media (max-width: 426px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 500px;
    img:first-child {
      grid-column-start: 1;
      grid-column-end: 1;
    }
  }
`;
export const ImagCard = styled.div``;
