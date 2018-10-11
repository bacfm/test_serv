const express = require('express');
const app = express();

app.get('/get_data', (req, res) => {
	const DATA = [
		{name: 'Sergei Kolomichenko', student: true, group: 'EK 051-16-1'},
		{name: 'Bobrovskiy Roman', student: true, group: 'EK 051-16-1'},
		{name: 'Klokov Alexanrd', student: true, group: 'EK 051-16-1'},
		{name: 'Daria Chuikina', student: true, group: 'EK 051-16-1'},
		{name: 'Margo Severinova', student: true, group: 'EK 051-16-1'},
		{name: 'Irina Barannik', student: true, group: 'EK 051-16-1'},
		{name: 'Diana Boyko', student: true, group: 'EK 051-16-1'},
		{name: 'Julia Sadovnikova', student: true, group: 'EK 051-16-1'}
	];
	res.status(200).json({message: "Ok", student: DATA});
});

app.listen(8000, () => {console.log('Listening on 8000')});
