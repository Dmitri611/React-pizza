const realPrice = (e, pizzaPrice, setPrice, price) => {
  switch (e.target.nextSibling.innerHTML) {
    case "30":
      setPrice(pizzaPrice + 3.5);
      return price;
    case "36":
      setPrice(pizzaPrice + 7.5);
      return price;
    case "26":
      setPrice(pizzaPrice);
      return price;
    default:
      return price;
  }
};

export default realPrice;
