import styled from "styled-components";
import contact from "../../images/contact.svg";

export const Background = styled.div`
  background-image: url(${contact});
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
`;
export const InfoSection = styled.div`
  display: flex;
  padding: 2.2rem 0.7rem;
  i {
    font-size: 20px;
    color: #fff;
    /* line-height: 1;
    background: #0dd7f7;
    padding: 12px 8px;
    border-radius: 50px 30px 40px 30px; */
    width: 72px;
    height: 37px;
    background: #0dd7f7;
    border-radius: 50px 30px 50px 50px;
    display: block;
    padding: 12px 8px;
  }
  .fas {
    margin: 10px;
    width: 7%;
  }
  h4 {
    font-size: 14px;
    color: #0c3d71;
    margin-bottom: 1rem;
  }
  p {
    color: inherit;
    font-size: 24px;
    font-weight: 300;
    color: inherit;
  }
`;
export const Section = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 2rem 3rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .contact-about h3 {
    font-size: 36px;
    margin: 0 0 24px 0;
    padding: 0;
    font-weight: 900;
    color: #394153;
  }
`;
export const RightForm = styled.div`
  padding: 1.5rem 2rem;
  h4 {
    color: #394153;
    margin: 0px 0px 8px 0px;
    font-size: 24px;
  }
  p {
    font-size: inherit;
    margin-bottom: 1rem;
    color: #666666;
  }
  textarea {
    margin-left: 10px;
    outline: none;
  }
  button {
    font-weight: 700;
    font-size: 14px;
    margin: 36px 0 0 0;
    display: inline-block;
    padding: 10px 30px;
    border-radius: 50px;
    transition: 0.5s;
    color: #fff;
    border: 2px solid #0c3d71;
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 20%);
    background-color: #0c3d71;
    margin-top: 12px;
    outline: none;
  }
`;
