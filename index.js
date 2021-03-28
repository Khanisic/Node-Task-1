const express = require('express');
const app = express();
const fs = require('fs');
var content = "";
content = `<meta charset="UTF-8">`
let foo = (err, files) => {
        if (err) throw err;
        let fl = files.length;
        for (i = 0; i < fl; i++) {
            var stats = fs.statSync(`C:/Users/Khanisic/Desktop/${files[i]}`);
            if (stats.isFile()) {
                content+=`<p> &#128221; ${files[i]}</p>`;
            } else {
                content+=`<p>&#128213; ${files[i]}</p>`;
            }
        } 
};
fs.readdir('C:/Users/Khanisic/Desktop/', "utf8", foo);
app.get('/', (req, res) => {
    res.send(content);
});
app.listen(3000);
