
var fs = require('fs');
var colors = require('colors');

fs.readdir(__dirname, function (err, files) {
	// console.log(files);
	var files = files;
    var data = files.toString();
    var myData = data.replace(/,/g,  ", ");
  	fs.writeFile('tekst_new.txt', myData, function (err) {
		if (err) throw err;
		console.log('Saved data to file!'.red);
		
		fs.readFile('tekst_new.txt', 'utf-8', function(err, data) {
		console.log('Directory content:'.blue, data)
		});
	});
});


