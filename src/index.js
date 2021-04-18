import { Product, UI } from './classes/index'

const db = firebase.firestore()

//DOM Events
const product_form = document.getElementById('product-form');
product_form.addEventListener('submit', () => {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value

    const product = new Product(name, price, quantity);
})