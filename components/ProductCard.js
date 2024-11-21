import { isFavorite, toggleFavorite } from "../utils/favorites.js";

export const Create = (product) => {
  const isFav = isFavorite(product.id);
  
  const productElement = document.createElement("div");
  productElement.classList.add("product");

  const img = document.createElement("img");
  img.src = product.image;

  const title = document.createElement("h3");
  title.innerText = product.title;

  const description = document.createElement("p");
  description.innerText = product.description;

  const price = document.createElement("p");
  price.classList.add("price");
  price.innerHTML = `$${product.price}`;

  const favoriteBtn = document.createElement("button");
  favoriteBtn.classList.add("favorite-btn");
  favoriteBtn.innerText = isFav ? "В избранном" : "В избранное";

  favoriteBtn.onclick = () => {
    toggleFavorite(product.id);
    favoriteBtn.textContent = isFavorite(product.id) ? "Добавленно": "В избранное"; 
    favoriteBtn.classList.toggle("active");
  };

  productElement.append(img, title, description, price, favoriteBtn);

  return productElement;
};

