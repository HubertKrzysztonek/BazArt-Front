import CategoryDirectory from "../categoriesComponent/categories.component";
import HomeTop from "../home-page-top-components/homePageTopComponents";
import HomeNewest from "../home-page-newest-component/homePageNewestcomponent";
const HomePage = ({ categories }) => {
  return (
    <>
      <HomeTop />
      <CategoryDirectory categories={categories} />
      <HomeNewest />
    </>
  );
};

export default HomePage;
