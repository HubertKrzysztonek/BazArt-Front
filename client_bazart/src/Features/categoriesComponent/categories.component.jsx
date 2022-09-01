import CategoryItem from "../categoryItemComponent/category.item.component";
import "./category.style.scss";

const CategoryDirectory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

// const CategoriesFromDb = () => {
//   const [categories, setCategory] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5120/api/categories")
//       .then((response) => response.json())
//       .then((data) => setCategory(data));
//   }, []);
//   return (
//     <>
//       <div className="category-holder">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className="category-container"
//             style={{
//               backgroundImage: `url(${category.imageUrl})`,
//             }}
//           >
//             <div className="category-body-container">
//               <h2>{category.name}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

export default CategoryDirectory;
