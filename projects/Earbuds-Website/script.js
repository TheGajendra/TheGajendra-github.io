const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.3
});
document.addEventListener("DOMContentLoaded", function() {
    const specs = document.querySelectorAll(".spec");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    specs.forEach(spec => {
        observer.observe(spec);
    });
});


sections.forEach(section => {
    observer.observe(section);
});

let cartCount = 0;
const cartItems = [];

function addToCart(itemName, itemPrice) {
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
    cartItems.push({ name: itemName, price: itemPrice });
    updateCartDetails();
}

function updateCartDetails() {
    const cartDetails = document.getElementById('cartItems');
    cartDetails.innerHTML = '';
    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeFromCart(${index})">&times;</button>`;
        cartDetails.appendChild(li);
    });
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    cartCount--;
    document.querySelector('.cart-count').textContent = cartCount;
    updateCartDetails();
}


function toggleCart() {
    const cartDetails = document.getElementById('cartDetails');
    cartDetails.classList.toggle('active');
}

function showPopup(productElement) {
    const title = productElement.dataset.name;
    const desc = productElement.dataset.desc;
    const price = productElement.dataset.price;
    const img = productElement.getAttribute('data-img');

    document.getElementById('popupTitle').textContent = title;
    document.getElementById('popupDesc').textContent = desc;
    document.getElementById('popupPrice').textContent = `Price: ₹${price}`;
    document.getElementById('popupimg').src = img;

    const popup = document.getElementById('popup');
    popup.classList.add('active');
}

function hidePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active');
}




