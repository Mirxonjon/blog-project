import { useContext } from "react";
import { AlbumsContext } from "../../contexts/albums";
import "./type-filter.scss";

const TypeFilter = () => {
  const { albums, setFilteredAlbums, setType } = useContext(AlbumsContext);

  const filterAlbums = (type) => {
    const updatedAlbums = type
      ? albums?.filter((album) => album.type === type)
      : albums;
    setFilteredAlbums(updatedAlbums);
    setType(type)
  };

  return (
    <form className="type-filter" method="get"> 
      <label onClick={() => filterAlbums(null)} className="type-filter__label">
        <input
          defaultChecked
          className="visually-hidden type-filter__radio"
          type="radio"
          name="type"
        />
        <span className="type-filter__styled-radio">All</span>
      </label>
      <label
        onClick={() => filterAlbums("Design Theory")}
        className="type-filter__label"
      >
        <input
          className="visually-hidden type-filter__radio"
          type="radio"
          name="type"
        />
        <span className="type-filter__styled-radio">Design Theory</span>
      </label>
      <label onClick={() => filterAlbums("UX")} className="type-filter__label">
        <input
          className="visually-hidden type-filter__radio"
          type="radio"
          name="type"
        />
        <span className="type-filter__styled-radio">UX</span>
      </label>
      <label onClick={() => filterAlbums("UI")} className="type-filter__label">
        <input
          className="visually-hidden type-filter__radio"
          type="radio"
          name="type"
        />
        <span className="type-filter__styled-radio">UI</span>
      </label>
      <label
        onClick={() => filterAlbums("Typography")}
        className="type-filter__label"
      >
        <input
          className="visually-hidden type-filter__radio"
          type="radio"
          name="type"
        />
        <span className="type-filter__styled-radio">Typography</span>
      </label>
    </form>
  );
};

export default TypeFilter;
