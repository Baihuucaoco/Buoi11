const url = 'https://corona-virus-world-and-india-data.p.rapidapi.com/api';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ea1c44a32emsh6d3db03643ce408p1a1ba7jsn4e792869531c',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};
async function getData() {
    try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
getData()