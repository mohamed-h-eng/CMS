import Style from "./Filter.module.css";
import { IoMdMusicalNote } from "react-icons/io";

const Filter = () => {
  return (
    <aside className={`col-3 d-flex flex-column gap-4 ${Style.filter}`}>
      <h2 className={Style.title}>Filters</h2>
      <button className={Style.clearBtn}>Clear all</button>
      <div className={Style.filterGroup}>
        <h3 className={Style.filterTitle}>Event Type</h3>
        <div className={Style.options}>
          <label htmlFor="music">
            <IoMdMusicalNote />

            <input type="checkbox" id="music" name="music" />
            Music
          </label>
          <label htmlFor="sports">
            <input type="checkbox" id="sports" name="sports" />
            Sports
          </label>
          <label htmlFor="arts">
            <input type="checkbox" id="arts" name="arts" />
            Arts
          </label>
          <label htmlFor="tech">
            <input type="checkbox" id="tech" name="tech" />
            Tech
          </label>
        </div>
      </div>
    </aside>
  );
};

export default Filter;
