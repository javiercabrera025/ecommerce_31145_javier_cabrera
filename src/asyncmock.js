const products = [
  {
    id: "1",
    title: "Read Dead Redemption",
    price: 1500,
    description:
      "Red Dead Redemption is a Western-themed action-adventure game played from a third-person perspective. The player controls John Marston and completes missions—linear scenarios with set objectives—to progress through the story; in the game's epilogue, the player controls John's son Jack.",
    pictureUrl:
      "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
    category: "xbox",
  },
  {
    id: "2",
    title: "GTA V",
    price: 500,
    description:
      "Red Dead Redemption is a Western-themed action-adventure game played from a third-person perspective. The player controls John Marston and completes missions—linear scenarios with set objectives—to progress through the story; in the game's epilogue, the player controls John's son Jack.",
    pictureUrl:
      "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg",
    category: "play",
  },
  {
    id: "3",
    title: "Star Wars The Fallen Order",
    price: 900,
    description:
      "Red Dead Redemption is a Western-themed action-adventure game played from a third-person perspective. The player controls John Marston and completes missions—linear scenarios with set objectives—to progress through the story; in the game's epilogue, the player controls John's son Jack.",
    pictureUrl:
      "https://cdn.akamai.steamstatic.com/steam/apps/1172380/header.jpg",
    category: "pc",
  },
  {
    id: "4",
    title: "FIFA 22",
    price: 2500,
    description:
      "Red Dead Redemption is a Western-themed action-adventure game played from a third-person perspective. The player controls John Marston and completes missions—linear scenarios with set objectives—to progress through the story; in the game's epilogue, the player controls John's son Jack.",
    pictureUrl:
      "https://cdn.akamai.steamstatic.com/steam/apps/1506830/header.jpg",
    category: "pc",
  },
];

const categories = [
  {id: 'xbox', description: 'Xbox'},
  {id: 'play', description: 'Play Station'},
  {id: 'pc', description: 'PC'}
]

export const getCategories = () => {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(categories)
      }, 500)
  })
}

export const getProducts = (categoryId) => {
  return new Promise (resolve => {
      setTimeout(() => {
          resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
      }, 500)
  })
}

export const getProductsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 2000);
  });
};
