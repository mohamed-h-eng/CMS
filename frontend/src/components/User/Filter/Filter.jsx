import Style from "./Filter.module.css";
import { IoMdMusicalNote } from "react-icons/io";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { MdTerminal } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";

const Filter = () => {
  return (
    <aside className={`col-3 d-flex flex-column gap-4 ${Style.filter}`}>
      <h2 className={Style.title}>Filters</h2>
      <button className={Style.clearBtn}>Clear all</button>
      <div className={Style.filterGroup}>
        <div className={`${Style.filterField} ${Style.priceField}`}>
          <h3 className={Style.filterTitle}>Price</h3>
          <div className={Style.options}>
            <label htmlFor="free">
              <input type="checkbox" id="free" name="free" />
              Free Events
            </label>
            <label htmlFor="paid">
              <input type="checkbox" id="paid" name="paid" />
              Paid Tickets
            </label>
          </div>
        </div>
        <div className={`${Style.filterField} ${Style.dateField}`}>
          <h3 className={Style.filterTitle}>Date</h3>
          <div className={Style.options}>
            <label htmlFor="today">
              <input type="checkbox" id="today" name="today" />
              Today
            </label>
            <label htmlFor="thisWeek">
              <input type="checkbox" id="thisWeek" name="thisWeek" />
              This Week
            </label>
            <label htmlFor="thisMonth">
              <input type="checkbox" id="thisMonth" name="thisMonth" />
              This Month
            </label>
          </div>
        </div>
        <div className={`${Style.filterField} ${Style.eventTypeField}`}>
          <h3 className={Style.filterTitle}>Event Type</h3>
          <div className={Style.options}>
            <label htmlFor="music">
              <IoMdMusicalNote />
              <input type="checkbox" id="music" name="music" />
              Music
            </label>
            <label htmlFor="sports">
              <MdOutlineSportsBasketball />
              <input type="checkbox" id="sports" name="sports" />
              Sports
            </label>
            <label htmlFor="arts">
              <IoColorPaletteOutline />
              <input type="checkbox" id="arts" name="arts" />
              Arts
            </label>
            <label htmlFor="tech">
              <MdTerminal />
              <input type="checkbox" id="tech" name="tech" />
              Tech
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Filter;
