export class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list')
        const element = document.createElement('div');
        element.innerHTML +=
            `<div class="card text-center mb-4 mt-4 bg-primary">
                <div class="card-body">
                    <strong>Producto</strong>: ${product.name}
                    <strong>Precio</strong>: ${product.price}
                    <strong>Cantidad</strong>: ${product.quantity}
                    <button class="btn btn-danger ml-2 float-right">Eliminar</button>
                    <button class="btn btn-success float-right">Editar</button>
                </div>
            </div>`;
        productList.appendChild(element);
    }

    deleteProductList() {
        const productList = document.getElementById('product-list');
        productList.replaceChild()




    }

    deleteProduct() {

    }

    showProducts(product) {
        const productList = document.getElementById('product-list');

    }

    showMessage() {

    }
}