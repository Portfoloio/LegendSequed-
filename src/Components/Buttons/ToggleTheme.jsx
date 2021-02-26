import styled from "styled-components";

const Toggle = styled.button`
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradient};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
  box-shadow: ${(props) =>
    props.theme.text === "#363537" || "0 3px 30px 0 rgb(30 93 233 / 56%);"};
  border: none;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

function ToggleTheme(props) {
  function changeTheme() {
    props.theme === "light" ? props.setTheme("dark") : props.setTheme("light");
  }
  const icon =
    props.theme === "light" ? (
      <i className="fas fa-moon"></i>
    ) : (
      <i className="fas fa-sun"></i>
    );

  return <Toggle onClick={changeTheme}>{icon}</Toggle>;
}
export default ToggleTheme;
