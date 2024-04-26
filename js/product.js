
let products = [];
fetch("./js/product.json")
  .then(response => response.json())
  .then(data => {
    products = data;
    displayProducts(products);
  })
  
  function displayProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = '';
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>Categoría: ${product.category}</p>
        <p>Precio: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Agregar al carrito</button>
      `;
      container.appendChild(productElement);
    });
  }
  
  function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('li');
    cartItem.innerText = `${selectedProduct.title} - $${selectedProduct.price}`;
    cartItems.appendChild(cartItem);
  }
  
  displayProducts();