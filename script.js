let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.getAttribute('data-name');
        const productPrice = this.parentElement.getAttribute('data-price');
        
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;

        alert(`${productName} added to cart!`);
    });
});