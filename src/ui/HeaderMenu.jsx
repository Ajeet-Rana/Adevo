import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon2 from "./ButtonIcon2";
import { useNavigate } from "react-router-dom";
import DarkModeToogle from "./DarkModeToogle";
import UserAvatar from "../features/authentication/UserAvatar";

const StyleHeaderMenu = styled.ul`
  display: flex;
  gap: 1.3rem;
  padding: 0.5rem 0.8rem 0.3rem 0.8rem;
  border-radius: 4rem;
  border: 2px solid #ffc0a1;
  background-color: #ffcdb4;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyleHeaderMenu>
      <li>
        <ButtonIcon2 onClick={() => navigate("/account")}>
          <UserAvatar />
        </ButtonIcon2>
      </li>
      <li>
        <DarkModeToogle />
      </li>
      <li>
        <Logout />
      </li>
    </StyleHeaderMenu>
  );
}

export default HeaderMenu;
