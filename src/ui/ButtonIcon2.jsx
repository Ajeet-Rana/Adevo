import styled from "styled-components";

const ButtonIcon2 = styled.button`
  background-color: var(--color-grey-70);
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    //color: var(--color-brand-600);
    color: #ff2664;
    fill: #ff2664;
  }
`;

export default ButtonIcon2;
