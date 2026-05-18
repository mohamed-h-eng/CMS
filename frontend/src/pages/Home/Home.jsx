import Filter from "../../components/User/Filter/FilterSidebar/Filter";
import FilterPage from "../../components/User/Filter/FilterBody/FilterPage";
import Navbar from "../../components/User/Navbar/Navbar";
import Footer from "../../components/User/Footer/Footer";
import Style from "./Home.module.css";
import Carousel from "../../components/User/Carousel/Carousel";
import Cardimg from "../../assets/images/Cardimage.png";
const Home = () => {
  {
    /*Dummy Event Cards */
  }

  const events = [
    {
      id: 1,
      title: "Soul & Jazz Night",
      badge: "ELITE ACCESS",
      date: "2023-06-01",
      location: "Location 1",
      description: "An intimate residence of smooth music and vibes...",
      image: Cardimg,
      eventType: "Music",
      price: 20,
    },
    {
      id: 2,
      title: "Tech Leaders Conference",
      date: "2023-06-05",
      badge: "NEW EVENT",
      location: "Location 2",
      description: "Meet innovators, founders, and industry leaders...",
      image: Cardimg,
      eventType: "Art",
      price: 0,
    },
    {
      id: 3,
      title: "International Film Festival 2024",
      date: "2023-06-10",
      badge: "TRENDING NOW",

      location: "Location 3",
      description:
        "Celebrating cinematic excellence from independent filmmakers around the world...",
      image: Cardimg,
      eventType: "Technology",
      price: 0,
    },
    {
      id: 4,
      title: "Cybersecurity World Summit",
      badge: "BEST SELLER",

      date: "2023-06-15",
      location: "Location 4",
      description: "Deep dive into the future of digital defense and cloud...",
      image: Cardimg,
      eventType: "Technology",
      price: 0,
    },
  ];
  return (
    <>
      <Navbar />
      <Carousel events={events} />
      <div className={`${Style.home} d-flex gap-0`}>
        <Filter />
        <FilterPage events={events} />
      </div>

      <Footer />
    </>
  );
};
export default Home;
