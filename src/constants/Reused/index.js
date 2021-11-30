const convertPrice = price => {
  let count = 0;

  for (let i = price.length; i > 0; i--) {
    count++;
    if (count > 3) {
      price = price.substring(0, i) + '.' + price.substring(i);
      count = 1;
    }
  }
  return price;
};
export default convertPrice;
