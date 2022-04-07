const products = [
  {
    id: 1,
    title: "Read Dead Redemption",
    price: 1500,
    pictureUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
  },
  {
    id: 2,
    title: "GTA V",
    price: 500,
    pictureUrl: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg",
  },
  {
    id: 3,
    title: "Star Wars The Fallen Order",
    price: 900,
    pictureUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1172380/header.jpg",
  },
  {
    id: 4,
    title: "FIFA 22",
    price: 2500,
    pictureUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1506830/header.jpg",
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
