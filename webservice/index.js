const express = require('express');
const app = express();

// Create a route for the root URL
app.get('/',(req,res) => {
    res.send('Sorry wrong endpoint, please go to /movies')
})
app.get('/movies?search={title}', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});