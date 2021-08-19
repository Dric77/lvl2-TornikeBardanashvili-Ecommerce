export function serialize(product) {
  return {
    title: product.title,
    price: product.price,
    disCountPrice: "21,99",
    description: product.description,
    category: product.category,
    reviewCount: 4,
    review: [
      {
        userName: "Marthasteward",
        time: "January 28, 2020",
        reviewDes: "Nice one, love it!",
        reviewStar: 5,
      },
      {
        userName: "Marthasteward",
        time: "January 28, 2020",
        reviewDes: "poor product!",
        reviewStar: 1,
      },
      {
        userName: "Marthasteward",
        time: "January 28, 2020",
        reviewDes: "Nice one, love it!",
        reviewStar: 5,
      },
      {
        userName: "Marthasteward",
        time: "January 28, 2020",
        reviewDes: "poor product!",
        reviewStar: 1,
      },
    ],
    model: "Shirt 5407x",
    color: "Blue",
    delivery: "USA, Europe",
    size: ["small", "medium", "large"],
    img: product.image,
    imgGroup: [
      {
        imgUrl:
          "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg",
        color: "blue",
      },
      {
        imgUrl:
          "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg",
        color: "red",
      },
      {
        imgUrl:
          "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg",
        color: "gray",
      },
      {
        imgUrl:
          "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg",
        color: "black",
      },
    ],
    id: product.id,
  };
}
