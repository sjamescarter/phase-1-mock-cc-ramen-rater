const URL = "http://localhost:3000/ramens";
const imgContainer = document.querySelector('#ramen-menu');
let ramens = [];

// fetch db.json
fetch(URL)
.then(response => response.json())
.then(data => {
    data.forEach(ramen => ramens.push(ramen))
    ramens.forEach(ramen => display(ramen));
    document.querySelector('img').click();
})

// display images in div#ramen-menu
function display(ramen) {
        const newRamen = document.createElement('img')
        newRamen.src = ramen.image
        newRamen.alt = ramen.name
        imgContainer.appendChild(newRamen);
        newRamen.addEventListener('click', ramenDetails);
}

function ramenDetails(e) {
    const ramenName = e.target.alt
    const currentRamen = ramens.find(ramen => ramen.name === ramenName)
    const ramenContainer = document.querySelector('#ramen-detail')
    const img = ramenContainer.querySelector('img')
    const name = ramenContainer.querySelector('h2')
    const restaurant = ramenContainer.querySelector('h3')
    const rating = document.querySelector('#rating-display')
    const comment = document.querySelector('#comment-display')
    img.src = currentRamen.image
    name.textContent = currentRamen.name
    restaurant.textContent = currentRamen.restaurant
    rating.textContent = currentRamen.rating
    comment.textContent = currentRamen.comment
}

document.querySelector('form').addEventListener('submit', addNewRamen)

function addNewRamen(e) {
    e.preventDefault()
    const form = e.target
    const newRamen = {}
    newRamen.name = form.querySelector('#new-name').value
    newRamen.restaurant = form.querySelector('#new-restaurant').value
    newRamen.image = form.querySelector('#new-image').value
    newRamen.rating = form.querySelector('#new-rating').value
    newRamen.comment = form.querySelector('#new-comment').value
    display(newRamen)
    form.reset();
}
