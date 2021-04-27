import firebase from "../database/firebase";
import { Product, UI } from './classes/index';


//Métodos CRUD para la base de datos en Firebase
let editStatus = false;
let id = '';
const onGetProducts = (callback) => firebase.db.collection('products').onSnapshot(callback);

const addProduct = (product) =>
    firebase.db.collection('products').doc().set({
        name: product.name,
        price: product.price,
        quantity: product.quantity
    });

const deleteProduct = id => firebase.db.collection('products').doc(id).delete();

const getProduct = (id) => firebase.db.collection('products').doc(id).get();

const updateProduct = (id, product) => firebase.db.collection('products').doc(id).update(product);



const product_form = document.getElementById('product-form');
//Añadir/Editar productos
product_form.addEventListener('submit', async(event) => {
    const name = document.getElementById('name');
    const price = document.getElementById('price');
    const quantity = document.getElementById('quantity')
    const ui = new UI();
    event.preventDefault();
    if (name.value === '' | price.value === '' | quantity.value === '') {
        ui.showMessage('Complete todos los campos por favor', 'info')
    } else {
        const product = new Product(id, name.value, price.value, quantity.value);
        event.preventDefault();
        if (!editStatus) {
            await addProduct(product);
            ui.showMessage('Producto Agregado Correctamente', 'success')
        } else {
            console.log(product)
            await updateProduct(id, {
                name: name.value,
                price: price.value,
                quantity: quantity.value
            });
            ui.showMessage('Producto Actualizado Correctamente', 'info')
        }


        product_form.reset();
        name.focus();
    }
});


//Eventos del DOM
window.addEventListener('DOMContentLoaded', e => {
    const ui = new UI();
    onGetProducts((querySnapshot) => {
        ui.deleteProductList();
        querySnapshot.forEach(doc => {
            const product = new Product(doc.id, doc.data().name, doc.data().price, doc.data().quantity);
            ui.addProduct(product);
        });
        const btnsDelete = document.querySelectorAll('.btn-delete');
        btnsDelete.forEach(btn => {
            btn.addEventListener('click', async(event) => {
                await deleteProduct(event.target.dataset.id)
                ui.showMessage('Producto Eliminado Correctamente', 'danger')
            });
        });
        const btnsEdit = document.querySelectorAll('.btn-edit');
        btnsEdit.forEach(btn => {
            btn.addEventListener('click', async(event) => {
                const doc = await getProduct(event.target.dataset.id)
                const product = new Product(doc.id, doc.data().name, doc.data().price, doc.data().quantity)
                console.log(product);
                editStatus = true;
                id = product.id;
                product_form['btn-product-form'].value = 'Actualizar'
                product_form['name'].value = product.name;
                product_form['price'].value = product.price;
                product_form['quantity'].value = product.quantity
            });
        });

    });

});