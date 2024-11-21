import { products } from "./utils/data.js";
import { Create } from "./components/ProductCard.js";

const renderProducts = () => {
  const container = document.getElementById("products-container");
  container.innerHTML = "";

  products.forEach((product) => {
    const productCard = Create(product);
    container.append(productCard);
  });
};


renderProducts();
