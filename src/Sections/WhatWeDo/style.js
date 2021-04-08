import styled from "styled-components";
import services from "../../images/services.svg";
export const Background = styled.div`
  background-image: url(${services});
  background-size: cover;
  height: 100vh;
`;

export const Section = styled.div`
  .info {
    text-align: center;
    padding-bottom: 30px;
  }
  .card-1 {
    transition: all 0.5s;
    margin: 5px;
  }
  .card-1:hover {
    transform: scale(1.15);
    transition: all 0.5s;
  }
  .title {
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 16px;
  }
  .info h6 {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 3px;
    margin-bottom: 12px;
    font-weight: 800;
    color: #666;
  }
  .info h2 {
    text-transform: capitalize;
    position: relative;
    font-size: 36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    text-align: center;
    color: #394153;
  }
  .info h2::after {
    content: "";
    width: 72px;
    height: 3px;
    background: #0dd7f7;
    border-radius: 6px;
    display: block;
    margin: 6px auto 36px;
  }
  .description {
    margin: 12px 0 48px 0;
    color: #666;
    font-size: 14px;
  }
  .Cards {
    display: flex;
    margin-left: 100px;
    justify-content: space-between;
  }
  #Learn-more {
    margin-top: 24px;
    display: block;
    position: relative;
    color: #2e3d5f;
    opacity: 0.6;
  }

  #Learn-more::after {
    content: "";
    display: inline-block;
    height: 2px;
    width: 18px;
    background-color: #394153;
    opacity: 0.6;
    margin-left: 6px;
    position: relative;
    top: -3px;
  }

  @media only screen and (max-width: 900px) {
    height: 193vh;
    .Cards {
      flex-direction: column;
    }
  }
  .card {
    font-size: 32px;
    margin-right: 12px;
    line-height: 1;
    background: #ffffff;
    box-shadow: 0 0 29px 0 rgb(68 88 144 / 12%);
    padding: 22px;
    border-radius: 18px;
  }
`;
