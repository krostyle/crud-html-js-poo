export class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list')
        const element = document.createElement('div');
        element.innerHTML =
            `<div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Producto</strong>: ${product.name}
                    <strong>Precio</strong>: ${product.price}
                    <strong>Cantidad</strong>: ${product.quantity}
                </div>
            </div>`;
        productList.appendChild(element);
    }

    deleteProduct() {

    }

    showProducts(product) {
        const productList = document.getElementById('product-list');

    }

    showMessage() {

    }
}