const newRes = document.querySelector('#genRestaurant')
let resArr = ['Basta','Blackbelly Market','Black Cat','Chez Thuy','Chimera','Corrida','Cured','Dushanbe Teahouse']
const genRes = (e) => {
	e.preventDefault()
    const random = Math.floor(Math.random() * resArr.length);
    //console.log(random, resArr[random]);
    alert(resArr[random])
	
}

newRes.addEventListener('click',genRes)