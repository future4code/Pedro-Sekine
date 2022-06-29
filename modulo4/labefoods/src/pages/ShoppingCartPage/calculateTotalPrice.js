export const calculateTotalPrice = (shoppingCart, deliveryPrice) => {
    // console.log("shoppingCart no calculateTotalPrice", shoppingCart);
    // console.log("deliveryPrice no calculateTotalPrice", deliveryPrice);

    const pricesArray = shoppingCart.map((item) => {
        return item.product.price * item.quantity;
    });
    // console.log("pricesArray para entender", pricesArray);

    const initialValue = 0;
    const totalProductPrice = pricesArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    );

    // console.log("totalProductPrice",totalProductPrice)

    const finalPrice = totalProductPrice + deliveryPrice

    // Primeiro eu faço com que shoppingCart vire uma array de números ✅
    // Depois, eu somo esses número e chego em um único valor. ✅
    // Depois, eu somo esse valor com o deliveryPrice ✅
    // Por fim, eu retorno o valor final ✅
    return finalPrice.toFixed(2)
};
