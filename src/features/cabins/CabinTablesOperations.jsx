import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "NO Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Name (A-Z)" },
          { value: "name-desc", label: "Name (Z-A)" },
          { value: "regularPrice-asc", label: "Price (Low first)" },
          { value: "regularPrice-desc", label: "Price (High first)" },
          { value: "maxCapacity", label: "Capacity (Low first)" },
          { value: "maxCapacity", label: "Capacity (High first)" },
        ]}
      />
    </TableOperations>
  );
}
export default CabinTableOperations;
