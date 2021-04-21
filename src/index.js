import { Product, UI } from './classes/index';
import firebase from "../database/firebase";

//Métodos CRUD para la base de datos

const addProduct = (product) =>
    firebase.db.collection('products').doc().set({
        name: product.name,
        price: product.price,
        quantity: product.quantity
    });
const getProduct = () => firebase.db.collection('products').get();
const onGetProducts = (callback) => firebase.db.collection('products').onSnapshot(callback);



//Eventos del DOM
window.addEventListener('DOMContentLoaded', async(event) => {
    const ui = new UI();
    onGetProducts((querySnapshot) => {
        ui.deleteProductList();
        querySnapshot.forEach(doc => {
            const product = new Product(doc.data().name, doc.data().price, doc.data().quantity);
            ui.addProduct(product);
            event.preventDefault();
            console.log(product);
        })
    })

})


const product_form = document.getElementById('product-form');
product_form.addEventListener('submit', async(event) => {
    const name = document.getElementById('name');
    const price = document.getElementById('price');
    const quantity = document.getElementById('quantity')

    const product = new Product(name.value, price.value, quantity.value);
    event.preventDefault();
    await addProduct(product);
    product_form.reset();
    name.focus();

})