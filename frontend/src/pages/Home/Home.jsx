import Filter from "../../components/User/Filter/FilterSidebar/Filter";
import FilterPage from "../../components/User/Filter/FilterBody/FilterPage";
import Navbar from "../../components/User/Navbar/Navbar";
import Footer from "../../components/User/Footer/Footer";
import Style from "./Home.module.css";
import {Link} from 'react-router-dom'
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const Home = () => {
    return (
        <>
            <nav className="d-flex gap-3 p-3">
                <Link className="btn btn-outline-secondary d-flex align-items-center" to="/dashboard">
                    <MdOutlineAdminPanelSettings />
                    Switch to Admin View
                </Link>
                <div className="d-flex gap-3 px-3">
                    <Link className="btn btn-light">Login</Link>
                    <Link className="btn btn-primary">Sign Up</Link>
                </div>
            </nav>
            <div className={`${Style.home} d-flex gap-0`}>
                <Filter />
                <main className={`container-fluid py-4 ${Style.main}`}>
                    <div className={`${Style.heading} row align-items-center mb-4`}>
                        <div className={`${Style.eventLength} col-6`}>
                            <span className={`${Style.text} `}>Showing {/*array length of events sent from the backend*/} events near you</span>
                        </div>
                        <div className={`${Style.sortBy} col-6  d-flex gap-4 justify-content-end`}>
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
                        {events.map(event => (
                            <div className="col-12 col-md-4 d-flex justify-content-center" key={event.id}>
                                <CardComponent event={event} />
                            </div>
                        ))}
                    </div>
                    </div>
                    <Button className={`d-block mx-auto my-4 ${Style.loadMoreBtn}`}>Load More Events</Button>
                </main>
            </div>

            <Footer />
        </>
    );
}

export default Home;
