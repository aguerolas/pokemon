import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  DropdownItem,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const PokeType = ({ pokemons, setfilterPokemon }) => {
  const [dropdown, setDropdown] = useState(false);

  const openCloseDropdown = () => {
    setDropdown(!dropdown);
  };
  const navigate = useNavigate();
  const clickCard = (e) => {
    const typeSelected = e.target.textContent;
    navigate(`/pokedex/type/${typeSelected}/`);
  };
  const [search, setSearch] = useState("");
  const handleChange = (h) => {
    h.preventDefault();
    setSearch(h.target.value);
    setfilterPokemon(filter(h.target.value));
  };
  const filter = (searchTerm) => {
    return pokemons?.filter((element) => {
      
       return (element.name.toString().toLowerCase().includes(searchTerm.toLowerCase()))
       
    });
    console.log(searchResult);
    setfilterPokemon(searchResult);
  };

  return (
    <article>
      <form>
        <input className="inputS margin4"
          type="text"
          placeholder="     Find your pokemon!"
          value={search}
          onChange={handleChange}
        />

        <Dropdown
          className="filterPos"
          isOpen={dropdown}
          toggle={openCloseDropdown}
        >
          <DropdownToggle className="filter">Pokemon Type</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={clickCard} className='up'>grass</DropdownItem>
            <DropdownItem onClick={clickCard} className='up' >fire</DropdownItem>
            <DropdownItem onClick={clickCard} className='up'>water</DropdownItem>
            <DropdownItem onClick={clickCard} className='up'>bug</DropdownItem>
            <DropdownItem onClick={clickCard} className='up'>normal</DropdownItem>
            <DropdownItem onClick={clickCard} className='up'>poison</DropdownItem>
            <DropdownItem onClick={clickCard} className='up'>fairy</DropdownItem>
            <DropdownItem onClick={clickCard} className='up'>rock</DropdownItem>
            <DropdownItem onClick={clickCard} className='up'>dark</DropdownItem>
            <DropdownItem onClick={clickCard} className='up'>ice</DropdownItem>
            <DropdownItem onClick={clickCard} className='up'>steel</DropdownItem>
            <DropdownItem onClick={clickCard} className='up'>dragon</DropdownItem>
            <DropdownItem onClick={clickCard} className='up'>ground</DropdownItem>
            <DropdownItem onClick={clickCard} className='up'>fighting</DropdownItem>
            <DropdownItem onClick={clickCard} className='up'>ghost</DropdownItem>
            <DropdownItem onClick={clickCard} className='up'>psychic</DropdownItem>
            <DropdownItem onClick={clickCard} className='up'>electric</DropdownItem>
            <DropdownItem onClick={clickCard} className='up'>flying</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </form>
    </article>
  );
};

export default PokeType;
