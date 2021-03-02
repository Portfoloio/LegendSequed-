import styled, { keyframes } from "styled-components";
import background from "../../images/portfoliobackground.png";

export const Background = styled.div`
  background-image: url(${background});
  opacity: 0.2;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Section = styled.section`
  background-color: ${({ theme }) => theme.sectionBgC};
  width: 100%;
  display: flex;
  justify-content: center;

  #portfolio--title-tags {
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
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const Container = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 300px;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  max-width: 600px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border-radius: 10px;
    transition: filter 0.2s;
    animation: ${animation} 1s linear;
  }
  img:first-child {
    grid-column-start: 1;
    grid-column-end: 7;
  }
  img:nth-child(2) {
    grid-column-start: 7;
    grid-column-end: 10;
  }
  img:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 5;
  }
  img:nth-child(4) {
    grid-column-start: 5;
    grid-column-end: 10;
  }
  img:nth-child(5) {
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 6;
  }
  img:nth-child(6) {
    grid-column-start: 6;
    grid-column-end: 10;
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
