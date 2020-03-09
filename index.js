const express = require('express');

const server = express();
const shortid = require('shortid');
let hubs = [];
let lessons = [];

server.use(express.json());

server.get('/hello', (req, res) => {
    res.status(200).json({ api: 'Hello, Web 27'});
});

server.post('/api/hubs', (req, res) => {
    const hubInfo = req.body;
    hubInfo.id = shortid.generate();
    hubs.push(hubInfo);

    res.status(201).json(hubInfo);
})

server.post('/api/lessons', (req, res) => {
    const lessonInfo = req.body;
    lessons.push(lessonInfo);
    lessonInfo.id = shortid.generate();
    res.status(201).json(lessonInfo);
})

const PORT = 5000;
server.listen((PORT), () => console.log(`\n ** API running on http://localhost:${PORT} **\n`));
