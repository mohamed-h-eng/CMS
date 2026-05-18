import Style from "./Filter.module.css";
import { IoMdMusicalNote } from "react-icons/io";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { MdTerminal } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { useState } from "react";
const Filter = () => {
  const initialState = {
    free: false,
    paid: false,
    today: false,
    thisWeek: false,
    thisMonth: false,
    music: false,
    sports: false,
    arts: false,
    tech: false,
  };
  const [filters, setFilters] = useState(initialState);

  const handleCheckboxChange = (e) => {
    console.log(e.target.name, e.target.checked);
    // const { name, checked } = e.target;
    setFilters( (prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }))
    ;
  };

  const handleClearAll = () => {
    setFilters(initialState);
  };

  return (
    <aside className={`col-2 d-flex flex-column p-3 ${Style.filter}`}>
      <h4 className={`${Style.title} `}>Filters</h4>
      <div className={Style.filterGroup}>
        <button className={Style.clearBtn} onClick={handleClearAll}>Clear all</button>
        <div className={`${Style.filterField} ${Style.priceField}`}>
          <h3 className={Style.filterTitle}>Price</h3>
          <div className={Style.options}>
            <label htmlFor="free">
              <input type="checkbox" id="free" name="free" checked={filters.free}
                onChange={handleCheckboxChange} />
              Free Events
            </label>
            <label htmlFor="paid">
              <input type="checkbox" id="paid" name="paid" checked={filters.paid}
                onChange={handleCheckboxChange} />
              Paid Tickets
            </label>
          </div>
        </div>
        <div className={`${Style.filterField} ${Style.dateField}`}>
          <h3 className={Style.filterTitle}>Date</h3>
          <div className={Style.options}>
            <label htmlFor="today">
              <input type="checkbox" id="today" name="today" checked={filters.today}
                onChange={handleCheckboxChange} />
              Today
            </label>
            <label htmlFor="thisWeek">
              <input type="checkbox" id="thisWeek" name="thisWeek" checked={filters.thisWeek}
                onChange={handleCheckboxChange} />
              This Week
            </label>
            <label htmlFor="thisMonth">
              <input type="checkbox" id="thisMonth" name="thisMonth" checked={filters.thisMonth}
                onChange={handleCheckboxChange} />
              This Month
            </label>
          </div>
        </div>
        <div className={`${Style.filterField} ${Style.eventTypeField}`}>
          <h3 className={Style.filterTitle}>Event Type</h3>
          <div className={Style.options}>
            <label htmlFor="music">
              <div className={Style.labelIcon}><IoMdMusicalNote /></div>
              <input type="checkbox" id="music" name="music" checked={filters.music}
                onChange={handleCheckboxChange} />
              Music
            </label>
            <label htmlFor="sports">
              <div className={Style.labelIcon}><MdOutlineSportsBasketball /></div>
              <input type="checkbox" id="sports" name="sports" checked={filters.sports}
                onChange={handleCheckboxChange} />
              Sports
            </label>
            <label htmlFor="arts">
              <div className={Style.labelIcon}><IoColorPaletteOutline /></div>
              <input type="checkbox" id="arts" name="arts" checked={filters.arts}
                onChange={handleCheckboxChange} />
              Arts
            </label>
            <label htmlFor="tech">
              <div className={Style.labelIcon}><MdTerminal /></div>
              <input type="checkbox" id="tech" name="tech" checked={filters.tech}
                onChange={handleCheckboxChange} />
              Tech
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Filter;
