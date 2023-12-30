import express from 'express';
import ViteExpress from 'vite-express';

const app = express();

app.use(express.json());

let db = [
    [
        '#000000','#fff000','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff'
    ],
];

const emptyGrid = [
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff'
];

app.get('/loadGridPage', (req, res) => {
    res.status(200).send(db);
})

app.put('/saveGrid', (req, res) => {
    // If the user is on a 'new' page (just loaded app or clicked 'next' to non-existing page) 'put' to the api
    let gridToSave = req.body;
    console.log("server.js saveGrid grid is: " + gridToSave);
    db[0] = [...gridToSave];
    res.status(200).send(db);
})

app.post('/updateGrid', (req, res) => {
    // If the user is on an existing grid page, we 'post' an update to the api with the changed grid
    //res.status(200).send(db);
})

app.delete('/deleteGrid/:idx', (req, res) => {
    const deleteIndex = req.params.idx;
    db.splice(deleteIndex, 1);
    res.status(200).send(db);
})

// // app.listen(3000, () => {console.log('listening on 3000')})
ViteExpress.listen(app, 3000, () => {console.log('listening on 3000')});