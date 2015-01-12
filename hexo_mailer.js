var fs = require('fs');

var csvFile = fs.readFileSync("friends_list.csv", "utf8");
console.log(csvFile);

function csvParse(csvFile){
	
	var str = csvFile.toString().split(',');
	return str;
}

var csv_data = csvParse(csvFile);
console.log(csv_data);
