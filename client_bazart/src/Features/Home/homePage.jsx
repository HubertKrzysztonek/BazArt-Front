import CategoryDirectory from "../categoriesComponent/categories.component";
import UserProducts from "../PersonalSite/productsByUserId";

const HomePage = ({ categories }) => {
  return (
    <>
      <CategoryDirectory categories={categories} />
    </>
  );
};

export default HomePage;
