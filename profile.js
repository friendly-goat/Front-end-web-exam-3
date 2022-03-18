const myColor = document.querySelector('#color')
const myPlace = document.querySelector('#place')
const myRitual = document.querySelector('#ritual')

const clickColor = (e) => {
	e.preventDefault()
	alert("Red")
}
const clickPlace = (e) => {
	e.preventDefault()
	alert("Colorado")
}
const clickRitual = (e) => {
	e.preventDefault()
	alert("Tea time")
}

myColor.addEventListener('click',clickColor)
myPlace.addEventListener('click',clickPlace)
myRitual.addEventListener('click',clickRitual)