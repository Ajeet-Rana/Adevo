import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTablesOperations";
import AddCabin from "../features/cabins/addCabins";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
