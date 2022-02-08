;document.getElementById('log').addEventListener('click',async () => {
	const resp = await fetch('http://localhost:3000/api/cars')
	const cars = await resp.json();

	document.querySelector('pre').innerHTML = JSON.stringify(cars, null, 2)
})