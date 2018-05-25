import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/first', (req, res) => {
    const data = {
        title: 'First Mail',
        content:
            'Bonjour %%{"type":"text", "id": "name", "default" : "etudiant"}%%, je suis Flavien %%{"type":"schedule", "id": "planning"}%%',
        form: {}
    };
    res.send(data);
});

app.get('/demo', (req, res) => {
    const data = {
        title: 'Demo Mail',
        content:
            'Bonjour %%{"type":"text", "id": "name", "default" : "etudiant"}%%, je suis Flavien %%{"type":"schedule", "id": "planning"}%%',
        form: {}
    };
    res.send(data);
});

app.get('/second', (req, res) => {
    const data = {
        title: 'Second Mail',
        content:
            'Bonjour %%{"type":"text", "id": "name", "default" : "etudiant"}%%, je suis Henri',
        form: {}
    };
    res.send(data);
});

app.listen(port, () => {
    console.log('API server is live on ' + port);
});
