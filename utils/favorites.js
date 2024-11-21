const favorites = [];

export const toggleFavorite = (productId) => {
  const index = favorites.indexOf(productId);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(productId);
  }
};

export const isFavorite = (productId) => favorites.includes(productId);
