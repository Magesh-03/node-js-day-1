File Creation and Listing API
This Node.js Express app provides endpoints for creating text files and listing existing text files.

Installation
Clone the repository.
Install dependencies: npm install


start the project
node index.js


The server will start on port 3000.

API Endpoints
Create a File
Endpoint: /createFile
Method: GET
Response:

https://node-js-api-end-point-task.onrender.com/createFile

On success: JSON object with message and filename
On error: JSON object with error message
Get Text Files
Endpoint: /getTextFiles
Method: GET
Response:

https://node-js-api-end-point-task.onrender.com/getTextFiles

JSON object with an array of file names
Dependencies
express
fs
path
