import CategoryDirectory from "../categoriesComponent/categories.component";
import HomeTop from "../home-page-top-components/homePageTopComponents";

const HomePage = ({ categories }) => {
  return (
    <>
      <HomeTop />
      <CategoryDirectory categories={categories} />
    </>
  );
};

export default HomePage;
