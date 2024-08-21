document.addEventListener('DOMContentLoaded', function () {
  const cart = [];
  const displayElement = document.getElementById('display');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const priceDisplay = document.getElementById('price-display');
  
  document.querySelectorAll('.griditem button').forEach(button => {
    button.addEventListener('click', function () {
      const itemName = this.closest('.griditem').querySelector('.mainitem').textContent.trim();
      const itemPriceText = this.closest('.griditem').querySelector('.price').textContent.trim();
      const itemPrice = parseFloat(itemPriceText.replace('$', ''));
      addToCart(itemName, itemPrice);
    });
  });

  document.querySelectorAll('.confirm-order').forEach(button => {
    button.addEventListener('click', function () {
      alert('Order Confirmed! Thank you for shopping with us!')
      location.reload()
    });
  });

  function addToCart(itemName, itemPrice) {
    const existingCartItem = cart.find(item => item.name === itemName);

    if (existingCartItem) {
      existingCartItem.quantity++;
      existingCartItem.totalPrice += itemPrice;
    } else {
      cart.push({ name: itemName, price: itemPrice, quantity: 1, totalPrice: itemPrice });
    }

    updateCartDisplay();
  }

  function updateCartDisplay() {
    cartItemsContainer.innerHTML = ''; 
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
      totalItems += item.quantity;
      totalPrice += item.totalPrice;

      const cartItemElement = document.createElement('div');
      cartItemElement.classList.add('cart-item');
      cartItemElement.innerHTML = `
        <span class="item-name">${item.name}</span>
        <span class="item-quantity-price">
          <span class="item-quantity">${item.quantity}x</span>
          <span class="item-price">@ $${item.price.toFixed(2)}</span>
        </span>
        <span class="item-total-price">$${item.totalPrice.toFixed(2)}</span>
        <button class="remove-item">&times;</button>
      `;

      cartItemElement.querySelector('.remove-item').addEventListener('click', function () {
        removeFromCart(item.name);
      });

      cartItemsContainer.appendChild(cartItemElement);
    });

    displayElement.textContent = totalItems;
    priceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
  }

  function removeFromCart(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
      cart[itemIndex].quantity--;
      cart[itemIndex].totalPrice -= cart[itemIndex].price;

      if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
      }
    }
    updateCartDisplay();
  }


});
