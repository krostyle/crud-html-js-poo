export class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list')
        const element = document.createElement('div');
        element.innerHTML =
            `<div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Producto</strong>: ${product}
                </div>
            </div>`;

    }

    deleteProduct() {

    }

    showMessage() {

    }
}