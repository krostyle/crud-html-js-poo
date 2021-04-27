export class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list')
        const element = document.createElement('div');
        element.innerHTML +=
            `<div class="card text-center mb-4 bg-primary">                
                    <div class="card-body">
                        <strong>Producto</strong>: ${product.name}
                        <strong>Precio</strong>: ${product.price}
                        <strong>Cantidad</strong>: ${product.quantity}
                        <button class="btn btn-danger ml-2 float-right btn-delete" data-id="${product.id}">Eliminar</button>
                        <button class="btn btn-success float-right btn-edit" data-id="${product.id}">Editar</button>
                    </div>                
            </div>`;
        productList.appendChild(element);
    }

    deleteProductList() {
        const productList = document.getElementById('product-list');
        while (productList.firstChild) {
            productList.removeChild(productList.firstChild);
        }
    }

    showMessage(message, cssClassBT) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClassBT} mt-2`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000)
    }
}