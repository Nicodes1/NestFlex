const form = document.getElementById('form');
const loc = document.getElementsById('search-bar');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const location = loc.value;
    localStorage.setItem('location2', location);
    window.location.href = "/buy/buy.html";
})