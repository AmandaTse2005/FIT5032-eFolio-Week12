//Week 9 Activity 9.1.3: Testing Node.js server status
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from Node.js!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});