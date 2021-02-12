import styled from "styled-components";
import moon from "../../images/Moon.PNG";
import sun from "../../images/sun.png";
const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradient};
  &:focus {
    outline: none;
  }

  transition: all 0.5s ease;
`;

function ToggleTheme(props) {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }
  const icon =
    props.theme === "light" ? (
      <img src={moon} size={40} alt="moon" />
    ) : (
      <img src={sun} alt=" sun" />
    );

  return <Toggle onClick={changeTheme}>{icon}</Toggle>;
}
export default ToggleTheme;
