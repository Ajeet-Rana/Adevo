import styled from "styled-components";
//import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

const StyledCheckout = styled.button`
  border: 2px solid #808080;
  background-color: #808080;
  color: #ffdab9;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
`;
function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();
  return (
    <StyledCheckout
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </StyledCheckout>
  );
}

export default CheckoutButton;
