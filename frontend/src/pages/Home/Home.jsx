import Filter from "../../components/User/Filter/FilterSidebar/Filter";
import FilterPage from "../../components/User/Filter/FilterBody/FilterPage";
import Navbar from "../../components/User/Navbar/Navbar";
import Footer from "../../components/User/Footer/Footer";
import Style from "./Home.module.css";
import Carousel from "../../components/User/Carousel/Carousel";
const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className={`${Style.home} d-flex gap-0`}>
        <Filter />
        <FilterPage />
      </div>

      <Footer />
    </>
  );
};

export default Home;
