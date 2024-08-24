import styled from "styled-components";

const ButtonIcon = styled.button`
  background-color: var(--color-grey-0);
  border: none;
  padding: 1.1rem;
  border-radius: 2rem;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-900);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    //color: var(--color-brand-600);
    color: #ff2664;
    fill: #ff2664;
  }
`;

export default ButtonIcon;
