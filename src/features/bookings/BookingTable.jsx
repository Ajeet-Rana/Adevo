import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import { useSearch } from "../../context/SearchBoxContext";
function BookingTable() {
  const { bookings, isLoading, count } = useBookings();
  const { searchQuery } = useSearch();
  if (isLoading) return <Spinner />;
  const filteredBookings = bookings.filter((booking) => {
    const cabinName = booking.Cabins.name.toLowerCase();
    const guestName = booking.Guests.fullName.toLowerCase();
    const query = searchQuery.toLowerCase();

    return cabinName.includes(query) || guestName.includes(query);
  });
  if (!filteredBookings.length) return <Empty resourceName="bookings" />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={filteredBookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
