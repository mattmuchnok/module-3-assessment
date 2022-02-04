// For the Extra Credit:
const restaurants = ["The Capital Grille", "Ruth's Cris Steak House", "Morton's The Steakhouse"]

function randomRestaurant() {
	const random = Math.floor(Math.random() * restaurants.length);
	alert(restaurants[random]);
}

let restaurantsBtn = document.querySelector(`#restaurantRandom`)

restaurantsBtn.addEventListener(`click`, randomRestaurant)