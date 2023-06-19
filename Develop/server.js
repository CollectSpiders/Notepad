const express = require('express');
const path = require('path');


const PORT = process.env.PORT || 3001;

const app = express();

// middleware goes here

//

app.use(express.json());
app.use(express.urlencoded({  extended: true  }));


app.use(express.static('public'));

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