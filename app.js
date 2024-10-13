const { log, error } = require('console');
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();


app.get('/createFile', (req, res) => {
   
    const filesFolder = path.join(__dirname, 'files');

   
    if (!fs.existsSync(filesFolder)) {
        fs.mkdirSync(filesFolder);
    }

    const currentTimestamp = new Date().toISOString();

    
    const currentDateTime = new Date();
    const formattedDateTime = formatDate(currentDateTime); // Function to format date and time
    const filename = `${formattedDateTime}.txt`;
    const filepath = path.join(filesFolder, filename);

    
    const filecontent = `Current Timestamp: ${currentTimestamp}\n`;

   
    fs.writeFile(filepath, filecontent, (err) => {
        if (err) {
            console.error(`Error creating file: ${err}`);
            res.status(500).json({ error: 'Failed to create file' });
        } else {
            console.log('File created successfully:', filename);
            res.json({ message: 'File created successfully', filename });
        }
    });
});


app.get('/getTextFiles', (req, res) => {
    
    const filesFolder = path.join(__dirname, 'files');

   
    fs.readdir(filesFolder, (err, files) => {
        if (err) {
            console.error(`Error in reading files: ${err}`);
            res.status(500).json({ error: 'Failed to read files' });
        } else {
           
            const textFiles = files.filter(file => file.endsWith('.txt'));

            res.json({ files: textFiles });
        }
    });
});


function formatDate(date) {
    const year = date.getFullYear();
    const month = padNumber(date.getMonth() + 1);
    const day = padNumber(date.getDate());
    const hours = padNumber(date.getHours());
    const minutes = padNumber(date.getMinutes());
    const seconds = padNumber(date.getSeconds());
    return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
}


function padNumber(num) {
    return num.toString().padStart(2, '0');
}


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});