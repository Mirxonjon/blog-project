import { useContext, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { AlbumsContext } from "../../contexts/albums";

import "./search.scss";

const Seach = () => {
  const inputRef = useRef();
  const { albums, type, setFilteredAlbums } = useContext(AlbumsContext);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const inputValue = inputRef.current.value;
    const filteredAlbums = type
      ? albums?.filter(
          (album) => album?.type === type && album?.title?.includes(inputValue)
        )
      : albums?.filter((album) => album.title.includes(inputValue));

    setFilteredAlbums(filteredAlbums);
  };

  return (
    <form className="search-form" onSubmit={handleFormSubmit} method="get">
      <input ref={inputRef} type="search" placeholder="Search"  />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default Seach;
