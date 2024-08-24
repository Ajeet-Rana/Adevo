import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DesignLink = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 50px;
  gap: 2rem;
`;
function Links() {
  return (
    <DesignLink>
      <Link to="https://www.linkedin.com">
        <FaLinkedin size={30} color="#0077b5" />
      </Link>
      <Link to="https://www.twitter.com">
        <FaTwitter size={30} color="#1DA1F2" />
      </Link>
    </DesignLink>
  );
}

export default Links;
