import express from 'express';
import ViteExpress from 'vite-express';

const app = express();

app.use(express.json());

const db = [
    [
        '#000000','#fff000','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff',
        '#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#fff000'
    ],
];


app.get('/loadGridPage', (req, res) => {
    res.status(200).send(db);
})

app.post('/saveGrid', (req, res) => {
    let gridToSave = req.body;
    console.log("Grid is: " + gridToSave);
    db = gridToSave;
    res.status(200).send(db);
})

// app.put('/edit-job/:id', (req, res) => {
//     let id = +req.params.id
//     let editedJob = req.body
//     editedJob.rate = +editedJob.rate
//     editedJob.hours = +editedJob.hours

//     for (let i = 0; i < db.length; i++) {
//         if (db[i].id === id) {
//             db.splice(i, 1, editedJob)
//             break
//         }
//     }

//     res.status(200).send(db)
// })

// app.delete('/job/:id', (req, res) => {
//     let id = +req.params.id

//     for (let i = 0; i < db.length; i++) {
//         if (db[i].id === id) {
//             db.splice(i, 1)
//             break
//         }
//     }

//     res.status(200).send(db)
// })

// // app.listen(3000, () => {console.log('listening on 3000')})
ViteExpress.listen(app, 3000, () => {console.log('listening on 3000')});