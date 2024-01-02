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

app.get('/loadGridPage', (req, res) => {
    res.status(200).send(db); // Sending the whole db, meaning there will be multiple arrays
})

app.put('/saveGrid/:indexToSave', (req, res) => {
    // If the user is on a 'new' page (just loaded app or clicked 'next' to non-existing page) 'put' to the api
    const saveIndex = req.params.indexToSave;
    console.log("In server.js save index is: " + saveIndex);
    let gridToSave = req.body;
    db[saveIndex] = [...gridToSave];
    res.status(200).send(db);
})

app.post('/updateGrid', (req, res) => {
    // If the user is on an existing grid page, we 'post' an update to the api with the changed grid
    //res.status(200).send(db);
})

app.delete('/deleteGrid/:idx', (req, res) => {
    const deleteIndex = req.params.idx;
    let loadIndex;
    console.log("in server.js db.len is: " + db.length);
    console.log("and db is :" + db);
    db.splice(deleteIndex, 1);
    console.log("Db should now be spliced :" + db);
    if(db.length > 0 && deleteIndex != 0) { // if index deleted was not 0, load the previous index/page
        loadIndex = deleteIndex - 1;
    } else if (db.length > 0) { // if index 0 was deleted, but other pages exist - load the next page
        loadIndex = 0;
    } else { // This was the only array - not sure if the length has changed after delete yet?
        db[0] = [...emptyGrid]; //can't handle an empty table, so after delete auto-load with blank until multi-table feature ready 
        loadIndex = 0;
    }
    // res.status(200).send(db[loadIndex]);
    res.status(200).send(db); // send the entire db, figure out how to tell the parent which way we sent it :(
})

// // app.listen(3000, () => {console.log('listening on 3000')})
ViteExpress.listen(app, 3000, () => {console.log('listening on 3000')});