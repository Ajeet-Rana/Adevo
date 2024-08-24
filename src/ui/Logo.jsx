import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 20.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "/Adevo_bg.png" : "/1-bg.png";

  return (
    <StyledLogo>
      <Link to="/">
        <Img src={src}></Img>
      </Link>
    </StyledLogo>
  );
}

export default Logo;
