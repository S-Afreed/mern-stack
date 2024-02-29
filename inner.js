const http = require("http");
const fs = require("fs").promises; // Using fs.promises for promise-based file operations
const path = require("path");
const express = require("express");
console.log(express);
const hostname = '127.0.0.1';
const port = 3000;

const getHtml = async () => {
    try {
        const filePath = path.join(__dirname, "indexx.html");
        const data = await fs.readFile(filePath, "utf8");
        return data;
    } catch (error) {
        console.error("Error reading HTML file:", error);
        throw error; // Re-throw the error to be caught by the calling function
    }
};

const server = http.createServer(async (req, res) => {
    try {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        
        const htmlContent = await getHtml();
        res.end(htmlContent);
    } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});