import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.sectionBgC};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4rem 0;
  #Skills h6 {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 3px;
    margin-bottom: 12px;
  }
  #Skills h2 {
    text-transform: capitalize;
    position: relative;
    font-size: 36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
  }
  #Skills h2::after {
    content: "";
    width: 72px;
    height: 3px;
    background: #0dd7f7;
    border-radius: 6px;
    display: block;
    margin: 6px 0 36px;
  }
  #Skills p {
    width: 255px;
  }
  #Skills h6,
  #Skills p {
    opacity: 0.5;
  }
  #skill-parent {
    display: grid;
    grid-template-columns: repeat(17, 2rem);
    grid-template-rows: repeat(4, 50px);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    margin-right: 5rem;
    margin-left: 3rem;
  }
  #skill-container:nth-child(1) {
    grid-column: 1/9;
    grid-row: 1/2;
  }
  #skill-container:nth-child(2) {
    grid-column: 9/18;
    grid-row: 1/2;
  }
  #skill-container:nth-child(3) {
    grid-column: 1/7;
    grid-row: 2/3;
  }
  #skill-container:nth-child(4) {
    grid-column: 7/14;
    grid-row: 2/3;
  }
  #skill-container:nth-child(5) {
    grid-column: 1/10;
    grid-row: 3/4;
  }
  #skill-container:nth-child(6) {
    grid-column: 10/16;
    grid-row: 3/4;
  }
  #skill-container:nth-child(7) {
    grid-column: 1/11;
    grid-row: 4/5;
  }
  @media screen and (max-width: 1024px) {
    #skill-parent {
      grid-template-columns: repeat(10, 2rem);
      grid-template-rows: repeat(7, 50px);
    }
    #skill-container:nth-child(1) {
      grid-column: 1/9;
      grid-row: 1/2;
    }
    #skill-container:nth-child(2) {
      grid-column: 1/10;
      grid-row: 2/3;
    }
    #skill-container:nth-child(3) {
      grid-column: 1/7;
      grid-row: 3/4;
    }
    #skill-container:nth-child(4) {
      grid-column: 1 / 8;
      grid-row: 4/5;
    }
    #skill-container:nth-child(5) {
      grid-column: 1/10;
      grid-row: 5/6;
    }
    #skill-container:nth-child(6) {
      grid-column: 1/7;
      grid-row: 6/7;
    }
    #skill-container:nth-child(7) {
      grid-column: 1/11;
      grid-row: 7/8;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    #Skills {
      margin: 3rem auto;
      width: 86%;
    }
  }
`;
export const Skill = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 18px 4px 8px;
  transition: ease-in-out 0.3s;
  background: #ffffff0a;
  border-radius: 12px;
  box-shadow: 0 0 29px 0 rgb(68 88 144 / 12%);
  height: 100%;
  width: 100%;
  :hover {
    background-color: ${({ theme }) => theme.body};
  }
  > div {
    display: flex;
    align-items: center;
    i {
      margin: 0 10px;
      font-size: 1.5rem;
    }
  }
  h3 {
    font-size: 14px;
  }
  p {
    color: white;
    background: #0c3d71;
    padding: 3px 15px;
    border-radius: 30px;
    font-size: 14px;
    opacity: 0.5;
  }
`;
