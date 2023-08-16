import { useEffect, useState } from "react";
import { Product } from "./interfaces";

function App() {
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:5000/api/products`);
      const data = await res.json();
      setProduct(data);
    };
    fetchData();
  }, []);

  const addProduct = () => {
    setProduct((prevState) => [
      ...prevState,
      {
        id: 5,
        name: "New Product",
        description: "New Product Description",
        price: 100,
        pictureUrl: "https://picsum.photos/200/300",
        type: "New Product Type",
        brand: "New Product Brand",
        quantityInStock: 10,
      },
    ]);
  };

  const productSohw = products.map((product) => (
    <li key={product.id}>
      {product.name} - {product.price}$
    </li>
  ));
  return (
    <>
      <h1 style={{ color: "red" }}>Re-Store</h1>
      <ul>{productSohw}</ul>
      <button onClick={() => addProduct()}>Add Product</button>
    </>
  );
}

export default App;
