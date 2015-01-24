// var fs = require('fs');
 
// var csvFile = fs.readFileSync("friends_list.csv","utf8");
// // console.log(csvFile);

// var csvParse = function(file){
// 	var arrFirst = csvFile.split("\n")
// 	arrFirst.splice(0, 1);
// 	var objMake = function(fname, lname, monthsCon, eMail){
// 		this.first_name = fname;
// 		this.last_name = lname;
// 		this.months_since_contact = monthsCon;
// 		this.email_address = eMail;
// 	}
// 	var perSpl;
// 	var arrLast = [];

// 	for(var i = 0; i < arrFirst.length; i++){
// 		perSpl = arrFirst[i].split("\,");
// 		arrLast.push(new objMake(perSpl[0], perSpl[1], perSpl[2], perSpl[3]));
// 	}
	
// 	return arrLast;
// };


// var csv_data = csvParse(csvFile);
// console.log(csvParse(csvFile));

// var fs = require('fs');
 
// var csvFile = fs.readFileSync("friend_list.csv","utf8");
// var emailTemplate = fs.readFileSync('emailTemplate.html', 'utf8');
 
// function csvParse(csvFile){
//     var arrayOfObjects = [];
//     var arr = csvFile.split("\n");
//     var newObj;
 
//     keys = arr.shift().split(",");
 
//     arr.forEach(function(contact){
//         contact = contact.split(",");
//         newObj = {};
 
//         for(var i =0; i < contact.length; i++){
//             newObj[keys[i]] = contact[i];
//         }
 
//         arrayOfObjects.push(newObj);
 
//     })
 
//     return arrayOfObjects;
// }
 
// friendList = csvParse(csvFile);
 
// friendList.forEach(function(row){
 
//     firstName = row["firstName"];
//     numMonthsSinceContact = row["monthsSinceContact"];
 
//     // we make a copy of the emailTemplate variable to a new variable to ensure
//     // we don't edit the original template text since we'll need to us it for
//     // multiple emails
 
//     templateCopy = emailTemplate;
 
//     // use .replace to replace FIRST_NAME and NUM_MONTHS_SINCE_CONTACT with firstName and  monthsSinceLastContact 
//     templateCopy = templateCopy.replace(/FIRST_NAME/gi,
//     firstName).replace(NUM_MONTHS_SINCE_CONTACT/gi, monthsSinceContact);
 
//     console.log(templateCopy);
 
var fs = require('fs');
 
var csvFile = fs.readFileSync("friends_list.csv","utf8");
var emailTemplate = fs.readFileSync('emailTemplate.html', 'utf8');
 
function csvParse(csvFile){
    var arrayOfObjects = [];
    var arr = csvFile.split("\n");
    var newObj;
 
    keys = arr.shift().split(",");
 
    arr.forEach(function(contact){
        contact = contact.split(",");
        newObj = {};
 
        for(var i =0; i < contact.length; i++){
            newObj[keys[i]] = contact[i];
        }
 
        arrayOfObjects.push(newObj);
 
    })
 
    return arrayOfObjects;
}
 
friendList = csvParse(csvFile);
 
friendList.forEach(function(row){
 
    firstName = row["firstName"];
    numMonthsSinceContact = row["monthsSinceContact"];
 
    // we make a copy of the emailTemplate variable to a new variable to ensure
    // we don't edit the original template text since we'll need to us it for
    // multiple emails
 
    templateCopy = emailTemplate;
 
    // use .replace to replace FIRST_NAME and NUM_MONTHS_SINCE_CONTACT with firstName and  monthsSinceLastContact 
    templateCopy = templateCopy.replace(/FIRST_NAME/gi,firstName).replace(/NUM_MONTHS_SINCE_CONTACT/gi, numMonthsSinceContact);
 
    console.log(templateCopy);
 
 
})