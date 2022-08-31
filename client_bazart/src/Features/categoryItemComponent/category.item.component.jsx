import "./category-item.style.scss";
const CategoryItem = ({ category: { id, imageUrl, name } }) => {
  return (
    <div itemID={id} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default CategoryItem;
