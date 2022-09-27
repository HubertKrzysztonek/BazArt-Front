import CategoryDirectory from "../categoriesComponent/categories.component";
import HomeTop from "../home-page-top-components/homePageTopComponents";
import HomeNewest from "../home-page-newest-component/homePageNewestcomponent";
import Footer from "../Footer/Footer";
const HomePage = ({ categories }) => {
  return (
    <>
      <HomeTop />
      <CategoryDirectory categories={categories} />
      <HomeNewest />
      <Footer />
    </>
  );
};

export default HomePage;
