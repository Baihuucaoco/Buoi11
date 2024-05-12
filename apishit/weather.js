const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ea1c44a32emsh6d3db03643ce408p1a1ba7jsn4e792869531c',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};
async function getThings() {
    try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(JSON.parse(result));
    console.log(JSON.parse(result).main.temp);
    console.log(typeof(result));
} catch (error) {
	console.error(error);
}
}
getThings()