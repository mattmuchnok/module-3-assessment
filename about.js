console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert("Form was submitted sucessfully!")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let catImg = document.querySelector(`img#cat`)

catImg.addEventListener(`mouseover`, () => alert(`You're all that and a super-size bag of chips.`))