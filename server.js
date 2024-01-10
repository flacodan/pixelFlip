import express from 'express';
import ViteExpress from 'vite-express';

const app = express();

app.use(express.json());

let db = [
    [
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff'
    ],
    [
        'blue','#fff000','blue','blue','blue','yellow','yellow','blue',
        'blue','green','blue','blue','blue','yellow','yellow','blue',
        'green','green','green','blue','blue','blue','blue','blue',
        'red','green','green','blue','blue','blue','blue','blue',
        'green','green','green','green','blue','blue','blue','blue',
        'green','green','red','green','blue','blue','blue','blue',
        'green','green','green','green','green','blue','blue','blue',
        'blue','orange','blue','blue','blue','blue','blue','blue'
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

app.get('/dbLength', (req, res) => {
    res.status(200).send(db.length);
})

app.get('/getAllPages', (req, res) => {
    res.status(200).send(db); // Sending the whole db, meaning there will be multiple arrays
})

app.put('/addNewPage/:indexToAdd', (req, res) => {
    const addIndex = req.params.indexToAdd; 
    db.push(emptyGrid);
    res.status(200).send(db);
})

app.put('/saveGrid/:indexToSave', (req, res) => {
    // If the user is on a 'new' page (just loaded app or clicked 'next' to non-existing page) 'put' to the api
    const saveIndex = req.params.indexToSave;
    let gridToSave = req.body;
    db[saveIndex] = [...gridToSave];
    res.status(200).send(db);
})

app.post('/clearGrid/:idx', (req, res) => {
    // If the user clicks to clear an existing grid page, we 'post' an update to the api with the blank grid at that index
    const clearIndex = req.params.idx;
    db.splice(clearIndex, 1, emptyGrid);
    res.status(200).send(db);
})

app.delete('/deleteGrid/:idx', (req, res) => {
    const deleteIndex = req.params.idx;
    let loadIndex; // which array index to load after this is deleted
    if(db.length > 0){
        if(deleteIndex != 0) { // if not deleting idx 0, load the previous index/page
            loadIndex = deleteIndex - 1;
        } else if (deleteIndex === 0 && db.length > 1) { // deleting index 0 and other pages exist - load the next page which will now be idx 0
            loadIndex = 0;
        } else { // The only array in db was deleted 
            db[0] = [...emptyGrid]; //can't handle an empty table, so after delete auto-load with blank 
            loadIndex = 0;
        };
        db.splice(deleteIndex, 1);
        res.status(200).send([db, loadIndex]); // send the entire db, tell the parent which index to load now
    };
})

ViteExpress.listen(app, 3000, () => {console.log('listening on 3000')});