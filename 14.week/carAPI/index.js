const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(express.json());
app.use(cors())

const cars = [{
		model: 'Mercedes',
		topSpeed: 180,
		id: 1
	},
	{
		model: 'Opel',
		topSpeed: 130,
		id: 2
	},
	{
		model: 'Toyota',
		topSpeed: 100,
		id: 3
	}
]

app.get('/', (_, res) => {
	res.send('Hello World!')
})

app.get('/api/cars', (_, res) => {
	res.json(cars)
})

app.post('/api/cars', (req, res) => {
	if(!req.body.name || !req.body.speed){
		return res.status(404).send("Not found")
	}
	
	// if(!req.query.name || !req.query.speed){
	// 	return res.status(404).send("Not found")
	// }
	// const newCar = {
	// 	model: req.query.name,
	// 	topSpeed: parseInt(req.query.speed),

	// 	// ...req.body, // adds every queryParam to database
		
	// 	id: cars.length + 1
	// }

	const newCar = {
		model: req.body.name,
		topSpeed: parseInt(req.body.speed),

		// ...req.body, // adds every queryParam to database
		
		id: cars.length + 1
	}
	cars.push(newCar)
	res.sendStatus(204)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})