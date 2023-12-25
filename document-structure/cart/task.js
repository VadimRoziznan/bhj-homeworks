const productQuantityControls = document.querySelectorAll('.product__quantity-controls');
const products = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');
const cartListID = new Array();

productQuantityControls.forEach(productQuantityControl => {
    const controlDec = productQuantityControl.querySelector('.product__quantity-control_dec');
    const controlInc = productQuantityControl.querySelector('.product__quantity-control_inc');
    const productValue = productQuantityControl.querySelector('.product__quantity-value')

    controlDec.onclick = () => {

        if (productValue.textContent > 1) {
            productValue.textContent --;
        }
    }

    controlInc.onclick = () => {
        
        productValue.textContent ++;
    }
})

products.forEach(product => {
    const productAdd = product.querySelector('.product__add');
    const dataId = product.getAttribute('data-id');
    const productImage = product.querySelector('.product__image');
    const src = productImage.getAttribute('src')
    const cartCount = product.querySelector('.product__quantity-value');

    productAdd.onclick = () => {
        const newDiw = document.createElement('div');

        if (!cartListID.includes(dataId)) {
            newDiw.innerHTML = `<div class="cart__product" data-id="${dataId}"><img class="cart__product-image" src="${src}"><div class="cart__product-count">${cartCount.textContent}</div></div>`
            cart.appendChild(newDiw);
            cartListID.push(dataId);
        } else {
            const productsInCart = cart.querySelectorAll('.cart__product');

            productsInCart.forEach(productInCart => {
                const idProductInCart = productInCart.getAttribute('data-id')
                const productCount = productInCart.querySelector('.cart__product-count');

                if (dataId === idProductInCart) {
                    productCount.textContent = parseInt(cartCount.textContent) + parseInt(productCount.textContent);
                }
            })
        }  
    }
})