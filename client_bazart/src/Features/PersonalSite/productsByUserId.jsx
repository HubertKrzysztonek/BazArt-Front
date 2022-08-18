import { useEffect, useState } from "react";
import axios from "axios";

const UserProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = (id) => {
    axios
      .get(`http://localhost:5120/api/product/user/${id}`)
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1>User products</h1>
      
      <>
        {products.map((product) => (
          <div>{product.name}</div>
        ))}
        <button onClick={() => fetchProducts(1)}>Id = 1</button>
      <button onClick={() => fetchProducts(2)}>Id = 2</button>
      </>
    </>
  );
};

export default UserProducts;
