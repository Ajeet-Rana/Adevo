import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const StyledText = styled.span`
  color: #ff4d6d;
  text-decoration: underline;
`;
function Dashboard() {
  const { user } = useUser();
  const { fullName } = user.user_metadata;
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">
          Welcome <StyledText>{fullName}</StyledText>
        </Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
