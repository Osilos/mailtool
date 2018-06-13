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
            'Bonjour Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae %%{"type":"text", "id": "name", "default" : "etudiant"}%%, %%{"type":"space"}%% je suis Flavien %%{"type":"schedule", "id": "planning"}%% dicta sunt explicabo %%{"type":"space"}%% %%{"type":"space"}%% sectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat q',
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
