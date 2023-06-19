const express = require('express');
const path = require('path');
const fs = require('fs');


const PORT = process.env.PORT || 3001;

const app = express();

// middleware goes here

//

app.use(express.json());
app.use(express.urlencoded({  extended: true  }));


app.use(express.static('public'));

// api GET route for notes
app.get('/api/notes', (req, res) =>{
    const data = fs.readFileSync(path.join(__dirname, 'db', 'db.json'), 'utf8');
    console.log(data);
    res.json(JSON.parse(data));
});

app.post('/api/notes', (req, res) =>{
    const data = fs.readFileSync(path.join(__dirname, 'db', 'db.json'), 'utf8');
    console.log(req.body);
    const notes = JSON.parse(data);
});


// route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'public','index.html'))
);

// route for notes
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public','notes.html'))
);

// wildcard route to redirect users to back to index.html
app.get('*', (req, res) => 
    res.redirect('/')
);

// starts the server
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);