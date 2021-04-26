import firebase from "../database/firebase";
import { Product, UI } from './classes/index';


//Métodos CRUD para la base de datos
const onGetProducts = (callback) => firebase.db.collection('products').onSnapshot(callback);

const addProduct = (product) =>
    firebase.db.collection('products').doc().set({
        name: product.name,
        price: product.price,
        quantity: product.quantity
    });


const deleteProduct = id => firebase.db.collection('products').doc(id).delete();

//Eventos del DOM
window.addEventListener('DOMContentLoaded', e => {
    const ui = new UI();
    onGetProducts((querySnapshot) => {
        ui.deleteProductList();
        querySnapshot.forEach(doc => {
            const product = new Product(doc.id,doc.data().name, doc.data().price, doc.data().quantity);
            ui.addProduct(product);
            //ui.showMessage('Producto agregado satisfactoriamente','success')
        });
        const btnsDelete=document.querySelectorAll('.btn-delete');
            btnsDelete.forEach(btn=>{
                btn.addEventListener('click',async(event)=>{
                    console.log(event.target.dataset.id)
                    await deleteProduct(event.target.dataset.id)
                });
            });

    });

});

const product_form = document.getElementById('product-form');
product_form.addEventListener('submit', async(event) => {
    const name = document.getElementById('name');
    const price = document.getElementById('price');
    const quantity = document.getElementById('quantity')
    const id='';

    const product = new Product(id,name.value, price.value, quantity.value);
    event.preventDefault();
    await addProduct(product);
    //product_form.reset();
    //name.focus();

});

