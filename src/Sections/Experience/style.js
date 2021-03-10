import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.sectionBgC};
  width: 100%;
  display: flex;
  padding: 108px 0;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-around;
  h6 {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 3px;
    margin-bottom: 12px;
  }
  h2 {
    text-transform: capitalize;
    position: relative;
    font-size: 36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
  }
  h2::after {
    content: "";
    width: 72px;
    height: 3px;
    background: #0dd7f7;
    border-radius: 6px;
    display: block;
    margin: 6px 0 36px;
  }
  p {
    width: 255px;
  }
  h6,
  p {
    opacity: 0.5;
  }
  > div:last-child {
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    font-weight: 700;
    font-size: 14px;
    margin-top: 36px;
    display: inline-block;
    padding: 10px 30px;
    border-radius: 50px;
    transition: all 0.3s;
    color: #fff;
    border: 2px solid #0c3d71;
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 20%);
    background-color: #0c3d71;
    cursor: pointer;
  }
  button:hover {
    background: #28bae5;
    border-color: #28bae5;
  }
  @media screen and (max-width: 426px) {
    flex-direction: column;
    > div:last-child {
      margin-top: 4em;
    }
  }
`;
export const ExperienceRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  i {
    background-color: #0dd7f7;
    padding: 12px;
    border-radius: 50px 30px 50px 50px;
    margin-right: 24px;
  }
  .title-time {
    margin-right: 3.5em;
    width: 210px;
    max-width: 210px;
  }
  h6,
  h4 {
    opacity: 0.5;
  }
  p {
    width: 400px;
    max-width: 345px;
    opacity: 0.5;
  }
  > div {
    display: flex;
    align-items: start;
    border-bottom: 1px solid #adb5bd29;
    margin-bottom: 24px;
    padding: 0px 20px;
    padding-bottom: 36px;
    max-width: 100%;
    @media screen and (max-width: 426px) {
      flex-direction: column;
    }
  }
`;
