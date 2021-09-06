const add = () => {
    const getName = document.getElementById('name');
    const name = getName.value;
    const getPrice = document.getElementById('price');
    const price = getPrice.value;
    getPrice.value = '';
    getName.value = '';
    console.log(name, price);
    addCartItem(name, price);
}
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObjact;
    if (cart) {
        cartObjact = JSON.parse(cart)
    }
    else {
        cartObjact = {};
    }
}
const addCartItem = (name, price) => {
    const cart = getCart();

    cart[name] = cart[name]
    cart[price] = cart[price]
    const stringify = JSON.stringify(cart);
    localStorage.setItem('cart', stringify)
}