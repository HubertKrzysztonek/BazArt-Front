// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    axios
      .get("http://localhost:5120/api/product")
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
      <h1>API products</h1>
      <>
        {products.map((product) => (
          <div>
            {product.name}
            {product.price}
          </div>
        ))}
      </>
    </>
  );
};

export default App;
