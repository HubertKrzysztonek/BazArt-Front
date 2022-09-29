import CategoryDirectory from "../categoriesComponent/categories.component";
import HomeTop from "../home-page-top-components/homePageTopComponents";
import HomeNewest from "../home-page-newest-component/homePageNewestcomponent";
import HomePageEvents from "../home-page-event-component/homePageEventComponent";
import Footer from "../Footer/Footer";
const HomePage = ({ categories }) => {
  return (
    <>
      <HomeTop />
      <CategoryDirectory categories={categories} />
      <HomeNewest />
      <HomePageEvents />
      <Footer />
    </>
  );
};

export default HomePage;
