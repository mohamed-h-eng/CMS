// import  from "react";
import CardComponent from "../../Card/CardComponent";
import Button from "../../../Ui/Button/Button";
import Style from "./FilterPage.module.css";

function FilterPage({ events }) {
  
  return (
    <main className={`container-fluid py-4 ${Style.main}`}>
      <div className={`${Style.heading} row align-items-center mb-4`}>
        <div className={`${Style.eventLength} col-6`}>
          <span className={`${Style.text} `}>
            Showing {events.length} events
            near you
          </span>
        </div>
        <div
          className={`${Style.sortBy} col-6  d-flex gap-4 justify-content-end`}
        >
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" name="sort">
            <option value="relevance">Relevance</option>
            <option value="date">Date</option>
            <option value="capacity">Capacity</option>
          </select>
        </div>
      </div>
      <div className="container-fluid">
        <div className={`${Style.eventCards} row`} id="eventCards">
          {/* this will be the card component used to display the events sent from the backend */}
          {events.map((event) => (
            <div
              className="col-12 col-md-3 d-flex justify-content-center"
              key={event.id}
            >
              <CardComponent event={event} />
            </div>
          ))}
        </div>
      </div>
      <Button className={`d-block mx-auto my-4 ${Style.loadMoreBtn}`}>
        Load More Events
      </Button>
    </main>
  );
}

export default FilterPage;
