let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}



// input searchButton

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const boxes = document.querySelectorAll(".box");

searchButton.addEventListener("click", function() {
  const filter = searchInput.value.toUpperCase();

  for (const box of boxes) {
    const h3 = box.querySelector("h3");

    if (h3.innerText.toUpperCase().indexOf(filter) > -1) {
      box.style.display = "";
    } else {
      box.style.display = "none";
    }
  }
});

    // <!-- Artikel lainnya -->


searchInput.addEventListener("keyup", function(event) {
if (event.key === "Enter") {
  searchButton.click();
}
});


// Variabel untuk menyimpan item cart
let cartItems = [];

// Fungsi untuk menambahkan item ke cart
function addToCart(item) {
cartItems.push(item);
renderCart();
}

// Fungsi untuk menghapus item dari cart
function removeFromCart(index) {
cartItems.splice(index, 1);
renderCart();
}


















