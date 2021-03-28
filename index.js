const express = require('express');
const app = express();
const fs = require('fs');
var content = "";
//Putting the meta tag to distinctively identify files as directory or file with the help of emojis
content = `<meta charset="UTF-8">`
let foo = (err, files) => {
        if (err) throw err;
        let fl = files.length;
        for (i = 0; i < fl; i++) {
            var stats = fs.statSync(`C:/Users/Khanisic/Desktop/${files[i]}`);
            if (stats.isFile()) {
                    //If it is as file
                content+=`<p> &#128221; ${files[i]}</p>`;
            } else {
                    //If it is a directory
                content+=`<p>&#128213; ${files[i]}</p>`;
            }
        } 
};
fs.readdir('C:/Users/Khanisic/Desktop/', "utf8", foo);
app.get('/', (req, res) => {
    res.send(content);
});
app.listen(3000);
