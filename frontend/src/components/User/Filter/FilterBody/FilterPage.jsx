// import  from "react";
import CardComponent from "../../Card/CardComponent";
import Button from "../../../Ui/Button/Button";
import Style from "./FilterPage.module.css";

function FilterPage() {
      {/*Dummy Event Cards */ }
    const events = [
        {
            id: 1,
            title: "Event 1",
            date: "2023-06-01",
            location: "Location 1",
            description: "Description for Event 1",
            image: "https://via.placeholder.com/150",
            eventType: "Music",
            price: 20,
        },
        {
            id: 2,
            title: "Event 2",
            date: "2023-06-05",
            location: "Location 2",
            description: "Description for Event 2",
            image: "https://via.placeholder.com/150",
            eventType: "Art",
            price: 0,
        },
        {
            id: 3,
            title: "Event 3",
            date: "2023-06-10",
            location: "Location 3",
            description: "Description for Event 3",
            image: "https://via.placeholder.com/150",
            eventType: "Technology",
            price: 0,
        },
       ];
  return (
    <main className={`container-fluid py-4 ${Style.main}`}>
      <div className={`${Style.heading} row align-items-center mb-4`}>
        <div className={`${Style.eventLength} col-6`}>
          <span className={`${Style.text} `}>
            Showing {/*array length of events sent from the backend*/} events
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
              className="col-12 col-md-4 d-flex justify-content-center"
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
