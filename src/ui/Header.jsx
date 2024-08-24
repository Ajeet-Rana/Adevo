import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchBoxContext";
const HeaderStyle = styled.div`
  background-color: var(--color-grey-0);

  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-grey-50);
  padding: 1.4rem;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid #ffc0a1;
  position: absolute;
  left: 30rem;
  width: 40%;
  input {
    background-color: var(--color-grey-50);
    border: none;
    outline: none;
    margin-left: 0.5rem;
    font-size: large;
    margin-left: 3%;
    margin-right: auto;
  }

  svg {
    color: red;
  }
`;

const SelectBox = styled.select`
  background-color: var(--color-grey-50);
  padding: 10px;
  border-radius: 5rem;
  position: absolute;
  left: 71rem;
  width: 10%;
`;
function Header() {
  const { searchQuery, setSearchQuery, select, setSelect } = useSearch();
  const navigate = useNavigate();

  console.log("Search Query:", searchQuery);
  console.log("Selected Option:", select);

  function handleSetSelect(event) {
    const value = event.target.value;
    setSelect(value);
    if (value === "bookings") {
      navigate("/bookings");
    } else if (value === "cabins") {
      navigate("/cabins");
    }
  }

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <HeaderStyle>
      <SearchBar>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <HiOutlineMagnifyingGlass size={30} />
      </SearchBar>
      <SelectBox value={select} onChange={handleSetSelect}>
        <option value="" disabled>
          Select
        </option>
        <option value="bookings">Bookings</option>
        <option value="cabins">Cabins</option>
      </SelectBox>
      <HeaderMenu />
    </HeaderStyle>
  );
}

export default Header;
