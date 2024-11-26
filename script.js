// Initialize the cart items count
let cartCount = 0;

// Function to update the cart count
function updateCartCount() {
    document.querySelector('.cart').textContent = `Cart (${cartCount})`;
}

// Add event listener to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.dataset.product;
        const productPrice = this.dataset.price;
        cartCount++;
        updateCartCount();
        alert(`${productName} has been added to your cart!`);
    });
});
