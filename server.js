import { Express } from "express";

const app = Express();

app.use(Express.json())

const db = [
    [
        '#ff0000','#0000ff','#ffff00','#ffff00','#0000ff','#ffff00','#ffff00','#ffff00',
        '#ffff00','#ff0000','#ffff00','#ffff00','#0000ff','#ffff00','#ffff00','#ffff00',
        '#ff0000','#0000ff','#ffff00','#ffff00','#0000ff','#ffff00','#ffff00','#ffff00',
        '#ffff00','#ff0000','#ffff00','#ffff00','#0000ff','#ffff00','#ffff00','#ffff00',
        '#ff0000','#0000ff','#ffff00','#ffff00','#0000ff','#ffff00','#ffff00','#ffff00',
        '#ffff00','#ff0000','#ffff00','#ffff00','#0000ff','#ffff00','#ffff00','#ffff00',
        '#ff0000','#0000ff','#ffff00','#ffff00','#0000ff','#ffff00','#ffff00','#ffff00',
        '#ffff00','#ff0000','#ffff00','#ffff00','#0000ff','#ffff00','#ffff00','#ffff00',
      ],
];


app.get('/loadGridPage', (req, res) => {
    res.status(200).send(db)
})

// app.post('/job', (req, res) => {
//     let newJob = req.body

//     newJob.id = newGlobalId
//     newGlobalId++

//     db.push(newJob)

//     res.status(200).send(db)
// })

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
ViteExpress.listen(app, 3000, () => {console.log('listening on 3000')})