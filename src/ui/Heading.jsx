import styled, { css } from "styled-components";

const Heading = styled.h1`
  flex-direction: column;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 40px;
      font-weight: bolder;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 28px;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 26;
    `} 
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 500;
      text-align: center;
    `}
`;

export default Heading;
