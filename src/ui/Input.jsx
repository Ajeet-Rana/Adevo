import styled from "styled-components";

const Input = styled.input`
  width: auto;
  color: rgb(36, 35, 42);
  font-size: 16px;
  line-height: 20px;
  min-height: 28px;
  display: inline-block;
  border-radius: 4px;
  padding: 8px 16px;
  border: 2px solid transparent;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;
  background: rgb(251, 251, 251);
  transition: all 0.1s ease 0s;

  &:focus {
    border: 2px solid rgb(124, 138, 255);
    outline: none;
  }
`;

export default Input;
