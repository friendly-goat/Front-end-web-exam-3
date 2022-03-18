console.log("hello world");

const duckPic = document.querySelector('img')

const overDuck = (e) => {
	e.preventDefault()
	alert("You look very nice today")
}

duckPic.addEventListener('mouseover',overDuck)


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Thank you for submitting")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);